// src/lib/meetuApi.js

// 此文件储存API 地址 & 工具函数

// === API 常量 ===
export const API_BASE_URL = "https://api.do360.com";

export const EVENTS_API_URL =
  `${API_BASE_URL}/api/meet-u-events?populate=*`; // 使用 plural API ID

export const APPLICANTS_API_URL =
  `${API_BASE_URL}/api/meet-u-event-applicants-p`; // 使用 plural API ID

// === 工具函数 ===

// 统一规范 event 结构，保证都有 documentId / id 等字段
export const normalizeEvent = (event) => {
  if (!event) return null;

  // Strapi v5 扁平结构：{ documentId, title, ... }
  if ("documentId" in event && !event.attributes) {
    return {
      ...event,
      id: event.id ?? event.documentId,
    };
  }

  // 兼容旧的 v4 风格：{ id, attributes: {...} }
  const attrs = event.attributes || {};
  return {
    ...attrs,
    id: event.id,
    documentId: event.documentId || event.id,
  };
};

// 安全获取图片 URL（支持相对路径）
export const getImageUrl = (imageObj) => {
  if (!imageObj) return null;

  let url = null;

  if (typeof imageObj === "string") url = imageObj;
  else if (imageObj.url) url = imageObj.url;
  else if (imageObj.attributes?.url) url = imageObj.attributes.url;
  else if (imageObj.data?.attributes?.url) url = imageObj.data.attributes.url;

  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_BASE_URL}${url}`;
};

// 获取画廊图片数组
export const getGalleryUrls = (galleryObj) => {
  if (!galleryObj) return [];
  const data = galleryObj.data || galleryObj;
  if (!Array.isArray(data)) return [];
  return data.map((img) => getImageUrl(img)).filter(Boolean);
};

export const formatDate = (dateString) => {
  if (!dateString) return "待定";
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
};

export const formatTime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
