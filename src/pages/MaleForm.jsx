import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const MaleForm = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">男生报名</h1>
      <RegistrationForm gender="male" />
    </div>
  );
};

export default MaleForm;
