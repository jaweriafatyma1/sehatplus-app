import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaFileUpload, FaUserEdit, FaQrcode, FaHospital, FaAmbulance, FaMapMarkerAlt, FaCrown, FaLock,FaUserFriends, FaBell, FaShieldAlt } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { FaFlask } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HealthAppPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ isPremium: false });

  useEffect(() => {
    // Check user premium status from localStorage or auth context
    const userData = JSON.parse(localStorage.getItem('user')) || { isPremium: false };
    setUser(userData);
  }, []);

  // Sample data for Islamabad
  const medicines = [
    { id: 1, name: "Islamabad Pharmacy", distance: "0.5 km", delivery: "20 mins", location: "F-7 Markaz" },
    { id: 2, name: "Medicare", distance: "1.2 km", delivery: "30 mins", location: "Blue Area" },
    { id: 3, name: "LifeCare Meds", distance: "0.8 km", delivery: "25 mins", location: "G-9 Markaz" },
  ];

  const fullMedicinesList = [
    ...medicines,
    { id: 4, name: "HealthFirst", distance: "2.1 km", delivery: "40 mins", location: "F-10" },
  ];

  const labs = [
    { id: 1, name: "Islamabad Diagnostic Center", distance: "1.2 km", rating: "4.8", location: "Blue Area", tests: "300+ tests" },
    { id: 2, name: "Excel Labs Islamabad", distance: "2.5 km", rating: "4.6", location: "F-8", tests: "250+ tests" },
    { id: 6, name: "Chughtai Lab Islamabad", distance: "3.5 km", rating: "4.4", location: "G-7", tests: "300+ tests" },

  ];

  const fullLabsList = [
    ...labs,
    { id: 3, name: "Shifa International Labs", distance: "3.1 km", rating: "4.9", location: "H-8/4", tests: "400+ tests" },
  ];

  const features = [
    { icon: <FaExclamationTriangle className="text-3xl" />, title: "Emergency Alert", description: "Send instant alerts to hospitals and emergency contacts", isFree: true, path: "/alert" },
    { icon: <FaFileUpload className="text-3xl" />, title: "Medical Records", description: "Upload and store important health documents", isFree: false, path: "/records" },
    { icon: <FaUserEdit className="text-3xl" />, title: "Emergency Setup", description: "Configure emergency contacts and preferences", isFree: false, path: "/setup" },
    { icon: <FaQrcode className="text-3xl" />, title: "Emergency QR", description: "Generate QR codes with medical info", isFree: false, path: "/qr" },
  ];

  return (
    <div className="bg-[#FEF3F3] min-h-screen">
      {/* Navbar Space */}
      <div className="h-24"></div>

      {/* Hero Banner - Different for premium/free users */}
      <div className="relative bg-[#F6E1C3] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="text-[#6C0B14] mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sehat ka raabta, <span className="text-[#FEF3F3]">{user.name}</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          {user.isPremium ? (
            <span className="inline-flex items-center bg-[#F1ECE9] px-4 py-2 rounded-full text-[#6C0B14]">
              <FaCrown className="mr-2 text-[#6C0B14]" /> 
              Premium Member
            </span>
          ) : (
            "Har waqt aap ke saath"
          )}
        </p>
      </div>
      <div className="flex flex-col space-y-4 w-full md:w-auto">
        <button 
          onClick={() => navigate('/emergency')}
          className="px-8 py-3 bg-[#6C0B14] text-[#FEF3F3] rounded-full font-bold hover:bg-[#E8E0DC] transition-all shadow-md flex items-center justify-center"
        >
          <FaExclamationTriangle className="mr-2" />
          Emergency Alert
        </button>
        <button 
          onClick={() => navigate(user.isPremium ? '/ambulance' : '/upgrade')}
          className={`px-8 py-3 rounded-full font-bold transition-all shadow-md flex items-center justify-center ${
            user.isPremium 
              ? 'bg-[#FEF3F3] text-[#6C0B14] hover:bg-[#E8E0DC]' 
              : 'bg-[#A0153E] text-white hover:bg-[#B51F4A]'
          }`}
        >
          {user.isPremium ? (
            <>
              <FaAmbulance className="mr-2" />
              Quick Ambulance
            </>
          ) : (
            <>
              <FaCrown className="mr-2" />
              Upgrade Now
            </>
          )}
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isFree={feature.isFree}
              isPremiumUser={user.isPremium}
              onClick={() => feature.isFree || user.isPremium ? navigate(feature.path) : navigate('/premium')}
            />
          ))}
        </div>
         {/* Quick Access Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-[#F1ECE9]">
          <h2 className="text-3xl font-bold text-[#6C0B14] mb-8 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <button 
              onClick={() => navigate('/alert')}
              className="py-5 px-4 bg-[#F8F4EC] rounded-lg flex flex-col items-center hover:bg-[#6C0B14] hover:text-white transition-all group shadow-sm h-full"
            >
              <FaBell className="text-3xl mb-3 text-[#6C0B14] group-hover:text-white transition" />
              <span className="font-bold">Emergency Alert</span>
              <span className="text-xs mt-1 text-gray-500 group-hover:text-white/80">Always Available</span>
            </button>
            
            <button 
              onClick={() => user.isPremium ? navigate('/emergency-contacts') : navigate('/premium')}
              className={`py-5 px-4 rounded-lg flex flex-col items-center transition-all group shadow-sm relative h-full ${
                user.isPremium 
                  ? 'bg-[#F8F4EC] hover:bg-[#6C0B14] hover:text-white' 
                  : 'bg-gray-100 text-gray-400 cursor-pointer'
              }`}
            >
              <FaUserFriends className={`text-3xl mb-3 ${user.isPremium ? 'text-[#6C0B14] group-hover:text-white' : 'text-gray-400'}`} />
              <span className={`font-bold ${!user.isPremium && 'text-gray-400'}`}>Emergency Contacts</span>
              <span className="text-xs mt-1 group-hover:text-white/80">
                {user.isPremium ? "Available" : "Premium Only"}
              </span>
              {!user.isPremium && (
                <FaLock className="absolute top-3 right-3 text-[#6C0B14]" />
              )}
            </button>
            
            <button 
              onClick={() => navigate('/ambulance')}
              className="py-5 px-4 bg-[#F8F4EC] rounded-lg flex flex-col items-center hover:bg-[#6C0B14] hover:text-white transition-all group shadow-sm h-full"
            >
              <FaAmbulance className="text-3xl mb-3 text-[#6C0B14] group-hover:text-white" />
              <span className="font-bold">Ambulance</span>
              <span className="text-xs mt-1 text-gray-500 group-hover:text-white/80">24/7 Service</span>
            </button>
            
            <button 
              onClick={() => user.isPremium ? navigate('/ice-card') : navigate('/premium')}
              className={`py-5 px-4 rounded-lg flex flex-col items-center transition-all group shadow-sm relative h-full ${
                user.isPremium 
                  ? 'bg-[#F8F4EC] hover:bg-[#6C0B14] hover:text-white' 
                  : 'bg-gray-100 text-gray-400 cursor-pointer'
              }`}
            >
              <FaQrcode className={`text-3xl mb-3 ${user.isPremium ? 'text-[#6C0B14] group-hover:text-white' : 'text-gray-400'}`} />
              <span className={`font-bold ${!user.isPremium && 'text-gray-400'}`}>ICE Card</span>
              <span className="text-xs mt-1 group-hover:text-white/80">
                {user.isPremium ? "Available" : "Premium Only"}
              </span>
              {!user.isPremium && (
                <FaLock className="absolute top-3 right-3 text-[#6C0B14]" />
              )}
            </button>
          </div>
        </div>
{/* 
        {/* Emergency Facilities /}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#6C0B14] mb-6 text-center">Emergency Medical Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FacilityItem name="PIMS Hospital" details="G-8/3, 24/7 Available" />
            <FacilityItem name="Shifa International" details="H-8/4, Specialist Care" />
            <FacilityItem name="Polyclinic Hospital" details="G-6, Emergency Services" />
            <FacilityItem name="Ali Medical Center" details="F-8, Trauma Center" />
          </div>
        </div> */}

        {/* Islamabad Pharmacies */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MdLocalPharmacy className="text-2xl text-[#6C0B14] mr-3" />
              <h2 className="text-2xl font-bold text-[#6C0B14]">Pharmacies</h2>
            </div>
            {user.isPremium ? (
              <button className="text-sm text-[#6C0B14] flex items-center">
                View all <IoIosArrowForward className="ml-1" />
              </button>
            ) : (
              <button 
                className="text-sm text-[#6C0B14] flex items-center"
                onClick={() => navigate('/premium')}
              >
                Upgrade to see all <IoIosArrowForward className="ml-1" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {(user.isPremium ? fullMedicinesList : medicines).map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
            {!user.isPremium && (
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col items-center justify-center cursor-pointer"
                style={{ height: "100%" }}
                onClick={() => navigate('/premium')}
              >
                <div className="p-5 flex-grow flex flex-col items-center justify-center text-center">
                  <FaLock className="text-4xl text-[#6C0B14] mb-4" />
                  {/* <h3 className="text-lg font-bold text-[#6C0B14]">More Pharmacies Available</h3> */}
                  <p className="text-sm text-gray-600 mt-2">Upgrade to premium to access all pharmacies</p>
                </div>
                <div className="px-5 pb-5 w-full">
                  <button className="w-full bg-[#6C0B14] hover:bg-[#8a0f1a] text-white py-3 rounded-lg text-sm font-medium transition-colors">
                    Upgrade Now
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Islamabad Labs */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FaFlask className="text-2xl text-[#6C0B14] mr-3" />
              <h2 className="text-2xl font-bold text-[#6C0B14]">Diagnostic Labs</h2>
            </div>
            {user.isPremium ? (
              <button className="text-sm text-[#6C0B14] flex items-center">
                View all <IoIosArrowForward className="ml-1" />
              </button>
            ) : (
              <button 
                className="text-sm text-[#6C0B14] flex items-center"
                onClick={() => navigate('/premium')}
              >
                Upgrade to see all <IoIosArrowForward className="ml-1" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {(user.isPremium ? fullLabsList : labs).map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
            {!user.isPremium && (
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col items-center justify-center cursor-pointer"
                style={{ height: "100%" }}
                onClick={() => navigate('/premium')}
              >
                <div className="p-5 flex-grow flex flex-col items-center justify-center text-center">
                  <FaLock className="text-4xl text-[#6C0B14] mb-4" />
                  <h3 className="text-lg font-bold text-[#6C0B14]">More Labs Available</h3>
                  <p className="text-sm text-gray-600 mt-2">Upgrade to premium to access all diagnostic labs</p>
                </div>
                <div className="px-5 pb-5 w-full">
                  <button className="w-full bg-[#6C0B14] hover:bg-[#8a0f1a] text-white py-3 rounded-lg text-sm font-medium transition-colors">
                    Upgrade Now
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
<div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-[#F1ECE9]">
          <h2 className="text-3xl font-bold text-[#6C0B14] mb-8 text-center">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 hover:bg-[#F8F4EC] rounded-lg transition cursor-pointer">
              <div className="bg-[#E8F5E9] p-3 rounded-full mr-4">
                <FaBell className="text-[#2E7D32] text-xl" />
              </div>
              <div>
                <p className="font-bold">Emergency alert activated</p>
                <p className="text-sm text-gray-500">Today, 10:42 AM</p>
                <p className="text-xs text-gray-400 mt-1">Alert sent to 3 nearby hospitals</p>
              </div>
            </div>
            
            {user.isPremium && (
              <>
                <div className="flex items-start p-4 hover:bg-[#F8F4EC] rounded-lg transition cursor-pointer">
                  <div className="bg-[#E3F2FD] p-3 rounded-full mr-4">
                    <FaUserFriends className="text-[#1565C0] text-xl" />
                  </div>
                  <div>
                    <p className="font-bold">Emergency contacts notified</p>
                    <p className="text-sm text-gray-500">Yesterday, 3:15 PM</p>
                    <p className="text-xs text-gray-400 mt-1">5 contacts received your alert</p>
                  </div>
                </div>
                <div className="flex items-start p-4 hover:bg-[#F8F4EC] rounded-lg transition cursor-pointer">
                  <div className="bg-[#F3E5F5] p-3 rounded-full mr-4">
                    <FaHospital className="text-[#7B1FA2] text-xl" />
                  </div>
                  <div>
                    <p className="font-bold">Hospital check-in completed</p>
                    <p className="text-sm text-gray-500">Monday, 9:30 AM</p>
                    <p className="text-xs text-gray-400 mt-1">Records shared with City Hospital</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Updated FeatureCard component with premium lock
function FeatureCard({ icon, title, description, isFree, isPremiumUser, onClick }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      className="bg-white rounded-xl p-6 shadow-lg border border-[#e8d9c9] flex flex-col items-center text-center h-full relative"
      onClick={isFree || isPremiumUser ? onClick : undefined}
      style={{ cursor: isFree || isPremiumUser ? 'pointer' : 'default' }}
    >
      {!isFree && !isPremiumUser && (
        <div className="absolute top-3 right-3 bg-[#6C0B14] text-white text-xs px-2 py-1 rounded-full font-bold flex items-center">
          <FaLock className="mr-1" /> PREMIUM
        </div>
      )}
      <div className="text-[#6C0B14] mb-4 p-4 bg-[#F9E8E8] rounded-full shadow-sm">{icon}</div>
      <h3 className="text-xl font-bold text-[#6C0B14] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {!isFree && !isPremiumUser }
    </motion.div>
  );
}

// Rest of the components remain exactly the same
function MedicineCard({ medicine }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col" style={{ height: "100%" }}>
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-[#6C0B14] line-clamp-2">{medicine.name}</h3>
          <span className="bg-[#F9E8E8] text-[#6C0B14] px-1 py-1 rounded-full text-xs">{medicine.distance}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-[#6C0B14]" size={12} />
            <span>{medicine.location}</span>
          </div>
          <div className="text-sm text-gray-600">Delivery in {medicine.delivery}</div>
        </div>
      </div>
      <div className="px-5 pb-5">
        <button className="w-full bg-[#6C0B14] hover:bg-[#8a0f1a] text-white py-3 rounded-lg text-sm font-medium transition-colors">
          Order Medicines
        </button>
      </div>
    </motion.div>
  );
}

function LabCard({ lab }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col" style={{ height: "100%" }}>
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-[#6C0B14] line-clamp-2">{lab.name}</h3>
          <div className="flex items-center bg-[#F8F4EC] px-2 py-1 rounded-full min-w-[60px]">
            <span className="text-sm font-medium">{lab.rating}</span>
            <svg className="w-4 h-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-[#6C0B14]" size={12} />
            <span>{lab.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded mr-2">{lab.distance} away</span>
            <span>{lab.tests}</span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5">
        <button className="w-full bg-[#6C0B14] hover:bg-[#8a0f1a] text-white py-3 rounded-lg text-sm font-medium transition-colors">
          Book Tests
        </button>
      </div>
    </motion.div>
  );
}

function FacilityItem({ name, details }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="flex items-start p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <FaHospital className="text-[#6C0B14] text-xl mr-4 mt-1" />
      <div>
        <h4 className="text-xl font-medium text-[#6C0B14]">{name}</h4>
        <p className="text-gray-600">{details}</p>
      </div>
    </motion.div>
  );
}