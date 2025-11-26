// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import RegistrationForm from "./components/RegistrationForm";
import About from "./pages/About";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setActiveTab("activities");
    window.scrollTo(0, 0);
  };

  const handleResetSelection = () => {
    setSelectedEvent(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <Home onNavigate={setActiveTab} onEventClick={handleEventClick} />
        );
      case "activities":
        return (
          <Activities
            selectedEvent={selectedEvent}
            onBack={() => setSelectedEvent(null)}
            onEventClick={handleEventClick}
          />
        );
      case "male-form":
        return <RegistrationForm gender="male" />;
      case "female-form":
        return <RegistrationForm gender="female" />;
      case "about":
        return <About />;
      default:
        return (
          <Home onNavigate={setActiveTab} onEventClick={handleEventClick} />
        );
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onResetSelection={handleResetSelection}
      />

      <main className="flex-grow">{renderContent()}</main>

      <Footer />
    </div>
  );
};

export default App;
