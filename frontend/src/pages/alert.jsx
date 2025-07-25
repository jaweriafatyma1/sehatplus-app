import React from "react";
import { PhoneCall, Mic, LocateFixed, Ambulance } from "lucide-react";

export default function Alert() {
  return (
    <div className="w-full min-h-screen bg-[#F1EFEF] py-10 px-4 flex justify-center items-start font-serif">
      <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 🚑 Ambulance Card */}
        <div className="bg-[#FDEEDC] shadow-lg rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Ambulance className="text-[#D80032]" />
            <h2 className="text-xl font-bold text-[#1E1E1E]">Ambulances</h2>
          </div>

          <select className="w-full mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D80032]">
            <option>1122</option>
            <option>Alkhidmat</option>
            <option>Edhi</option>
            <option>Chhipa</option>
          </select>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Type your emergency"
              className="w-full p-2 border rounded-md focus:outline-none"
            />
            <Mic className="text-[#555]" />
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966484.png"
              alt="Ambulance"
              className="w-24 h-24"
            />
          </div>

          <button className="mt-6 w-full bg-[#D80032] text-white py-2 rounded-md flex justify-center items-center gap-2 hover:bg-[#b30028] transition">
            <LocateFixed size={18} /> Get Location
          </button>
        </div>

        {/* 🏥 Hospital Card */}
        <div className="bg-[#DFF5FF] shadow-lg rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Ambulance className="text-[#007F73]" />
            <h2 className="text-xl font-bold text-[#1E1E1E]">Hospitals</h2>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Type or speak your condition"
              className="w-full p-2 border rounded-md focus:outline-none"
            />
            <Mic className="text-[#555]" />
          </div>

          <div className="text-center text-gray-600 italic mb-4">
            Best hospital suggestion will appear here
          </div>

          <button className="mt-6 w-full bg-[#007F73] text-white py-2 rounded-md flex justify-center items-center gap-2 hover:bg-[#00635b] transition">
            <LocateFixed size={18} /> Get Location
          </button>
        </div>

        {/* 📞 Emergency Contacts */}
        <div className="bg-[#FDEEDC] shadow-lg rounded-2xl p-6 col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#1E1E1E]">
            <PhoneCall /> Emergency Contacts
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Ali (Brother)</span>
              <PhoneCall className="text-[#D80032] cursor-pointer hover:scale-110 transition" />
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">City Hospital</span>
              <PhoneCall className="text-[#007F73] cursor-pointer hover:scale-110 transition" />
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">Ambulance: 0300-1234567</span>
              <PhoneCall className="text-[#3A86FF] cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
