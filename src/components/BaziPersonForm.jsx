import React, { useState } from "react";

const BaziPersonForm = ({ label, onChange }) => {
  const [formData, setFormData] = useState({
    date_of_birth: "",
    birth_hour: "",
    birth_minute: "",
    gender: "male",
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

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="male">男 (Male)</option>
        <option value="female">女 (Female)</option>
      </select>

      <input
        type="date"
        name="date_of_birth"
        value={formData.date_of_birth}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-2">
        <input
          type="number"
          name="birth_hour"
          placeholder="Hour (0–23)"
          value={formData.birth_hour}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="birth_minute"
          placeholder="Minute"
          value={formData.birth_minute}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default BaziPersonForm;
