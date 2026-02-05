import React, { useState } from "react";

const BaziPersonForm = ({ label, onChange }) => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    gender: "男",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="border rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold">{label}</h2>

      {/* 性别 */}
      <div>
        <label className="block text-sm font-medium mb-1">性别</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>

      {/* 出生日期 */}
      <div>
        <label className="block text-sm font-medium mb-1">出生日期</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="year"
            placeholder="年"
            value={formData.year}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="month"
            placeholder="月"
            value={formData.month}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="day"
            placeholder="日"
            value={formData.day}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* 出生时间 */}
      <div>
        <label className="block text-sm font-medium mb-1">出生时间</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="hour"
            placeholder="小时（0–23）"
            value={formData.hour}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="minute"
            placeholder="分钟（0–59，可选）"
            value={formData.minute}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BaziPersonForm;
