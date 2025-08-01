import React from 'react'
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

import { 
  FaBell, 
  FaFileMedical, 
  FaQrcode, 
  FaPhoneAlt, 
  FaAmbulance,
  FaCreditCard,
  FaMobileAlt,
  FaHospital
} from "react-icons/fa";
import { 
  MdLocalPharmacy, 
  MdHealthAndSafety,
  MdAccountBalance 
} from "react-icons/md";
import { SiEasyeda } from "react-icons/si";

export default function PremiumPatient() {
  // Premium Features 
  const features = [
    {
      title: "Instant Alerts",
      description: "Notifications to nearby hospitals and contacts",
      icon: <FaBell className="text-4xl text-[#6C0B14]" />
    },
    {
      title: "Health Vault",
      description: "Secure cloud storage for medical documents",
      icon: <FaFileMedical className="text-4xl text-[#6C0B14]" />
    },
    {
      title: "Medi-Shop",
      description: "Convenient shopping at labs and pharmacies",
      icon: <MdLocalPharmacy className="text-4xl text-[#6C0B14]" />
    },
    {
      title: "ICE QR Card",
      description: "Emergency access when you can't use the app",
      icon: <FaQrcode className="text-4xl text-[#6C0B14]" />
    }
  ];

  // Premium Services
  const premiumServices = [
    {
      icon: <FaPhoneAlt className="text-2xl text-[#6C0B14]" />,
      text: "24/7 Emergency Support Line"
    },
    {
      icon: <FaAmbulance className="text-2xl text-[#6C0B14]" />,
      text: "Priority Ambulance Dispatch"
    },
    {
      icon: <MdHealthAndSafety className="text-2xl text-[#6C0B14]" />,
      text: "Annual Health Checkups"
    }
  ];

  // Payment Methods
  const paymentMethods = [
    { 
      name: "Credit/Debit Cards", 
      icon: <FaCreditCard className="text-3xl text-[#6C0B14]" /> 
    },
    { 
      name: "EasyPaisa", 
      icon: <SiEasyeda className="text-3xl text-[#6C0B14]" /> 
    },
    { 
      name: "JazzCash", 
      icon: <FaMobileAlt className="text-3xl text-[#6C0B14]" /> 
    },
    { 
      name: "Bank Transfer", 
      icon: <MdAccountBalance className="text-3xl text-[#6C0B14]" /> 
    }
  ];

  return ( 
    <div>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-poppins">
      <div className="h-24"></div>
      {/*  Banner */}
      <div className="w-full bg-[#F8F4EC] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6C0B14] mb-6">
          <span className="text-[#A0153E]">Premium</span> Healthcare Plan
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Advanced protection for you and your family's medical needs
        </p>
      </div>

      {/* Premium Features Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#6C0B14] mb-12">
          Premium Benefits
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#6C0B14] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Services */}
      <div className="bg-[#F1ECE9] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-[#6C0B14] mb-8">
            Exclusive Member Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {premiumServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-start bg-white p-4 rounded-lg hover:shadow-md transition"
              >
                <div className="mr-4 mt-1">
                  {service.icon}
                </div>
                <p className="text-gray-800">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#6C0B14] mb-2">
            Choose Your Plan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Select the package that fits your healthcare needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Basic</h3>
                <p className="text-3xl font-bold text-[#6C0B14] mb-4">Rs. 0<span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Emergency alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Hospital locator</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">✗</span>
                    <span>Medical records</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md">
                  Current Plan
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#6C0B14] transform scale-105 z-10">
              <div className="bg-[#6C0B14] text-white text-center py-2">
                <p className="font-semibold">MOST POPULAR</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pro Care</h3>
                <p className="text-3xl font-bold text-[#6C0B14] mb-4">Rs. 500<span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Medical records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-[#6C0B14] text-white py-2 rounded-md hover:bg-[#8a0f1a] transition">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Annual</h3>
                <p className="text-3xl font-bold text-[#6C0B14] mb-4">Rs. 5,000<span className="text-sm font-normal">/year</span></p>
                <p className="text-sm text-green-600 mb-4">Save 16% compared to monthly</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Yearly health checkup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Family package</span>
                  </li>
                </ul>
                <button className="w-full bg-[#6C0B14] text-white py-2 rounded-md hover:bg-[#8a0f1a] transition">
                  Choose Annual
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#6C0B14] mb-12">
          We Accept
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {paymentMethods.map((method, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition min-w-[150px]"
            >
              <div className="mb-3">
                {method.icon}
              </div>
              <span className="font-medium text-center">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#6C0B14] mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">How do I upgrade my plan?</h3>
              <p className="mt-2 text-gray-600">
                Select your desired plan and complete the payment. Your account will be upgraded immediately.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Can I cancel anytime?</h3>
              <p className="mt-2 text-gray-600">
                Yes, you can cancel your subscription anytime. No cancellation fees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Is my payment secure?</h3>
              <p className="mt-2 text-gray-600">
                We use bank-level encryption for all transactions. Your payment information is never stored.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#6C0B14] text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for Premium Healthcare?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands who trust us for their emergency medical needs
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-[#6C0B14] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition"
        >
          Get Started Now
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
}