import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main content - split into two vertical halves */}
      <div className="container mx-auto px-6 md:px-10 h-64 flex flex-col md:flex-row">
        {/* Left Half */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
          <h2 className="text-5xl font-bold">
            Pro <span className="text-emerald-600">Tech</span>
          </h2>
        </div>

        {/* Right Half */}
<div className="flex-1 flex flex-col justify-center items-center space-y-4">
  {/* First row of links */}
  <div className="flex flex-wrap justify-center gap-4 text-base">
    <a
      href="#"
      className="hover:underline selection:bg-emerald-600 selection:text-white"
    >
      Privacy Policy 
    </a>
    <span>|</span>
    <a
      href="#"
      className="hover:underline selection:bg-emerald-600 selection:text-white"
    >
    Cookie Policy 
    </a>
    <span>|</span>
    <a
      href="#"
      className="hover:underline selection:bg-emerald-600 selection:text-white"
    >
      Accessibility Statement 
    </a>
  </div>

  {/* Second row of links */}
  <div className="flex flex-wrap justify-center gap-4 text-base">
    <a
      href="#"
      className="hover:underline selection:bg-emerald-600 selection:text-white"
    >
      Disclaimer 
    </a>
    <span>|</span>
    <a
      href="#"
      className="hover:underline selection:bg-emerald-600 selection:text-white"
    >
      Terms & Conditions
    </a>
  </div>
</div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-black py-6 flex flex-col items-center space-y-2">
        {/* Copyright text */}
        <div className="text-base text-emerald-600 text-center">
          © 2024 All rights Reserved. Sugar Cane Growers Cooperative of Florida.
        </div>
      </div>
    </footer>
  );
}
