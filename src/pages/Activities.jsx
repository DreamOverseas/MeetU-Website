// src/pages/Activities.jsx
import React, { useEffect, useState } from "react";
import {
  Loader2,
  Users,
  Calendar,
  Clock,
  MapPin,
  Heart,
  ArrowRight,
  ChevronLeft,
  ImageIcon,
} from "lucide-react";

import RegistrationForm from "../components/RegistrationForm";
import {
  EVENTS_API_URL,
  normalizeEvent,
  getImageUrl,
  getGalleryUrls,
  formatDate,
  formatTime,
} from "../lib/meetuApi";

const Activities = ({ selectedEvent, onBack, onEventClick }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applyGender, setApplyGender] = useState("male"); // detail view tab

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(EVENTS_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const raw = json.data ? json.data : json;
        const list = Array.isArray(raw) ? raw : [raw];
        setEvents(list.map(normalizeEvent));
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
      setLoading(false); // 有 selectedEvent 时，不阻塞 UI
    }
  }, [selectedEvent]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-rose-500 w-10 h-10" />
      </div>
    );
  }

  // ============ 详情页 ============ //
  if (selectedEvent) {
    const item = selectedEvent; // 已经是 normalize 后的结构
    const posterUrl = getImageUrl(item.poster?.[0]?.url);
    const galleryUrls = getGalleryUrls(item.gallery);

    return (
      <div className="bg-white min-h-screen pb-20">
        {/* 顶部大图 / Banner */}
        <div className="relative w-full bg-gray-900">
          {/* 返回按钮 */}
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
              <img
                src={posterUrl}
                alt={item.title}
                className="w-full h-full object-contain bg-black/50 backdrop-blur-xl"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <ImageIcon size={64} />
              </div>
            )}
          </div>
        </div>

        {/* 主体内容 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* 基本信息 */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-bold">
                {item.price > 0 ? `$${item.price}` : "免费"}
              </span>
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Users size={14} className="mr-1" /> 男: {item.max_male_slots}位
              </span>
              <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Users size={14} className="mr-1" /> 女: {item.max_female_slots}位
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {item.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-rose-500" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    日期
                  </p>
                  <p className="font-medium">{formatDate(item.date)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-rose-500" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    时间
                  </p>
                  <p className="font-medium">{formatTime(item.date)}</p>
                </div>
              </div>
              <div className="flex items-center md:col-span-2">
                <MapPin className="w-5 h-5 mr-3 text-rose-500" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    地址
                  </p>
                  <p className="font-medium">{item.event_address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 图集 */}
          {galleryUrls.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ImageIcon className="text-rose-500" size={20} /> 活动剪影
              </h2>
              <div className="flex flex-col gap-4">
                {galleryUrls.map((url, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-sm w-full group"
                  >
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

          {/* 活动详情文案 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">活动详情</h2>
            <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
              {item.event_description}
            </div>
          </div>

          {/* 报名区域 */}
          <div id="apply-section" className="border-t border-gray-200 pt-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                立即报名
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg inline-block text-sm max-w-xl mx-auto">
                <strong>注意：</strong> 报名免费。提交申请后，如果我们选中您，将会发送包含付款方式的确认邮件给您。
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* 性别 Tab */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setApplyGender("male")}
                  className={`flex-1 py-4 font-bold text-center transition ${
                    applyGender === "male"
                      ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  我是男生
                </button>
                <button
                  onClick={() => setApplyGender("female")}
                  className={`flex-1 py-4 font-bold text-center transition ${
                    applyGender === "female"
                      ? "bg-pink-50 text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  我是女生
                </button>
              </div>

              {/* 报名表单（内嵌） */}
              <div className="p-0">
                {/* 传入活动 documentId 做 Strapi v5 关联 */}
                <RegistrationForm
                  gender={applyGender}
                  eventId={item.documentId}
                  isEmbedded={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============ 列表页 ============ //
  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 bg-white rounded-xl shadow-sm">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 bg-white rounded-xl shadow-sm">
            <p className="text-gray-500">近期暂无活动，敬请期待！</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Meetu 精彩线下活动
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            从轻松的桌游聚会到高端的酒会晚宴，我们定期举办各类线下活动，让您在自然的氛围中邂逅那个TA。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((item) => {
            const imageUrl = getImageUrl(item.poster?.[0]?.url);

            return (
              <div
                key={item.documentId || item.id || Math.random()}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
              >
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
                    {item.price > 0 ? `$${item.price}` : "免费"}
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
                        男生: {item.max_male_slots || "-"}位
                      </div>
                      <div className="flex items-center text-rose-600 bg-rose-50 px-2 py-1 rounded">
                        <Users className="w-3 h-3 mr-1" />
                        女生: {item.max_female_slots || "-"}位
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
      </div>
    </div>
  );
};

export default Activities;
