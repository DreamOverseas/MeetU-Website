import React, { useState } from "react";
import BaziPersonForm from "../components/BaziPersonForm";

const BaziCompatibility = () => {
  const [person1, setPerson1] = useState(null);
  const [person2, setPerson2] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">
        八字合婚测试（BaZi Compatibility）
      </h1>

      <BaziPersonForm label="Person A" onChange={setPerson1} />
      <BaziPersonForm label="Person B" onChange={setPerson2} />
    </div>
  );
};

export default BaziCompatibility;
