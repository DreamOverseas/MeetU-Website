import React, { useState, useEffect } from 'react';
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
  Calendar,
  Clock,
  DollarSign,
  ArrowRight,
  Loader2,
  ChevronLeft,
  ImageIcon
} from 'lucide-react';

// --- Shared Constants & Helpers ---

const API_BASE_URL = 'https://api.do360.com';
const EVENTS_API_URL = `${API_BASE_URL}/api/meet-u-events?populate=*`; // Added populate=* to fetch gallery/media
const APPLICANTS_API_URL = `${API_BASE_URL}/api/meet-u-event-applicants-p`; 

// Helper to get image URL safely (handles Strapi relative paths)
const getImageUrl = (imageObj) => {
  if (!imageObj) return null;
  // Handle different potential structures (Strapi v3/v4/Cloudinary)
  let url = null;
  
  if (typeof imageObj === 'string') url = imageObj;
  else if (imageObj.url) url = imageObj.url;
  else if (imageObj.attributes && imageObj.attributes.url) url = imageObj.attributes.url;
  else if (imageObj.data && imageObj.data.attributes && imageObj.data.attributes.url) url = imageObj.data.attributes.url;
  
  if (!url) return null;
  
  if (url.startsWith('http')) return url;
  return `${API_BASE_URL}${url}`;
};

// Helper to get array of gallery images
const getGalleryUrls = (galleryObj) => {
  if (!galleryObj) return [];
  const data = galleryObj.data || galleryObj;
  if (!Array.isArray(data)) return [];
  return data.map(img => getImageUrl(img)).filter(Boolean);
};

// Helper to format date
const formatDate = (dateString) => {
  if (!dateString) return '待定';
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'short'
  });
};

const formatTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleTimeString('zh-CN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

// --- Component Definitions Start ---

// 1. Navigation Bar Component
const Navbar = ({ activeTab, setActiveTab, onResetSelection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '主页' },
    { id: 'activities', label: '精彩活动' },
    { id: 'male-form', label: '男生报名' },
    { id: 'female-form', label: '女生报名' },
    { id: 'about', label: '关于我们' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    if (onResetSelection) onResetSelection(); // Reset selected event when clicking nav
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="src/assets/logo.png" 
              alt="Meetu Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="flex items-center gap-2 text-rose-500 font-bold text-2xl ml-2">
              <span>Meetu 觅友</span>
            </div>
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown Menu */}
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

// 2. Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Introduction */}
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

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">联系我们</h3>
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

          {/* Quick Links */}
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

// 3. Home Page Component
const Home = ({ onNavigate, onEventClick }) => {
  const [recentEvents, setRecentEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recent events for Home Page preview
  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        const response = await fetch(EVENTS_API_URL);
        if (response.ok) {
          const json = await response.json();
          const data = json.data ? json.data : json;
          const eventsArray = Array.isArray(data) ? data : [];
          // Take first 3 events
          setRecentEvents(eventsArray.slice(0, 3));
        }
      } catch (err) {
        console.error("Home: Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentEvents();
  }, []);

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
              Meetu 觅友,专为澳洲华人打造的真实、高效、私密的单身交友平台。
              无论是墨尔本的咖啡馆,还是悉尼的歌剧院旁,我们帮您找到那个TA。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('male-form')}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                我是男生,寻找缘分
              </button>
              <button 
                onClick={() => onNavigate('female-form')}
                className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold shadow-lg hover:bg-rose-600 transition transform hover:-translate-y-1"
              >
                我是女生,期待邂逅
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Activities Section */}
      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">最新活动</h2>
              <p className="text-gray-500">参与线下聚会,遇见心动的Ta</p>
            </div>
            <button 
              onClick={() => onNavigate('activities')}
              className="text-rose-500 font-semibold hover:text-rose-600 flex items-center gap-1"
            >
              查看全部 <ArrowRight size={18} />
            </button>
          </div>

          {loading ? (
             <div className="flex justify-center py-10">
               <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
             </div>
          ) : recentEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentEvents.map((event) => {
                 const item = event.attributes ? { ...event.attributes, id: event.id } : event;
                 const imageUrl = getImageUrl(item.poster);
                 
                 return (
                   <div 
                     key={item.id || Math.random()} 
                     onClick={() => onEventClick(item)} // Handle click
                     className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                   >
                     <div className="h-48 overflow-hidden bg-gray-200 relative">
                       {imageUrl ? (
                         <img src={imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-gray-400">
                           <Calendar size={32} />
                         </div>
                       )}
                       <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-rose-500">
                         {item.price > 0 ? `$${item.price}` : '免费'}
                       </div>
                     </div>
                     <div className="p-5">
                       <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-1 group-hover:text-rose-500 transition">
                         {item.title}
                       </h3>
                       <div className="flex items-center text-sm text-gray-500 mb-2">
                         <Calendar className="w-4 h-4 mr-2 text-rose-400" />
                         {formatDate(item.date)}
                       </div>
                       <div className="flex items-center text-sm text-gray-500">
                         <MapPin className="w-4 h-4 mr-2 text-rose-400" />
                         <span className="truncate">{item.event_address}</span>
                       </div>
                     </div>
                   </div>
                 );
              })}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-xl">
              <p className="text-gray-500">近期暂无活动更新</p>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 Meetu 觅友?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">我们不仅仅是一个网站,更是您通往幸福的桥梁。专业的服务,严格的审核,只为最真诚的您。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white hover:bg-rose-50 transition duration-300 text-center group shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <CheckCircle className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">严格实名认证</h3>
              <p className="text-gray-600">所有会员均需经过严格的人工审核与身份认证,确保每一份资料的真实性。</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white hover:bg-rose-50 transition duration-300 text-center group shadow-sm">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Users className="text-purple-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">海量优质会员</h3>
              <p className="text-gray-600">汇聚澳洲各行各业的精英人士,包括留学生、职场白领、创业者及成功人士。</p>
            </div>

            <div className="p-8 rounded-2xl bg-white hover:bg-rose-50 transition duration-300 text-center group shadow-sm">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Heart className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">智能算法匹配</h3>
              <p className="text-gray-600">除了智能算法,我们还有专业的红娘团队为您提供一对一的牵线服务。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Activity List / Detail Component
const Activities = ({ selectedEvent, onBack, onEventClick }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applyGender, setApplyGender] = useState('male'); // For detail view toggle

  useEffect(() => {
    // Only fetch if we don't have events yet (or if you want to refresh every time)
    // Here fetching every time to be safe
    const fetchEvents = async () => {
      try {
        const response = await fetch(EVENTS_API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const data = json.data ? json.data : json;
        setEvents(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("暂无法加载活动信息，请稍后再试。");
      } finally {
        setLoading(false);
      }
    };

    if (!selectedEvent) {
        fetchEvents();
    } else {
        setLoading(false); // If selectedEvent is passed, we might not need to fetch list immediately
    }
  }, [selectedEvent]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-rose-500 w-10 h-10" />
      </div>
    );
  }

  // --- DETAIL VIEW ---
  if (selectedEvent) {
    const item = selectedEvent.attributes ? { ...selectedEvent.attributes, id: selectedEvent.id } : selectedEvent;
    const posterUrl = getImageUrl(item.poster);
    const galleryUrls = getGalleryUrls(item.gallery);

    return (
      <div className="bg-white min-h-screen pb-20">
        {/* Banner / Poster Section */}
        <div className="relative w-full bg-gray-900">
           {/* Back Button */}
           <div className="absolute top-4 left-4 z-10">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-slate-900 font-medium hover:bg-white transition"
            >
              <ChevronLeft size={20} />
              返回活动列表
            </button>
          </div>

          <div className="max-w-4xl mx-auto relative aspect-video md:aspect-[21/9]">
            {posterUrl ? (
                <img src={posterUrl} alt={item.title} className="w-full h-full object-contain bg-black/50 backdrop-blur-xl" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <ImageIcon size={64} />
                </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Header Info */}
            <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                     <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-bold">
                        {item.price > 0 ? `$${item.price}` : '免费'}
                     </span>
                     <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Users size={14} className="mr-1"/> 男: {item.max_male_slots}位
                     </span>
                     <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Users size={14} className="mr-1"/> 女: {item.max_female_slots}位
                     </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{item.title}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-rose-500" />
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-semibold">日期</p>
                            <p className="font-medium">{formatDate(item.date)}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-rose-500" />
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-semibold">时间</p>
                            <p className="font-medium">{formatTime(item.date)}</p>
                        </div>
                    </div>
                    <div className="flex items-center md:col-span-2">
                        <MapPin className="w-5 h-5 mr-3 text-rose-500" />
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-semibold">地址</p>
                            <p className="font-medium">{item.event_address}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            {galleryUrls.length > 0 && (
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ImageIcon className="text-rose-500" size={20}/> 活动剪影
                    </h2>
                    <div className="flex flex-col gap-4">
                        {galleryUrls.map((url, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-sm w-full group">
                                <img 
                                    src={url} 
                                    alt={`Gallery ${index}`} 
                                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition duration-500" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Description */}
            <div className="mb-12">
                <h2 className="text-xl font-bold text-slate-900 mb-4">活动详情</h2>
                <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.event_description}
                </div>
            </div>

            {/* Application Section */}
            <div id="apply-section" className="border-t border-gray-200 pt-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">立即报名</h2>
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg inline-block text-sm max-w-xl mx-auto">
                        <strong>注意：</strong> 报名免费。提交申请后，如果我们选中您，将会发送包含付款方式的确认邮件给您。
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Gender Tabs */}
                    <div className="flex border-b border-gray-100">
                        <button 
                            onClick={() => setApplyGender('male')}
                            className={`flex-1 py-4 font-bold text-center transition ${applyGender === 'male' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            我是男生
                        </button>
                        <button 
                            onClick={() => setApplyGender('female')}
                            className={`flex-1 py-4 font-bold text-center transition ${applyGender === 'female' ? 'bg-pink-50 text-pink-600 border-b-2 border-pink-600' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            我是女生
                        </button>
                    </div>

                    {/* The Form */}
                    <div className="p-0">
                        <RegistrationForm gender={applyGender} eventId={item.id} isEmbedded={true} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // --- LIST VIEW ---
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Meetu 精彩线下活动</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            从轻松的桌游聚会到高端的酒会晚宴，我们定期举办各类线下活动，让您在自然的氛围中邂逅那个TA。
          </p>
        </div>

        {error ? (
           <div className="text-center py-20 bg-white rounded-xl shadow-sm">
             <p className="text-red-500">{error}</p>
           </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm">
             <p className="text-gray-500">近期暂无活动，敬请期待！</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const item = event.attributes ? { ...event.attributes, id: event.id } : event;
              const imageUrl = getImageUrl(item.poster);

              return (
                <div key={item.id || Math.random()} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                  <div className="relative h-56 bg-gray-200 overflow-hidden group">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Heart size={48} className="opacity-20" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-rose-500 shadow-sm">
                      {item.price > 0 ? `$${item.price}` : '免费'}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-1">
                      {item.title}
                    </h3>

                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-rose-400 flex-shrink-0" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-rose-400 flex-shrink-0" />
                        <span>{formatTime(item.date)}</span>
                      </div>

                      <div className="flex items-start text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{item.event_address}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs font-medium pt-2">
                        <div className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          <Users className="w-3 h-3 mr-1" />
                          男生: {item.max_male_slots || '-'}位
                        </div>
                        <div className="flex items-center text-rose-600 bg-rose-50 px-2 py-1 rounded">
                          <Users className="w-3 h-3 mr-1" />
                          女生: {item.max_female_slots || '-'}位
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm line-clamp-2 mb-5">
                      {item.event_description}
                    </p>

                    <button 
                        onClick={() => onEventClick(item)} 
                        className="w-full py-3 bg-slate-900 hover:bg-rose-500 text-white rounded-xl font-medium transition flex items-center justify-center gap-2 group"
                    >
                      查看详情 & 报名
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// 5. Updated Registration Form Component (Matches MeetU-Event-Applicants)
const RegistrationForm = ({ gender, eventId, isEmbedded }) => {
  const isMale = gender === 'male';
  const themeColor = isMale ? 'blue' : 'rose';
  // If embedded in event detail, remove the large header title
  const showHeader = !isEmbedded;
  const title = isMale ? '男士会员注册' : '女士会员注册';
  const buttonClass = isMale 
    ? "w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition flex items-center justify-center gap-2" 
    : "w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg shadow-md transition flex items-center justify-center gap-2";

  // State initialization with lowercase values
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: isMale ? 'male' : 'female', // Default using lowercase based on route
    date_of_birth: '',
    phone: '',
    email: '',
    city: 'Melbourne'
  });

  // Ensure formData updates if the component is reused when switching tabs
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      gender: isMale ? 'male' : 'female'
    }));
  }, [gender, isMale]);

  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      // Strapi usually expects { data: { ... } } structure
      const payload = {
        data: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          gender: formData.gender,
          date_of_birth: formData.date_of_birth,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          // Relation to Event (if eventId is provided)
          ...(eventId && { meet_u_event: eventId })
        }
      };

      const response = await fetch(APPLICANTS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormState('success');
      // Only scroll to top if not embedded, otherwise user loses context
      if (!isEmbedded) window.scrollTo(0,0);
    } catch (err) {
      console.error(err);
      setFormState('error');
      setErrorMessage('提交失败，请稍后重试或联系客服。');
    }
  };

  if (formState === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center px-4 text-center ${isEmbedded ? 'py-10' : 'min-h-[60vh] bg-gray-50'}`}>
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">提交成功!</h2>
        <p className="text-gray-600 max-w-md">
          感谢您的报名。我们的红娘顾问(John Du 或团队成员)将在24小时内审核您的资料并与您取得联系。
        </p>
        <button 
          onClick={() => {
            setFormState('idle');
            setFormData({ 
              ...formData, 
              first_name: '', 
              last_name: '', 
              phone: '', 
              email: '',
              gender: isMale ? 'male' : 'female' 
            });
          }}
          className="mt-8 text-rose-500 hover:underline font-medium"
        >
          返回填写新表单
        </button>
      </div>
    );
  }

  return (
    <div className={isEmbedded ? "bg-white" : "bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen"}>
      <div className={isEmbedded ? "" : "max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"}>
        
        {showHeader && (
          <div className={`${isMale ? 'bg-blue-600' : 'bg-rose-500'} px-6 py-8 text-center`}>
            <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
            <p className="text-white/80 mt-2">填写详细资料,让我们为您找到最匹配的另一半</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className={isEmbedded ? "px-6 py-8 space-y-6" : "px-8 py-10 space-y-6"}>
          {formState === 'error' && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4 border border-red-100">
              {errorMessage}
            </div>
          )}

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">名 (First Name)</label>
              <input 
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" 
                placeholder="San" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓 (Last Name)</label>
              <input 
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" 
                placeholder="Zhang" 
              />
            </div>
          </div>

          {/* Gender & DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">性别 (Gender)</label>
              <select 
                name="gender"
                value={formData.gender}
                disabled // Made disabled to prevent changing
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition bg-gray-100 text-gray-500 cursor-not-allowed"
              >
                <option value="male">男 (Male)</option>
                <option value="female">女 (Female)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">出生日期 (Date of Birth)</label>
              <input 
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required 
                type="date" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" 
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">手机号码 (Phone)</label>
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
                type="tel" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" 
                placeholder="04xx xxx xxx" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">邮箱 (Email)</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition" 
                placeholder="example@email.com" 
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">所在城市 (City)</label>
            <select 
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition"
            >
              <option value="Melbourne">Melbourne (VIC)</option>
              <option value="Sydney">Sydney (NSW)</option>
              <option value="Brisbane">Brisbane (QLD)</option>
              <option value="Perth">Perth (WA)</option>
              <option value="Adelaide">Adelaide (SA)</option>
              <option value="Canberra">Canberra (ACT)</option>
              <option value="Hobart">Hobart (TAS)</option>
              <option value="Darwin">Darwin (NT)</option>
              <option value="Other">其他 / Overseas</option>
            </select>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={formState === 'submitting'}
              className={`${buttonClass} disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  提交中...
                </>
              ) : (
                '提交资料'
              )}
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

// 6. About Us Component (Unchanged)
const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Image Area */}
      <div className="h-64 bg-slate-800 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">关于 Meetu 觅友</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        
        {/* Company Vision */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-rose-500 pl-4">我们的使命</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Meetu (觅友) 致力于为在澳华人提供最真实、最高效的婚恋交友平台。我们深知在异国他乡寻找灵魂伴侣的不易,因此我们结合了线上精准匹配与线下贴心服务,旨在打破社交圈层的壁垒,让每一位渴望爱情的单身男女都能在这里找到归属。
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
                  <p className="text-xl font-bold text-slate-800">John Du</p>
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
                  <p className="text-xl font-bold text-slate-800 tracking-wide">+61 (04)1316 8533</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">邮箱</h4>
                  <a href="mailto:john.du@do360.com" className="text-lg text-rose-600 font-medium hover:underline">
                    john.du@do360.com
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

// --- Main Application Entry ---

const App = () => {
  // State Management: Controls the currently displayed page
  const [activeTab, setActiveTab] = useState('home');
  // New State: Holds the data for the currently selected event for the detail view
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Helper to switch to detail view
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setActiveTab('activities');
    window.scrollTo(0,0);
  };

  // Helper to reset selection (e.g. when clicking navbar links)
  const handleResetSelection = () => {
    setSelectedEvent(null);
  };

  // Simple routing logic
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} onEventClick={handleEventClick} />;
      case 'activities':
        return (
            <Activities 
                selectedEvent={selectedEvent} 
                onBack={() => setSelectedEvent(null)}
                onEventClick={handleEventClick}
            />
        );
      case 'male-form':
        return <RegistrationForm gender="male" />;
      case 'female-form':
        return <RegistrationForm gender="female" />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={setActiveTab} onEventClick={handleEventClick} />;
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onResetSelection={handleResetSelection} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;