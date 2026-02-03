// src/components/BaziPersonForm.jsx
import React, { useState } from "react";

const BaziPersonForm = ({ label, onChange }) => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    gender: ""
  });

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    onChange(updated); // push data UP to page
  };

  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="font-semibold mb-2">{label}</h2>

      <input placeholder="Year" onChange={e => handleChange("year", e.target.value)} />
      <input placeholder="Month" onChange={e => handleChange("month", e.target.value)} />
      <input placeholder="Day" onChange={e => handleChange("day", e.target.value)} />
      <input placeholder="Hour" onChange={e => handleChange("hour", e.target.value)} />
      <input placeholder="Minute" onChange={e => handleChange("minute", e.target.value)} />
      <select onChange={e => handleChange("gender", e.target.value)}>
        <option value="">Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>
  );
};

export default BaziPersonForm;
