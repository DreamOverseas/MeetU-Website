// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import About from "./pages/About";
import BaziCompatibility from "./pages/BaziCompatibility";
import MaleForm from "./pages/MaleForm";
import FemaleForm from "./pages/FemaleForm";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/male-form" element={<MaleForm />} />
            <Route path="/female-form" element={<FemaleForm />} />
            <Route
              path="/bazi-compatibility"
              element={<BaziCompatibility />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
