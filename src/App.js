// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
