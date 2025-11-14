import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white">
      {/* Main content - split into two vertical halves */}
      <div className="container mx-auto px-6 md:px-10 h-64 flex flex-col md:flex-row">
        {/* Left Half */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
          <h2 className="text-3xl font-semibold">Pro Tech</h2>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Accessibility Statement</a>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col text-base space-y-2 items-center">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>561-996-5556</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>info@protech.org</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>1500 George Wedgworth Way, Belle Glade, FL 33430</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800 py-6 flex flex-col items-center space-y-2">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
          <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
          <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
        </div>

        {/* Copyright text */}
        <div className="text-base text-gray-200 text-center">
          &copy; {new Date().getFullYear()} All rights Reserved. Pro Tech.
        </div>
      </div>
    </footer>
  );
}
