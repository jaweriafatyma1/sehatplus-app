import React, { useState, useEffect } from "react";
import { Phone, Mic, MapPin, Ambulance, Send, AlertTriangle, HeartPulse, Stethoscope } from "lucide-react";

export default function Alert() {
  const [emergencyText, setEmergencyText] = useState("");
  const [conditionText, setConditionText] = useState("");
  const [selectedService, setSelectedService] = useState("1122");

  // Mock data 
  const emergencyContacts = [
    { name: "Ali (Brother)", number: "+920300000000" },
    { name: "Fatima (Mother)", number: "+920310000001" },
    { name: "Ahmed (Father)", number: "+920320000002" }
  ];
  
  const ambulanceServices = ["1122", "Edhi", "Chhipa", "Alkhidmat"];
  const preferredHospital = "Shifa International Hospital";

  const handleMicInput = (setText) => {
    console.log("Voice input would activate here");
    setText("Sample voice input text"); // Mock implementation
  };

  const handleSendAlert = () => {
    alert(`Emergency alert sent to ${selectedService}!\nMessage: ${emergencyText}`);
    setEmergencyText("");
  };

  const handleSendCondition = () => {
    alert(`Medical condition sent to ${preferredHospital}:\n${conditionText}`);
    setConditionText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] to-[#f0f0f0] font-sans">
      {/* banner */}
      <div className="w-full bg-gradient-to-r from-[#8B0000] to-[#c00000] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://img.freepik.com/free-vector/medical-pattern-background-vector-seamless_53876-140729.jpg')] bg-repeat opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Immediate Medical Assistance
          </h1>
          <p className="text-xl text-[#ffcccc] max-w-2xl mx-auto">
            Get help fast with our integrated emergency response system
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#f0f0f0] overflow-hidden transition-all hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#8B0000] to-[#a00000] p-6">
              <div className="flex items-center">
                <Ambulance className="text-white mr-3" size={28} />
                <h2 className="text-2xl font-bold text-white">Emergency Response</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                <div className="grid grid-cols-2 gap-3">
                  {ambulanceServices.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`py-2 px-4 rounded-lg border transition-all ${selectedService === service 
                        ? 'bg-[#8B0000] text-white border-[#8B0000]' 
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#8B0000]'}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Details</label>
                <div className="relative">
                  <textarea
                    value={emergencyText}
                    onChange={(e) => setEmergencyText(e.target.value)}
                    placeholder="Describe your emergency..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent min-h-[120px]"
                  />
                  <div className="absolute right-3 bottom-3 flex gap-2">
                    <button 
                      onClick={() => handleMicInput(setEmergencyText)}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                    >
                      <Mic className="text-gray-600" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleSendAlert}
                  className="flex-1 bg-gradient-to-r from-[#8B0000] to-[#a00000] text-white py-3 px-6 rounded-lg font-medium hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Emergency Alert
                </button>
                <button className="flex-1 bg-white border border-[#8B0000] text-[#8B0000] py-3 px-6 rounded-lg font-medium hover:bg-[#fff0f0] transition flex items-center justify-center gap-2">
                  <MapPin size={18} />
                  Share Location
                </button>
              </div>
            </div>
          </div>

          {/* Medical Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#f0f0f0] overflow-hidden transition-all hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#8B0000] to-[#a00000] p-6">
              <div className="flex items-center">
                <Stethoscope className="text-white mr-3" size={28} />
                <h2 className="text-2xl font-bold text-white">Medical Assistance</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6 bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
                <div className="flex items-start">
                  <HeartPulse className="text-[#8B0000] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Preferred Hospital</h3>
                    <p className="text-gray-600 mt-1">{preferredHospital}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical Condition</label>
                <div className="relative">
                  <textarea
                    value={conditionText}
                    onChange={(e) => setConditionText(e.target.value)}
                    placeholder="Describe your symptoms or condition..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent min-h-[120px]"
                  />
                  <div className="absolute right-3 bottom-3 flex gap-2">
                    <button 
                      onClick={() => handleMicInput(setConditionText)}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                    >
                      <Mic className="text-gray-600" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-16">
                <button 
                  onClick={handleSendCondition}
                  className="flex-1 bg-gradient-to-r from-[#8B0000] to-[#a00000] text-white py-3 px-6 rounded-lg font-medium hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send to Hospital
                </button>
                <button className="flex-1 bg-white border border-[#8B0000] to-[#a00000] text-[#8B0000] py-3 px-6 rounded-lg font-medium hover:bg-[#f0f7ff] transition flex items-center justify-center gap-2">
                  <MapPin size={18} />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-[#f0f0f0] overflow-hidden">
          <div className="bg-gradient-to-r from-[#8B0000] to-[#a00000] p-6">
            <div className="flex items-center">
              <Phone className="text-white mr-3" size={28} />
              <h2 className="text-2xl font-bold text-white">Emergency Contacts</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0] hover:border-[#8B0000] transition group">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{contact.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{contact.number}</p>
                    </div>
                    <a 
                      href={`tel:${contact.number}`} 
                      className="p-2 bg-white rounded-full shadow-sm group-hover:bg-[#8B0000] group-hover:text-white transition"
                    >
                      <Phone className="text-gray-600 group-hover:text-white" size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}