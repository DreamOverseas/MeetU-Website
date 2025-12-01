// src/pages/About.jsx
import React from "react";
import { User, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="h-64 bg-slate-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">关于 Meetu 觅友</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        
        {/* Company Vision */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-rose-500 pl-4">我们的使命</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            遇见对的人，从不该靠运气。<br/>
            在这里，我们用 AI 帮你更快、更准确地找到真正适合你的另一半。<br/>
            通过智能画像、深度兴趣匹配、情绪识别与生活方式分析，我们为每一位单身用户打造专属的「灵魂配对推荐」。<br/>
            不用盲目刷人、不必重复寒暄，只需轻轻一点，就能遇见与你频率相同的人。<br/>
            不只是约会平台，而是理解你、懂你、为你而“思考”的恋爱助手。<br/>
            让缘分不再等待，让喜欢不再错过。<br/>
            从今天开始，把寻找爱情的时间交给 AI，把心动留给真正值得的人。<br/>
          </p>
        </section>

        {/* Our Advantages */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-rose-500 pl-4">为什么信任我们</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-600">澳洲本土深耕</h3>
              <p className="text-gray-600">扎根墨尔本,辐射全澳洲。我们拥有丰富的本地资源和高端会员库。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-600">隐私绝对安全</h3>
              <p className="text-gray-600">严格的数据保护机制,您的个人联系方式只会在双方互相同意后才会交换。</p>
            </div>
          </div>
        </section>

        {/* Contact Card */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">联系我们</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="space-y-6 flex-1 w-full">
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <User className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">负责人</h4>
                  <p className="text-xl font-bold text-slate-800">Mia Ma</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">地址</h4>
                  <p className="text-lg text-slate-800">Level 2, 171 La Trobe Street</p>
                  <p className="text-lg text-slate-800">Melbourne VIC 3000</p>
                </div>
              </div>

            </div>

            <div className="space-y-6 flex-1 w-full">
               <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">电话</h4>
                  <p className="text-xl font-bold text-slate-800 tracking-wide">+61 0435 938 266</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">邮箱</h4>
                  <a href="mailto:john.du@do360.com" className="text-lg text-rose-600 font-medium hover:underline">
                    mia.mawj@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
             <p className="text-gray-500 italic">"期待您的联系,让我们助您找到幸福。"</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
