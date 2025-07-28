import React, { useEffect, useState, useRef } from "react";
import { PiHospitalLight } from "react-icons/pi";
import { TbEmergencyBed } from "react-icons/tb";
import { BsQrCode } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScrollToFeatures = () => {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "Alert!",
      description:
        "Quickly send alerts in emergency situations to nearby contacts or hospitals.",
      img: "/alert.png",
      isFree: true,
      onClick: () => alert("🚨 Alert!"),
    },
    {
      title: "Emergency Contact",
      description:
        "Instantly connect with your pre-saved emergency contact during critical moments.",
      img: "/contact.png",
      isFree: false,
      onClick: () => alert("🚨 Emergency Contact"),
    },
    {
      title: "Records",
      description:
        "Access and manage your medical records securely anytime, anywhere.",
      img: "/records.png",
      isFree: false,
      onClick: () => alert("🚨 Records"),
    },
  ];

  const services = [
    {
      icon: <TbEmergencyBed size={40} className="text-[#6C0B14]" />,
      title: "Emergency Connect",
      text: "Instantly link with nearby ambulances and hospitals during emergencies.",
    },
    {
      icon: <PiHospitalLight size={40} className="text-[#6C0B14]" />,
      title: "Live Hospital Directory",
      text: "Real-time info on hospital beds, doctors, labs & pharmacies.",
    },
    {
      icon: <BsQrCode size={40} className="text-[#6C0B14]" />,
      title: "Smart Health ID",
      text: "Access and share medical info via QR, ICE card, or lock screen widget.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      {/* 🔶 Hero Banner */}
      <div className="w-full bg-[#F8F4EC] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#6C0B14] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Sehat ka raabta, 
              <br />
              har waqt aap ke saath.            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Seamless smart care built for critical emergencies and day-to-day well-being.
            </motion.p>

            <motion.button
              onClick={handleScrollToFeatures}
              className="bg-[#6C0B14] text-white hover:bg-[#8a0f1a] font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
          </div>

          <div className="flex justify-center">
            <img
              src="/Ambulance.png"
              alt="Doctor Banner"
              className="rounded-xl w-full max-w-md object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      {/* ✅ Features Section */}
      <div ref={featureRef} className="py-16 bg-gray-50">
        <h1 className="text-center text-3xl font-bold text-[#6C0B14] mb-10">Features</h1>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {features.map((feature, index) => (
            <FlipCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* ✅ Our Services */}
      <section className="bg-[#F5F5F5] py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#6C0B14] mb-4">Our Services</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Seamless emergency support, healthcare data access, and patient-hospital connectivity.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-6xl mx-auto text-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="w-full bg-[#F1ECE9] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#6C0B14] mb-4">Why Choose Sehat Plus?</h2>
            <h3 className="text-2xl font-semibold text-gray-800">
              A Smarter, Faster, Safer Healthcare Experience
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-8">
                Sehat Plus bridges the gap between patients, ambulances, hospitals, and emergency contacts — in real-time. We are transforming how critical care reaches you, leveraging AI, offline readiness, and smart identity tools.
              </p>

              <div className="space-y-6">
                <WhyUsItem
                  title="Smart Emergency System"
                  text="AI-based triage, ICE tools, and location sharing for real-time care access."
                />
                <WhyUsItem
                  title="Live Hospital Integration"
                  text="Know hospital bed availability, doctors, and labs in seconds."
                />
                <WhyUsItem
                  title="Smart Health Identity"
                  text="QR, lock screen ICE, and digital health records — always accessible and secure."
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/WhyUs.svg"
                alt="Why Us Illustration"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FlipCard({ title, description, img, onClick, isFree }) {
  return (
    <div className="group w-80 h-[28rem] [perspective:1000px] cursor-pointer relative">
      <div className="absolute top-2 right-2 z-20">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full shadow ${
            isFree ? "bg-gray-200 text-gray-900" : "bg-red-200 text-red-900"
          }`}
        >
          {isFree ? "FREE" : "PREMIUM"}
        </span>
      </div>
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl bg-white shadow-xl border border-gray-200 flex flex-col items-center justify-center p-4">
          <img src={img} alt={title} className="h-52 w-full object-contain mb-4" />
          <p className="text-[#6D2323] text-2xl font-bold text-center">{title}</p>
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-[#6C0B14] text-white shadow-xl flex flex-col justify-center items-center p-6">
          <p className="text-base text-center mb-6">{description}</p>
          <button
            onClick={onClick}
            className="bg-white text-[#6C0B14] hover:bg-[#58595B] hover:text-white font-bold py-2 px-4 rounded-xl transition-all duration-200"
          >
            Use
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
}

function WhyUsItem({ title, text }) {
  return (
    <div className="flex items-start">
      <div className="bg-[#6C0B14] rounded-full p-2 mr-4">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}
