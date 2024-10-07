import React from "react";
import qrcode from './qrcode.png'

export default function Navbar() {
  return (
    <nav className="bg-[#1f2937] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={qrcode} alt="QR code logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold text-white">QR Generator</span>
          </div>
          </div>
        </div>
      </nav>
  );
}


