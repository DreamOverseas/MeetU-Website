// src/components/RegistrationForm.jsx
import React, { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { APPLICANTS_API_URL } from "../lib/meetuApi";

const RegistrationForm = ({ gender, eventId, isEmbedded }) => {
  const isMale = gender === "male";
  const showHeader = !isEmbedded;
  const title = isMale ? "男士会员注册" : "女士会员注册";
  const buttonClass = isMale
    ? "w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition flex items-center justify-center gap-2"
    : "w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg shadow-md transition flex items-center justify-center gap-2";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: isMale ? "male" : "female",
    date_of_birth: "",
    phone: "",
    email: "",
    city: "Melbourne",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      gender: isMale ? "male" : "female",
    }));
  }, [isMale, gender]);

  const [formState, setFormState] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const payload = {
        data: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          gender: formData.gender,
          date_of_birth: formData.date_of_birth,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          meetu_events: eventId
            ? { connect: [{ documentId: eventId }] }
            : undefined,
        },
      };

      console.log("[Apply] payload to Strapi:", payload);

      const response = await fetch(APPLICANTS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let body = null;
      try {
        body = await response.json();
      } catch (err) {
        console.warn("[Apply] response not JSON:", err);
      }

      console.log("[Apply] response status:", response.status);
      console.log("[Apply] response body:", body);

      if (!response.ok) {
        throw new Error(body?.error?.message || "Submission failed");
      }

      setFormState("success");
      if (!isEmbedded) window.scrollTo(0, 0);
    } catch (err) {
      console.error("[Apply] submit error:", err);
      setFormState("error");
      setErrorMessage("提交失败，请稍后重试或联系客服。");
    }
  };

  if (formState === "success") {
    return (
      <div
        className={`flex flex-col items-center justify-center px-4 text-center ${
          isEmbedded ? "py-10" : "min-h-[60vh] bg-gray-50"
        }`}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">提交成功!</h2>
        <p className="text-gray-600 max-w-md">
          感谢您的报名。我们的团队成员将审核您的资料并与您取得联系。
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setFormData({
              ...formData,
              first_name: "",
              last_name: "",
              phone: "",
              email: "",
              gender: isMale ? "male" : "female",
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
    <div
      className={
        isEmbedded
          ? "bg-white"
          : "bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen"
      }
    >
      <div
        className={
          isEmbedded
            ? ""
            : "max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        }
      >
        {showHeader && (
          <div
            className={`${
              isMale ? "bg-blue-600" : "bg-rose-500"
            } px-6 py-8 text-center`}
          >
            <h2 className="text-3xl font-bold text-white tracking-wide">
              {title}
            </h2>
            <p className="text-white/80 mt-2">
              填写详细资料,让我们为您找到最匹配的另一半
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={isEmbedded ? "px-6 py-8 space-y-6" : "px-8 py-10 space-y-6"}
        >
          {formState === "error" && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4 border border-red-100">
              {errorMessage}
            </div>
          )}

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                名 (First Name)
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓 (Last Name)
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                性别 (Gender)
              </label>
              <select
                name="gender"
                value={formData.gender}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition bg-gray-100 text-gray-500 cursor-not-allowed"
              >
                <option value="male">男 (Male)</option>
                <option value="female">女 (Female)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                出生日期 (Date of Birth)
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                手机号码 (Phone)
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱 (Email)
              </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              所在城市 (City)
            </label>
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
              disabled={formState === "submitting"}
              className={`${buttonClass} disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  提交中...
                </>
              ) : (
                "提交资料"
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

export default RegistrationForm;
