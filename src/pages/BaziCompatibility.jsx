import React, { useState } from "react";
import BaziPersonForm from "../components/BaziPersonForm";
import { analyzeCompatibility } from "../API/baziCompatibility";
import { mapFormDataToBaziPerson } from "../utils/baziMapper";

const BaziCompatibility = () => {
  const [person1, setPerson1] = useState({});
  const [person2, setPerson2] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidPerson = (p) =>
    p?.year &&
    p?.month &&
    p?.day &&
    p?.gender !== undefined &&
    p?.birth_hour !== "" &&
    p?.birth_minute !== "";

  const handleCalculate = async () => {
    if (!isValidPerson(person1) || !isValidPerson(person2)) {
      alert("请填写双方完整的出生日期、出生时间和性别");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const p1 = mapFormDataToBaziPerson(person1);
      const p2 = mapFormDataToBaziPerson(person2);

      const payload = {
        person1: p1,
        person2: p2
      };

      console.log("Sending payload:", JSON.stringify(payload, null, 2));

      const res = await analyzeCompatibility(p1, p2);
      setResult(res);
    } catch (err) {
      console.error("Compatibility error:", err);
      alert("计算失败：" + (err.message || "服务器错误，请稍后再试"));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPerson1({});
    setPerson2({});
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">八字合婚测试</h1>

      <BaziPersonForm label="甲方（男命 / 女命）" onChange={setPerson1} />
      <BaziPersonForm label="乙方（男命 / 女命）" onChange={setPerson2} />

      <div className="flex gap-4">
        <button
          onClick={handleCalculate}
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "计算中…" : "计算合婚"}
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          重置
        </button>
      </div>

      {result && (
        <div className="mt-6 p-4 bg-green-50 border rounded">
          <h2 className="text-xl font-semibold">
            合婚匹配得分：{result.score}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {result.score >= 90 && "天作之合 💍"}
            {result.score >= 80 && result.score < 90 && "上等姻缘 💕"}
            {result.score >= 70 && result.score < 80 && "缘分尚可 🤝"}
            {result.score < 70 && "需进一步分析"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BaziCompatibility;