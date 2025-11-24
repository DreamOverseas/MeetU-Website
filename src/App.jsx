import React, { useState } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  CheckCircle, 
  Search, 
  Users, 
  Calendar 
} from 'lucide-react';

// --- 组件定义开始 ---

// 1. 导航栏组件
const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '主页' },
    { id: 'male-form', label: '男生报名' },
    { id: 'female-form', label: '女生报名' },
    { id: 'about', label: '关于我们' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo 区域 */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="src/assets/logo.png" 
              alt="Meetu Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // 如果图片加载失败，显示文字 Logo 作为后备
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden flex items-center gap-2 text-rose-500 font-bold text-2xl ml-2">
              <Heart fill="currentColor" />
              <span>Meetu 觅友</span>
            </div>
          </div>

          {/* 桌面端菜单 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-gray-600 hover:text-rose-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('male-form')}
              className="bg-rose-500 text-white px-5 py-2 rounded-full font-medium hover:bg-rose-600 transition shadow-sm hover:shadow-md"
            >
              立即加入
            </button>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-rose-500 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activeTab === item.id
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-gray-600 hover:text-rose-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. 页脚组件
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 公司简介 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xl">
              <Heart fill="currentColor" />
              <span>Meetu 觅友</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              澳洲首选华人高端婚恋交友平台。<br/>
              连接墨尔本、悉尼乃至全澳洲的优质单身男女。<br/>
              让缘分在这里发生。
            </p>
          </div>

          {/* 联系方式 (核心需求) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">联系我们要</h3>
            <div className="space-y-3">
               <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <span>Level 2, 171 La Trobe Street,<br/> Melbourne VIC 3000</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <User className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>John Du (Director)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>+61 (04)1316 8533</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <a href="mailto:john.du@do360.com" className="hover:text-rose-400 transition">john.du@do360.com</a>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">服务条款</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-rose-400">隐私政策</a></li>
              <li><a href="#" className="hover:text-rose-400">用户协议</a></li>
              <li><a href="#" className="hover:text-rose-400">安全交友指南</a></li>
              <li><a href="#" className="hover:text-rose-400">帮助中心</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Meetu Australia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// 3. 主页组件
const Home = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-50 to-pink-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Heart size={400} className="text-rose-300 transform rotate-12 translate-x-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              在澳洲<br/>
              <span className="text-rose-500">遇见</span> 对的人
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Meetu 觅友，专为澳洲华人打造的真实、高效、私密的婚恋交友平台。
              无论是墨尔本的咖啡馆，还是悉尼的歌剧院旁，我们帮您找到那个TA。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('male-form')}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                我是男生，寻找缘分
              </button>
              <button 
                onClick={() => onNavigate('female-form')}
                className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold shadow-lg hover:bg-rose-600 transition transform hover:-translate-y-1"
              >
                我是女生，期待邂逅
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 特色板块 */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 Meetu 觅友?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">我们不仅仅是一个网站，更是您通往幸福的桥梁。专业的服务，严格的审核，只为最真诚的您。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-rose-50 transition duration-300 text-center group">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <CheckCircle className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">严格实名认证</h3>
              <p className="text-gray-600">所有会员均需经过严格的人工审核与身份认证，确保每一份资料的真实性。</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-rose-50 transition duration-300 text-center group">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Users className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">海量优质会员</h3>
              <p className="text-gray-600">汇聚澳洲各行各业的精英人士，包括留学生、职场白领、创业者及成功人士。</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-rose-50 transition duration-300 text-center group">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Heart className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">精准人工匹配</h3>
              <p className="text-gray-600">除了智能算法，我们还有专业的红娘团队为您提供一对一的牵线服务。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. 通用报名表单组件
const RegistrationForm = ({ gender }) => {
  const isMale = gender === 'male';
  const themeColor = isMale ? 'blue' : 'rose';
  const title = isMale ? '男士会员注册' : '女士会员注册';
  const buttonClass = isMale 
    ? "w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition" 
    : "w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg shadow-md transition";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟提交
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0,0);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">提交成功！</h2>
        <p className="text-gray-600 max-w-md">
          感谢您的注册。我们的红娘顾问（John Du 或团队成员）将在24小时内审核您的资料并与您取得联系。
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-rose-500 hover:underline font-medium"
        >
          返回填写新表单
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className={`${isMale ? 'bg-blue-600' : 'bg-rose-500'} px-6 py-8 text-center`}>
          <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
          <p className="text-white/80 mt-2">填写详细资料，让我们为您找到最匹配的另一半</p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-10 space-y-6">
          {/* 基本信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓名 / 昵称</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" placeholder="请输入您的名字" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">出生年份</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition">
                <option>请选择</option>
                {Array.from({length: 40}, (_, i) => 2005 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">所在城市 (澳洲)</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition">
                <option>Melbourne (VIC)</option>
                <option>Sydney (NSW)</option>
                <option>Brisbane (QLD)</option>
                <option>Perth (WA)</option>
                <option>Adelaide (SA)</option>
                <option>Canberra (ACT)</option>
                <option>Hobart (TAS)</option>
                <option>Darwin (NT)</option>
                <option>其他 / 海外</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">职业</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" placeholder="例如：会计师, 工程师" />
            </div>
          </div>

          {/* 联系方式 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">手机号码 (+61)</label>
              <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" placeholder="04xx xxx xxx" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">微信号 (WeChat)</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" placeholder="重要联系方式" />
            </div>
          </div>

          {/* 详细介绍 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">自我介绍</label>
            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" placeholder="说说您的性格、爱好以及对另一半的期望..."></textarea>
          </div>

          {/* 择偶标准 (简化版) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">择偶要求（年龄、身高、地域等）</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" placeholder="简单描述您的理想型" />
          </div>

          <div className="pt-4">
            <button type="submit" className={buttonClass}>
              提交资料，开始寻爱之旅
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              点击提交即表示您同意我们的服务条款。您的隐私将受到严格保护。
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// 5. 关于我们组件
const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Image Area */}
      <div className="h-64 bg-slate-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">关于 Meetu 觅友</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        
        {/* 公司愿景 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-rose-500 pl-4">我们的使命</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Meetu (觅友) 致力于为在澳华人提供最真实、最高效的婚恋交友平台。我们深知在异国他乡寻找灵魂伴侣的不易，因此我们结合了线上精准匹配与线下贴心服务，旨在打破社交圈层的壁垒，让每一位渴望爱情的单身男女都能在这里找到归属。
          </p>
        </section>

        {/* 我们的优势 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-rose-500 pl-4">为什么信任我们</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-600">澳洲本土深耕</h3>
              <p className="text-gray-600">扎根墨尔本，辐射全澳洲。我们拥有丰富的本地资源和高端会员库。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-600">隐私绝对安全</h3>
              <p className="text-gray-600">严格的数据保护机制，您的个人联系方式只会在双方互相同意后才会交换。</p>
            </div>
          </div>
        </section>

        {/* 联系卡片 (核心需求) */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">联系我们 / Contact Us</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="space-y-6 flex-1 w-full">
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <User className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Director / 负责人</h4>
                  <p className="text-xl font-bold text-slate-800">John Du</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Address / 地址</h4>
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
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Phone / 电话</h4>
                  <p className="text-xl font-bold text-slate-800 tracking-wide">+61 (04)1316 8533</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Email / 邮箱</h4>
                  <a href="mailto:john.du@do360.com" className="text-lg text-rose-600 font-medium hover:underline">
                    john.du@do360.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
             <p className="text-gray-500 italic">"期待您的来电，让我们助您找到幸福。"</p>
          </div>
        </section>

      </div>
    </div>
  );
};

// --- 主程序入口 ---

const App = () => {
  // 状态管理：控制当前显示的页面
  const [activeTab, setActiveTab] = useState('home');

  // 简单的路由逻辑
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'male-form':
        return <RegistrationForm gender="male" />;
      case 'female-form':
        return <RegistrationForm gender="female" />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;