import React from "react";
export default function Home() {
  const features = [
    {
      title: "Alert!",
      description: "Quickly send alerts in emergency situations to nearby contacts or hospitals.",
      img: "/alert.png",
      isFree: true,
      onClick: () => alert("🚨 Alert!"),
    },
    {
      title: "Emergency Contact",
      description: "Instantly connect with your pre-saved emergency contact during critical moments.",
      img: "/contact.png",
      isFree: false,
      onClick: () => alert("🚨 Emergency Contact"),
    },
    {
      title: "Records",
      description: "Access and manage your medical records securely anytime, anywhere.",
      img: "/records.png",
      isFree: false,
      onClick: () => alert("🚨 Records"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100  font-poppins">
      
      {/* ✅ Banner Image */}
      <div className="w-full flex justify-center">
        <img
          src="/banner.png"
          alt="Sehat+ Banner"
          className="w-340 h-130 object-cover rounded-b-xl shadow"
        />
      </div>

      {/* ✅ Heading */}
      <h1 className="text-center text-3xl font-bold text-black mt-10 mb-8">
        Patient Services
      </h1>

      {/* ✅ Flip Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-20">
        {features.map((feature, index) => (
          <FlipCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

// ✅ FlipCard Component with Tag
function FlipCard({ title, description, img, onClick, isFree }) {
  return (
    <div className="group w-64 h-80 [perspective:1000px] cursor-pointer relative">
      
      {/* Tag */}
      <div className="absolute top-2 right-2 z-20">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full shadow ${
          isFree
            ? "bg-grey-200 text-grey-900"
            : "bg-red-200 text-red-900"
        }`}>
          {isFree ? "FREE" : "PREMIUM"}
        </span>
      </div>

      {/* Flip Box */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl bg-white shadow-xl border border-gray-200 flex flex-col items-center justify-center p-4">
          <img
            src={img}
            alt={title}
            className="h-36 w-full object-contain mb-4"
          />
          <p className="text-[#6D2323] text-xl font-bold">{title}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-[#6C0B14] text-white shadow-xl flex flex-col justify-between items-center p-4">
          <p className="text-sm text-center">{description}</p>
          <button
            onClick={onClick}
            className="mt-6 bg-white text-[#6C0B14] hover:bg-[#58595B] hover:text-white font-bold py-2 px-4 rounded-xl transition-all duration-200"
          >
            Use
          </button>
        </div>

      </div>
    </div>
  );
}
