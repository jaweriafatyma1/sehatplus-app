import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCrown, FaLock } from 'react-icons/fa';

export default function EmergencyContacts() {
  const navigate = useNavigate();
  const [isPremium, setIsPremium] = useState(false);
  
  // Emergency Contacts State
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [editingId, setEditingId] = useState(null);

  // Preferred Services State
  const [preferredServices, setPreferredServices] = useState({ hospital: "", ambulance: "" });
  const [savedServices, setSavedServices] = useState([]);

  // Patient Info State
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    bloodGroup: "",
    medicalHistory: "",
    preferredHospital: "",
    additionaComments: ""
  });

  // Check premium status on load
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')) || { isPremium: false };
    setIsPremium(userData.isPremium);
  }, []);

  // Emergency Contacts Handlers
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.number) return;

    if (editingId) {
      setContacts(contacts.map(contact =>
        contact.id === editingId ? { ...newContact, id: editingId } : contact
      ));
      setEditingId(null);
    } else {
      setContacts([...contacts, { ...newContact, id: Date.now() }]);
    }
    setNewContact({ name: "", number: "" });
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setNewContact({ name: "", number: "" });
    }
  };

  // Preferred Services Handlers
  const handleServiceSubmit = (e) => {
    e.preventDefault();
    if (!preferredServices.hospital && !preferredServices.ambulance) return;
    setSavedServices([
      ...savedServices,
      { ...preferredServices, id: Date.now() }
    ]);
    setPreferredServices({ hospital: "", ambulance: "" });
  };

  const handleDeleteService = (id) => {
    setSavedServices(savedServices.filter(service => service.id !== id));
  };

  // Patient Info Handler
  const handlePatientInfoSubmit = (e) => {
    e.preventDefault();
    // add logic to save patient info when needed
  };

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="h-24"></div>
        {/* Header */}
        <div className="w-full relative bg-[#6C0B14] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Emergency Health Preferences
              </h1>
              <p className="mt-6 text-xl text-[#FFB6B6] max-w-3xl mx-auto">
                Premium feature - Upgrade to configure your emergency setup
              </p>
            </div>
          </div>
        </div>

        {/* Upgrade Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <div className="mx-auto bg-[#f8f4ec] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <FaLock className="text-3xl text-[#6C0B14]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Feature Locked</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Unlock the ability to set emergency contacts, preferred services and medical information
              </p>
              
              {/* Pricing Cards */}
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
        </div>
      </div>
    );
  }

  // Original premium content
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main container */}
      <div className="mx-auto"> 
        {/* Header */}
        <div className="w-full relative bg-[#6C0B14] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Emergency Health Preferences
              </h1>
              <p className="mt-6 text-xl text-[#FFB6B6] max-w-3xl mx-auto">
                Manage your emergency contacts, preferred services, and medical information
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Emergency Contacts */}
        <section 
          id="emergency-contacts" 
          className="m-12 bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
        >
          <div className="p-6 bg-[#6C0B14] text-white">
            <h2 className="text-xl font-bold">Emergency Contacts</h2>
            <p className="text-[#FFB6B6] text-sm">Add people to contact in emergencies</p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleContactSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 flex border border-gray-300 rounded-lg overflow-hidden bg-white">
                <input
                  type="text"
                  placeholder="Contact Name"
                  className="flex-1 px-4 py-3 outline-none"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  required
                />
                <div className="w-px bg-gray-300"></div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-3 outline-none"
                  value={newContact.number}
                  onChange={(e) => setNewContact({...newContact, number: e.target.value})}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#6C0B14] hover:bg-[#800000] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {editingId ? "Update" : "Add Contact"}
              </button>
            </form>

            <div className="space-y-3">
              {contacts.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No emergency contacts added yet</p>
                </div>
              ) : (
                contacts.map((contact) => (
                  <div key={contact.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div>
                      <h3 className="font-medium text-gray-800">{contact.name}</h3>
                      <p className="text-gray-600">{contact.number}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setNewContact({ name: contact.name, number: contact.number });
                          setEditingId(contact.id);
                        }}
                        className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Section 2: Preferred Services */}
        <section 
          id="preferred-services" 
          className="m-12 bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
        >
          <div className="p-6 bg-[#6C0B14] text-white">
            <h2 className="text-xl font-bold">Preferred Services</h2>
            <p className="text-[#FFB6B6] text-sm">Set your preferred healthcare providers</p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleServiceSubmit} className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Hospital</label>
                  <input
                    type="text"
                    value={preferredServices.hospital}
                    onChange={(e) => setPreferredServices({...preferredServices, hospital: e.target.value})}
                    placeholder="Enter hospital name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Ambulance</label>
                  <input
                    type="text"
                    value={preferredServices.ambulance}
                    onChange={(e) => setPreferredServices({...preferredServices, ambulance: e.target.value})}
                    placeholder="Enter ambulance service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#6C0B14] hover:bg-[#800000] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Save Preferences
              </button>
            </form>

            <div className="space-y-4">
              {savedServices.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No preferred services saved yet</p>
                </div>
              ) : (
                savedServices.map((service) => (
                  <div key={service.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.hospital && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Hospital</h3>
                          <p className="text-gray-800">{service.hospital}</p>
                        </div>
                      )}
                      {service.ambulance && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Ambulance Service</h3>
                          <p className="text-gray-800">{service.ambulance}</p>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="mt-3 text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Section 3: Patient Information */}
        <div className='mb-30'>
          <section 
            id="patient-info" 
            className="bg-white m-12 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
          >
            <div className="p-6 bg-[#6C0B14] text-white">
              <h2 className="text-xl font-bold">My Information</h2>
              <p className="text-[#FFB6B6] text-sm">Your personal medical details</p>
            </div>
            
            <div className="p-6">
              <form onSubmit={handlePatientInfoSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={patientInfo.name}
                      onChange={(e) => setPatientInfo({...patientInfo, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                    <select
                      value={patientInfo.bloodGroup}
                      onChange={(e) => setPatientInfo({...patientInfo, bloodGroup: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent bg-white"
                      required
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical History</label>
                  <textarea
                    value={patientInfo.medicalHistory}
                    onChange={(e) => setPatientInfo({...patientInfo, medicalHistory: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent"
                    rows="4"
                    placeholder="Any allergies, chronic conditions, or important medical history"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Hospital</label>
                    <input
                      type="text"
                      value={patientInfo.preferredHospital}
                      onChange={(e) => setPatientInfo({...patientInfo, preferredHospital: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent"
                      placeholder="Your preferred hospital"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                    <input
                      type="text"
                      value={patientInfo.additionaComments}
                      onChange={(e) => setPatientInfo({...patientInfo, additionaComments: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C0B14] focus:border-transparent"
                      placeholder="Any additional comments"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#6C0B14] hover:bg-[#800000] text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Save My Information
                </button>

                <p className="text-xs text-gray-500 mt-2">
                  This information will be displayed to emergency responders when needed.
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}