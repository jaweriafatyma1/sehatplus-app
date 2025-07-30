import { useNavigate } from "react-router-dom";

export default function PremiumHome() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Alert!",
      description: "Quickly send alerts in emergency situations to nearby contacts or hospitals.",
      img: "/alert.png",
      path: "/",
    },
    {
      title: "Emergency Contact",
      description: "Instantly connect with your pre-saved emergency contact during critical moments.",
      img: "/contact.png",
      path: "/emergency-patient",
    },
    {
      title: "Records",
      description: "Access and manage your medical records securely anytime, anywhere.",
      img: "/records.png",
      path: "/upload-report",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-150 font-poppins">
      {/* 🔶 Top Banner */}
      <div className="w-full min-h-[60vh] bg-[#F8F4EC] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#660000] mb-6 tracking-tight leading-tight animate-fadeIn">
          <span className="text-[#A0153E]">Premium Patient</span> Features
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl animate-fadeIn delay-200">
          Enjoy instant emergency support, digital health management, and direct access to care at your fingertips.
        </p>
      </div>

      {/* 🔹 Feature Cards */}
      <div className="py-16 px-4">
        <h2 className="text-center text-3xl font-bold text-[#6C0B14] mb-10">What You Get</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-lg max-w-xs w-full flex flex-col justify-between"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="rounded-md max-h-40 w-full object-cover"
              />
              <div className="flex-1 mt-4">
                <p className="text-[#6C0B14] text-xl font-semibold ml-1">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-sm mt-2 ml-1">
                  {feature.description}
                </p>
              </div>
              <button
                onClick={() => navigate(feature.path)}
                className="mt-6 w-full bg-[#6C0B14] hover:bg-[#58595B] text-white font-bold py-2 px-4 rounded-xl transition-all duration-200"
              >
                Use
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🔺 Pricing Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#6C0B14]">Pricing Plans</h2>
      </div>

      {/* 💳 Pricing Plans */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full pb-20 px-4">
        {/* Basic Care Plan */}
        <PricingCard
          title="Basic Care"
          price="Rs.0"
          features={[
            "24/7 Customer Support",
            "Emergency Ambulance Call",
            "Location Sharing with Ambulance",
            "Hospital Availability Lookup",
          ]}
        />

        {/* Pro Care Plan */}
        <PricingCard
          title="Pro Care"
          price="Rs.500/month"
          features={[
            "Prescription Upload",
            "20% pharmacy discount",
            "Emergency Contact Button",
            "Priority appointment slots",
            "Customizable Profile",
            "Emergency Contacts",
            "Lab test discounts",
          ]}
        />

        {/* 6 Month Plan */}
        <PricingCard
          title="6 Month Plan"
          price="Rs.3000"
          features={[
            "All Pro Care benefits",
            "6 complete health checkups",
            "Emergency ambulance service",
            "Dedicated care manager",
            "24/7 Customer Support",
            "Secure User Login",
          ]}
        />
      </div>
    </div>
  );
}

// 💳 Reusable Pricing Card
function PricingCard({ title, price, features }) {
  return (
    <div className="w-full md:w-[300px] bg-white border border-[#991b1b] rounded-2xl shadow-2xl hover:scale-105 transition duration-300 backdrop-blur-md bg-opacity-80">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#991b1b] mb-2">{title}</h2>
        <p className="text-3xl font-bold text-[#660000] mb-4">{price}</p>
        <ul className="text-sm text-gray-800 space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
        <button className="w-full py-2 bg-[#660000] text-white rounded-xl shadow-md hover:bg-[#4d0000] transition duration-300">
          Buy
        </button>
      </div>
    </div>
  );
}
