import React, { useState } from "react";
import BaziPersonForm from "../components/BaziPersonForm";
import { mapFormDataToBaziPerson } from "../utils/baziMapper";
import { fetchCompatibility } from "../lib/baziApi";
import { calculatePillars } from "../utils/baziPillars";

// --- Colorful Four Pillars Card ---
const PersonPillarsCard = ({ title, pillars, gender }) => {
  const color = gender === 1 ? "blue" : "rose";

  return (
    <div className={`p-4 border rounded-lg bg-${color}-50`}>
      <h3 className={`text-lg font-bold text-${color}-600 mb-2`}>{title}</h3>

      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <p className="text-sm text-gray-500">年柱</p>
          <p className="text-xl font-semibold">{pillars.year}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">月柱</p>
          <p className="text-xl font-semibold">{pillars.month}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">日柱</p>
          <p className="text-xl font-semibold">{pillars.day}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">时柱</p>
          <p className="text-xl font-semibold">{pillars.hour}</p>
        </div>
      </div>
    </div>
  );
};

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
    if (person1.birth_hour < 0 || person1.birth_hour > 23 ||
        person2.birth_hour < 0 || person2.birth_hour > 23) {
      alert("小时必须在 0 到 23 之间");
      return;
    }
    if (person1.birth_minute < 0 || person1.birth_minute > 59 ||
        person2.birth_minute < 0 || person2.birth_minute > 59) {
      alert("分钟必须在 0 到 59 之间");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const p1 = mapFormDataToBaziPerson(person1);
      const p2 = mapFormDataToBaziPerson(person2);

      console.log(
        "Sending payload:",
        JSON.stringify({ person1: p1, person2: p2 }, null, 2)
      );

      const res = await fetchCompatibility(p1, p2);
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
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold">合婚结果</h2>

          {/* 甲方四柱 */}
          <PersonPillarsCard
            title="甲方四柱"
            pillars={calculatePillars(mapFormDataToBaziPerson(person1))}
            gender={person1.gender}
          />

          {/* 乙方四柱 */}
          <PersonPillarsCard
            title="乙方四柱"
            pillars={calculatePillars(mapFormDataToBaziPerson(person2))}
            gender={person2.gender}
          />

          {/* Score */}
          <div className="p-6 bg-green-50 border rounded-lg">
            <h3 className="text-xl font-semibold">
              合婚匹配得分：{result.score}
            </h3>
            <p className="text-gray-600 mt-2">
              {result.score >= 90 && "天作之合 💍"}
              {result.score >= 80 && result.score < 90 && "上等姻缘 💕"}
              {result.score >= 70 && result.score < 80 && "缘分尚可 🤝"}
              {result.score < 70 && "需进一步分析"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BaziCompatibility;