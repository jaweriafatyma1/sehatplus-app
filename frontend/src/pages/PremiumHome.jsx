import { useNavigate } from "react-router-dom";
import { href, Link } from "react-router-dom";
export default function PremiumPatient() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Alert!",
      description: "Quickly send alerts in emergency situations to nearby contacts or hospitals.",
      img: "/alert.png",
      // onClick: () => alert("🚨 Alert generated"),
      // path:"/",
    },
    {
      title: "Emergency Contact",
      description: "Instantly connect with your pre-saved emergency contact during critical moments.",
      img: "/contact.png",
      // onClick: () => alert("🚨 Emergency Contact"),
      path:"/emergency-patient",
    },
    {
      title: "Records",
      description: "Access and manage your medical records securely anytime, anywhere.",
      img: "/records.png",
      // onClick: () => alert("🚨 Records"),
      // path:"/",
    },
  ];

  return (

    <div className="min-h-screen flex flex-col bg-gray-100 font-poppins">

      <div className="w-full flex justify-center relative">
        <img
          src="./banner.jpg"
          alt="Banner"
          className="w-full h-130 object-cover rounded-b-lg shadow"
        />
      </div>
      <div className="p-20">
        <h1 className="text-center text-3xl font-bold text-[#6C0B14] mb-10">Premium Patient</h1>
        <div className="flex flex-wrap justify-center gap-6 px-4">
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
    </div>
  );
}
