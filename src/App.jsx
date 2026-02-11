// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import About from "./pages/About";
import BaziCompatibility from "./pages/BaziCompatibility";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<About />} />
        <Route path="/bazi-compatibility" element={<BaziCompatibility />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
