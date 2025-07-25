import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#EAE9E9] text-black py-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src="/logo.png" alt="SehatPlus Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold tracking-wide">SehatPlus</span>
        </div>

        {/* Links (Optional Policies or About) */}
        <div className="flex space-x-6 text-sm">
          <a href="/terms" className="hover:underline text-gray-700">Terms of Service</a>
          <a href="/privacy" className="hover:underline text-gray-700">Privacy Policy</a>
          <a href="/contact" className="hover:underline text-gray-700">Contact Us</a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-xs text-center text-gray-600">
          &copy; {new Date().getFullYear()} SehatPlus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
