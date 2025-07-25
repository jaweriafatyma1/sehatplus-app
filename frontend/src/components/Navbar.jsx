import React, { useState } from 'react';
import {Link} from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 border-b border-gray-300 bg-white relative transition-all">
      
      {/* Company Logo + Name */}
      <a href="#">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="SehatPlus Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-gray-800">SehatPlus</span>
        </div>
      </a>

      <div className='hidden sm:flex items-center gap-8'>
        <Link to="/"><p className="text-gray-700 hover:text-red-900 font-bold">Home</p></Link>
        <Link to="/about"><p className="text-gray-700 hover:text-red-900 font-bold">About Us</p></Link>
        <Link to="/contact"><p className="text-gray-700 hover:text-red-900 font-bold">Contact Us</p></Link>
        <Link to="/premium"><p className="text-gray-700 hover:text-red-900 font-bold">Premium</p></Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        
       <div><p>
          <Link to="/login" >
          <button className="cursor-pointer px-8 py-2 bg-[#6C0B14] hover:bg-[#58595B] transition text-white rounded-full">
          Login
        </button>
      </Link></p></div>


        
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        <a href="#" className="block">Home</a>
        <a href="#" className="block">About</a>
        <a href="#" className="block">Contact</a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-[#6C0B14] hover:bg-[#58595B] transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
