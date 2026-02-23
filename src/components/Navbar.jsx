// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "/", label: "主页" },
    { id: "/activities", label: "精彩活动" },
    { id: "/male-form", label: "男生报名" },
    { id: "/female-form", label: "女生报名" },
    { id: "/bazi-compatibility", label: "八字合婚" },
    { id: "/about", label: "关于我们" },
  ];

  const handleLogoClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Area */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src="/logo.png"
              alt="Meetu Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = "flex";
                }
              }}
            />
            <div className="flex items-center gap-2 text-rose-500 font-bold text-2xl ml-2">
              <span>Meetu 觅友</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-rose-600 bg-rose-50"
                      : "text-gray-600 hover:text-rose-500 hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/male-form"
              className="bg-rose-500 text-white px-5 py-2 rounded-full font-medium hover:bg-rose-600 transition shadow-sm hover:shadow-md"
            >
              立即加入
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-rose-500 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                    isActive
                      ? "text-rose-600 bg-rose-50"
                      : "text-gray-600 hover:text-rose-500 hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;