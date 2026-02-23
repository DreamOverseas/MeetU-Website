import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const FemaleForm = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">女生报名</h1>
      <RegistrationForm gender="female" />
    </div>
  );
};

export default FemaleForm;
