// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login.js";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/Events' element={<Events />} />
                  <Route exact path='/Login' element={<Login />} />
                  <Route exact path='/Register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
