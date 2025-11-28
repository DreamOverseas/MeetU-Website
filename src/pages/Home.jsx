// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Heart, ArrowRight, Loader2, CheckCircle, Users, Calendar, MapPin } from "lucide-react";
import {
  EVENTS_API_URL,
  normalizeEvent,
  getImageUrl,
  formatDate,
} from "../lib/meetuApi";

const Home = ({ onNavigate, onEventClick }) => {
  const [recentEvents, setRecentEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        const response = await fetch(EVENTS_API_URL);
        if (response.ok) {
          const json = await response.json();
          const raw = json.data ? json.data : json;
          const eventsArray = Array.isArray(raw) ? raw : [];
          setRecentEvents(eventsArray.map(normalizeEvent).slice(0, 3));
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
          <Heart
            size={400}
            className="text-rose-300 transform rotate-12 translate-x-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              在澳洲
              <br />
              <span className="text-rose-500">遇见</span> 对的人
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              从今天开始，把寻找爱情的时间交给 AI，把心动留给真正值得的人。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate("male-form")}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                我是男生,寻找缘分
              </button>
              <button
                onClick={() => onNavigate("female-form")}
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
              onClick={() => onNavigate("activities")}
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
              {recentEvents.map((item) => {
                const imageUrl = getImageUrl(item.poster?.[0]?.url);

                return (
                  <div
                    key={item.documentId || item.id || Math.random()}
                    onClick={() => onEventClick(item)}
                    className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden bg-gray-200 relative">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Calendar size={32} />
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-rose-500">
                        {item.price > 0 ? `$${item.price}` : "免费"}
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

      {/* Features Section（保持不动） */}
      {/* ...你原来的 Features Section 代码可以原样放在这里 ... */}
      {/* 为了篇幅我就不重复粘贴了，如果你需要我也可以帮你单独拆成一个 <Features /> 组件 */}
    </div>
  );
};

export default Home;
