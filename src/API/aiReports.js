import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variable (set in .env.local)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Use stable model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export async function generateAiReport(score, p1Pillars, p2Pillars, isPaid = false) {
  const baseInfo = `
合婚分数：${score} 分

甲方命盘：
- 年柱：${p1Pillars?.year}
- 月柱：${p1Pillars?.month}
- 日柱：${p1Pillars?.day}
- 时柱：${p1Pillars?.hour}

乙方命盘：
- 年柱：${p2Pillars?.year}
- 月柱：${p2Pillars?.month}
- 日柱：${p2Pillars?.day}
- 时柱：${p2Pillars?.hour}
`;

  const freePrompt = `
你是一位专业的八字命理老师。

请根据以下双方命盘与合婚分数，撰写一份【基础合婚报告】：
${baseInfo}

要求：
- 字数大约 300～500 字。
- 用温和、口语化、但有专业度的语气。
- 解释这个分数大致代表的缘分程度。
- 简单分析双方性格、相处模式、优点与需要注意的地方。
- 不要提到"AI""模型""系统"等字眼。
`;

  const paidPrompt = `
你是一位经验丰富的八字命理大师。

请根据以下双方命盘与合婚分数，撰写一份【至尊深度合婚详批】：
${baseInfo}

要求：
- 字数不少于 1200 字，尽量在 1500～2000 字之间。
- 文风典雅、有画面感，像真人老师一对一详批。
- 结构清晰，建议包含：
  1. 缘分总评
  2. 双方性格与命格分析
  3. 感情相处模式
  4. 财运事业影响
  5. 家庭观念与婚后趋势
  6. 风险与建议
  7. 祝福与总结
- 不要提到"AI""模型""系统"等字眼。
`;

  const prompt = isPaid ? paidPrompt : freePrompt;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error(`AI报告生成失败: ${error.message}`);
  }
}