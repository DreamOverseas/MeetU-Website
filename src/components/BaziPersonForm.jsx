import React, { useState, useEffect } from "react";

const getDaysInMonth = (year, month) => {
  if (!year || !month) return 31;
  return new Date(year, month, 0).getDate();
};

const BaziPersonForm = ({ label, onChange }) => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
    birth_hour: "",
    birth_minute: "",
    gender: "男",
  });

  const daysInMonth = getDaysInMonth(formData.year, formData.month);

  useEffect(() => {
    if (formData.day && formData.day > daysInMonth) {
      setFormData((prev) => ({ ...prev, day: "" }));
    }
  }, [formData.year, formData.month, formData.day]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="border rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold">{label}</h2>

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="男">男</option>
        <option value="女">女</option>
      </select>

      <div className="flex gap-2">
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">年</option>
          {Array.from({ length: 100 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>

        <select
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">月</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          disabled={!formData.year || !formData.month}
          className="w-full border p-2 rounded"
        >
          <option value="">日</option>
          {Array.from({ length: daysInMonth }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <input
          type="number"
          name="birth_hour"
          min="0"
          max="23"
          placeholder="小时（0–23）"
          value={formData.birth_hour}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="birth_minute"
          min="0"
          max="59"
          placeholder="分钟（0–59）"
          value={formData.birth_minute}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default BaziPersonForm;