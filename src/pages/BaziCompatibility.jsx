import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import BaziPersonForm from "../components/BaziPersonForm";
import { mapFormDataToBaziPerson } from "../utils/baziMapper";
import { fetchCompatibility } from "../lib/baziApi";
import { calculatePillars } from "../utils/baziPillars";
import { generateAiReport } from "../API/aiReports";

const PersonPillarsCard = ({ title, pillars, gender }) => {
  const color = gender === 1 ? "blue" : "rose";
  return (
    <div className={`p-4 border rounded-lg bg-${color}-50 shadow-sm border-${color}-100`}>
      <h3 className={`text-sm font-bold text-${color}-600 mb-3 text-center uppercase tracking-wider`}>{title}</h3>
      <div className="grid grid-cols-4 gap-1 text-center">
        <div><p className="text-[10px] text-gray-400">年柱</p><p className="text-lg font-bold text-gray-800">{pillars.year}</p></div>
        <div><p className="text-[10px] text-gray-400">月柱</p><p className="text-lg font-bold text-gray-800">{pillars.month}</p></div>
        <div><p className="text-[10px] text-gray-400">日柱</p><p className="text-lg font-bold text-gray-800">{pillars.day}</p></div>
        <div><p className="text-[10px] text-gray-400">时柱</p><p className="text-lg font-bold text-gray-800">{pillars.hour}</p></div>
      </div>
    </div>
  );
};

const BaziCompatibility = () => {
  const [person1, setPerson1] = useState({});
  const [person2, setPerson2] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [isDeepDive, setIsDeepDive] = useState(false);

  const isValidPerson = (p) => p?.year && p?.month && p?.day && p?.gender !== undefined;
  const getPillars = (p) => calculatePillars(mapFormDataToBaziPerson(p));

  const handleMatch = async () => {
    if (!isValidPerson(person1) || !isValidPerson(person2)) {
      alert("请填写双方完整的出生日期和性别");
      return;
    }
    setLoading(true);
    setResult(null);
    setAiAnalysis("");
    setIsDeepDive(false);

    try {
      const res = await fetchCompatibility(person1, person2);
      setResult(res);

      // Call Gemini API directly (NO backend needed!)
      setAiLoading(true);
      const briefing = await generateAiReport(
        res.score,
        getPillars(person1),
        getPillars(person2),
        false // isPaid = false for free version
      );
      setAiAnalysis(briefing);
    } catch (err) {
      console.error("Error generating report:", err);
      alert("合婚报告生成失败: " + err.message);
    } finally {
      setLoading(false);
      setAiLoading(false);
    }
  };

  const handleDeepAnalysis = async () => {
    setAiLoading(true);
    try {
      // Call Gemini API for paid version
      const fullReport = await generateAiReport(
        result.score,
        getPillars(person1),
        getPillars(person2),
        true // isPaid = true for deep analysis
      );
      setAiAnalysis(fullReport);
      setIsDeepDive(true);
    } catch (err) {
      console.error("Error generating deep report:", err);
      alert("详批生成失败: " + err.message);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-900">Meet U 八字合婚</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
        <BaziPersonForm label="甲方信息" onChange={setPerson1} />
        <BaziPersonForm label="乙方信息" onChange={setPerson2} />
      </div>

      <div className="flex justify-center">
        <button 
          onClick={handleMatch} 
          disabled={loading} 
          className="px-12 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? "正在测算天机..." : "立即开始合婚"}
        </button>
      </div>

      {result && (
        <div className="mt-10 animate-fade-in space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PersonPillarsCard title="甲方命盘" pillars={getPillars(person1)} gender={person1.gender} />
            <PersonPillarsCard title="乙方命盘" pillars={getPillars(person2)} gender={person2.gender} />
          </div>

          <div className="p-8 bg-white border border-indigo-50 rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-6 mb-6">
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">缘分匹配得分</p>
                <h2 className="text-6xl font-black text-indigo-600 font-serif">{result.score}</h2>
              </div>
              
              {!isDeepDive && (
                <div className="text-center md:text-right">
                  <p className="text-xs text-amber-600 font-bold mb-2">想看五年财运与深度解析？</p>
                  <button 
                    onClick={handleDeepAnalysis} 
                    disabled={aiLoading} 
                    className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all disabled:opacity-50"
                  >
                    {aiLoading ? "正在运功..." : "🧧 获取2000字至尊详批"}
                  </button>
                </div>
              )}
            </div>

            <div className="prose prose-indigo max-w-none">
              <h4 className="text-indigo-900 font-bold mb-4">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm uppercase tracking-wide">
                  {isDeepDive ? "🏮 至尊深度详批" : "📜 大师初步简评"}
                </span>
              </h4>
              
              {aiLoading && !isDeepDive ? (
                <p className="italic text-indigo-400 animate-pulse">正在推演命格...</p>
              ) : (
                <div className={`text-gray-800 leading-relaxed transition-all duration-500 ${isDeepDive ? 'text-lg' : 'italic opacity-90 border-l-4 border-indigo-100 pl-4'}`}>
                  <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BaziCompatibility;