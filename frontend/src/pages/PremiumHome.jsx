import { Menu } from 'lucide-react';

export default function PremiumHome() {
  return (
    <div className="min-h-screen font-poppins bg-gray-50">

      {/* ✅ Top Bar with Logo & Menu */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="App Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-semibold text-gray-800">SehatPlus</span>
        </div>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* ✅ Your Existing Content */}
      <div className="text-center mt-10">
        <h1 className="text-black font-bold text-3xl">Premium Patient</h1>

        <div className="mt-10">
          <button
            className="bg-[#6C0B14] hover:bg-[#58595B] text-white font-bold py-3 px-28 rounded-xl shadow-lg text-lg transition-all duration-200"
            onClick={() => alert('🚨 Alert!')}
          >
            Alert!
          </button>
        </div>

        <div className="mt-10">
          <button
            className="bg-[#6C0B14] hover:bg-[#58595B] text-white font-bold py-3 px-10 rounded-xl shadow-lg text-lg transition-all duration-200"
            onClick={() => alert('🚨 Emergency Contact')}
          >
            Emergency Contact
          </button>
        </div>

        <div className="mt-10">
          <button
            className="bg-[#6C0B14] hover:bg-[#58595B] text-white font-bold py-3 px-24 rounded-xl shadow-lg text-lg transition-all duration-200"
            onClick={() => alert('🚨 Records')}
          >
            Records
          </button>
        </div>
      </div>
    </div>
  );
}
