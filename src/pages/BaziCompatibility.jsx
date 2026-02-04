import React, { useState } from "react";
import BaziPersonForm from "../components/BaziPersonForm";
import { analyzeCompatibility } from "../API/baziCompatibility";
import { mapFormDataToBaziPerson } from "../utils/baziMapper";

const BaziCompatibility = () => {
  const [person1, setPerson1] = useState(null);
  const [person2, setPerson2] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    if (!person1 || !person2) return;

    setLoading(true);
    setResult(null);

    try {
      const p1 = mapFormDataToBaziPerson(person1);
      const p2 = mapFormDataToBaziPerson(person2);

      console.log("API payload:", p1, p2);

      const res = await analyzeCompatibility(p1, p2);
      setResult(res);
    } catch (err) {
      console.error("Compatibility error:", err);
      alert("计算失败，请稍后再试");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPerson1(null);
    setPerson2(null);
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">
        八字合婚测试（BaZi Compatibility）
      </h1>

      <BaziPersonForm label="Person A" onChange={setPerson1} />
      <BaziPersonForm label="Person B" onChange={setPerson2} />

      <div className="flex gap-4">
        <button
          onClick={handleCalculate}
          disabled={!person1 || !person2 || loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "计算中..." : "计算合婚"}
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
            匹配得分：{result.score}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {result.score >= 90 && "天作之合 💍"}
            {result.score >= 80 && result.score < 90 && "优秀匹配 💕"}
            {result.score >= 70 && result.score < 80 && "良好匹配 🤝"}
            {result.score < 70 && "需要进一步分析"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BaziCompatibility;
