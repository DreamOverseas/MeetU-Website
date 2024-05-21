// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Membership from "./pages/Membership";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/Events' element={<Events />} />
                  <Route exact path='/Membership' element={<Membership />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
