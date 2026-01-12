// src/components/Footer.jsx
import React from "react";
import { Heart, MapPin, Phone, Mail, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xl">
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
              <span>Meetu 觅友</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              澳洲首选华人高端单身交友平台。
              <br />
              连接墨尔本、悉尼乃至全澳洲的优质单身男女。
              <br />
              让缘分在这里发生。
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">联系我们</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <span>
                  Level 2, 171 La Trobe Street,
                  <br /> Melbourne VIC 3000
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <User className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Mia Ma</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>+61 0435 938 266</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <a
                  href="mailto:john.du@do360.com"
                  className="hover:text-rose-400 transition"
                >
                  mia.mawj@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">服务条款</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-rose-400">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  用户协议
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  安全交友指南
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400">
                  帮助中心
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Meetu Australia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
