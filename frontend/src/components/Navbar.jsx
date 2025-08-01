import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  FaUser, 
  FaChevronDown, 
  FaBell, 
  FaUserCircle,
  FaSignOutAlt,
  FaNotesMedical,
  FaExclamationTriangle,
  FaCog
} from "react-icons/fa";
import { useAuth } from '@/context/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo - links to home or dashboard based on auth */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex-shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="SehatPlus Logo"
              className="h-20 w-20 object-contain" 
            />
            <span className="ml-4 text-3xl font-bold text-[#6C0B14]">SehatPlus</span> 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/alerts" 
                  className="flex items-center text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                >
                  <FaExclamationTriangle className="mr-2" />
                  Alerts
                </Link>
                <Link 
                  to="/records" 
                  className="flex items-center text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                >
                  <FaNotesMedical className="mr-2" />
                  Records
                </Link>
                <Link 
                  to="/settings" 
                  className="flex items-center text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                >
                  <FaCog className="mr-2" />
                  Settings
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                >
                  About
                </Link>
                <div className="relative">
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                  >
                    Premium <FaChevronDown className="ml-1 text-sm" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/premium-features"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#F8F4EC]"
                      >
                        Features
                      </Link>
                      <Link
                        to="/pricing"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#F8F4EC]"
                      >
                        Pricing
                      </Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/notifications"
                  className="p-2 text-gray-800 hover:text-[#A0153E] relative"
                >
                  <FaBell className="text-xl" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Link>
                
                <div className="relative">
                  <button 
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center space-x-2 text-lg text-gray-800 hover:text-[#A0153E] px-3 py-2 font-medium"
                  >
                    <FaUserCircle className="text-2xl" />
                    <span>Profile</span>
                    <FaChevronDown className="ml-1 text-sm" />
                  </button>
                  
                  {profileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#F8F4EC]"
                      >
                        <FaUserCircle className="mr-2" />
                        My Profile
                      </Link>
                      <button
                        className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-[#F8F4EC]"
                        onClick={logout}
                      >
                        <FaSignOutAlt className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/signup"
                  className="px-8 py-3 rounded-full text-lg font-medium border-2 border-[#6C0B14] text-[#6C0B14] hover:bg-[#6C0B14] hover:text-white transition-all"
                >
                  Get Started
                </Link>
                <Link 
                  to="/login"
                  className="flex items-center px-8 py-3 rounded-full bg-[#6C0B14] text-white text-lg font-medium hover:bg-[#8a0f1a] transition-all"
                >
                  <FaUser className="mr-2" />
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#6C0B14] hover:text-[#8a0f1a] focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-xl`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {isAuthenticated ? (
            <>
              <Link
                to="/alerts"
                className="flex items-center px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:text-[#A0153E] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <FaExclamationTriangle className="mr-2" />
                Alerts
              </Link>
              <Link
                to="/records"
                className="flex items-center px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:text-[#A0153E] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <FaNotesMedical className="mr-2" />
                Records
              </Link>
              <Link
                to="/settings"
                className="flex items-center px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:text-[#A0153E] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <FaCog className="mr-2" />
                Settings
              </Link>
              <div className="pt-4 pb-2 border-t border-gray-200 space-y-3">
                <Link
                  to="/profile"
                  className="flex items-center justify-center w-full px-6 py-3 text-center rounded-full bg-[#6C0B14] text-white text-lg font-medium hover:bg-[#8a0f1a]"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUserCircle className="mr-2" />
                  My Profile
                </Link>
                <button
                  className="flex items-center justify-center w-full px-6 py-3 text-center rounded-full border-2 border-[#6C0B14] text-[#6C0B14] text-lg font-medium hover:bg-gray-50"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:text-[#A0153E] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:text-[#A0153E] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/premium-features"
                className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-800 hover:text-[#A0153E] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Premium Features
              </Link>
              <div className="pt-4 pb-2 border-t border-gray-200 space-y-3">
                <Link
                  to="/signup"
                  className="block w-full px-6 py-3 text-center rounded-full bg-[#6C0B14] text-white text-lg font-medium hover:bg-[#8a0f1a]"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="flex items-center justify-center w-full px-6 py-3 text-center rounded-full border-2 border-[#6C0B14] text-[#6C0B14] text-lg font-medium hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUser className="mr-2" />
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;