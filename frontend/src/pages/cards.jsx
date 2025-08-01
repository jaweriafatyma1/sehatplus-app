import React from "react";
import Footer from "../components/Footer";
export default function Pricing() {
  return (
    <div>
    <div>
    <div className="h-24"></div>
    <div className="w-screen min-h-screen bg-[#F8F4EC] flex flex-col justify-center items-center font-[Poppins] px-4 mb-15">
    <h1 className="text-4xl md:text-6xl font-bold text-[#660000] text-center mb-6 tracking-tight leading-tight animate-fadeIn">
      Choose <span className="text-[#A0153E]">Your Health</span> Plan
    </h1>
    <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mb-10 animate-fadeIn delay-200">
      Compare features and find the perfect plan for you. Designed to make healthcare easier, faster, and more accessible.
    </p>
   </div>

    <div className="flex flex-col md:flex-row gap-6 justify-center mb-15 items-center w-full">
    {/* Basic Care Plan */}
    <div className="w-full h-90 md:w-[300px] bg-white border border-[#991b1b] rounded-2xl shadow-2xl hover:scale-105 transition duration-300 backdrop-blur-md bg-opacity-80">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#991b1b] mb-2">Basic Care</h2>
        <p className="text-3xl font-bold text-[#660000] mb-4">Rs.0<span className="text-sm font-normal">/month</span></p>
        <ul className="text-sm text-gray-800 space-y-2 mb-6">
          <li>✓ 24/7 Customer Support</li>
          <li>✓ Emergency Ambulance Call</li>
          <li>✓ Location Sharing with Ambulance</li>
          <li>✓ Hospital Availability Lookup</li>
          <li></li>
        </ul>
        <button className="w-full py-2 bg-[#660000] text-white rounded-xl shadow-md hover:bg-[#4d0000] transition duration-300">Get Started</button>
      </div>
    </div>

    {/* Pro Care Plan */}
    <div className="w-full md:w-[300px] bg-white border border-[#991b1b] rounded-2xl shadow-2xl hover:scale-105 transition duration-300 backdrop-blur-md bg-opacity-80">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#991b1b] mb-2">Pro Care</h2>
        <p className="text-3xl font-bold text-[#660000] mb-4">Rs.500<span className="text-sm font-normal">/month</span></p>
        <ul className="text-sm text-gray-800 space-y-2 mb-6">
          <li>✓ Prescription Upload</li>
    
          <li>✓ 20% pharmacy discount</li>
          <li>✓ Emergency Contact Button</li>
          <li>✓ Priority appointment slots</li>
          <li>✓Customizable Profile</li>
          <li>✓ Emergency Contacts</li>
          <li>✓ Lab test discounts</li>
        </ul>
        <button className="w-full py-2 bg-[#660000] text-white rounded-xl shadow-md hover:bg-[#4d0000] transition duration-300">Get Started</button>
      </div>
    </div>

    {/* 6 Month Comprehensive Plan */}
    <div className="w-full md:w-[300px] bg-white border border-[#991b1b] rounded-2xl shadow-2xl hover:scale-105 transition duration-300 backdrop-blur-md bg-opacity-80">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#991b1b] mb-2">6 Month Plan</h2>
        <p className="text-3xl font-bold text-[#660000] mb-4">Rs.3000</p>
        <ul className="text-sm text-gray-800 space-y-2 mb-6">
          <li>✓ All Pro Care benefits</li>
          <li>✓ 6 complete health checkups</li>
          <li>✓ Emergency ambulance service</li>
          <li>✓ Dedicated care manager</li>
          <li>✓ 24/7 Customer Support</li>
          <li>✓ Secure User Login</li>
         
        </ul>
        <button className="w-full py-2 bg-[#660000] text-white rounded-xl shadow-md hover:bg-[#4d0000] transition duration-300">Get Started</button>
      </div>
    </div>
    </div>
  </div>
   <Footer />
    </div>
  );
}