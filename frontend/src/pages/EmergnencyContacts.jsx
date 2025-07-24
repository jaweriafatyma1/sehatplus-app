import { useState } from 'react';

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState([
    // { id: 1, name: "Ambulance", number: "102" },
    // { id: 2, name: "Police", number: "100" }
  ]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.number) return;

    if (editingId) {
      setContacts(contacts.map(contact => 
        contact.id === editingId ? newContact : contact
      ));
      setEditingId(null);
    } else {
      setContacts([...contacts, { ...newContact, id: Date.now() }]);
    }
    setNewContact({ name: "", number: "" });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#6C0B14]">Emergency Contacts</h1>
      
      {/* Input Form - Using your desired style */}
      <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full mb-8">
        <div className="flex items-center w-full border gap-2 bg-white text-white/90 border-gray-500/30 h-12 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Contact Name"
            className="w-full h-full pl-6 outline-none text-sm placeholder-gray-500 bg-transparent text-black"
            value={newContact.name}
            onChange={(e) => setNewContact({...newContact, name: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full h-full pl-6 outline-none text-sm placeholder-gray-500 bg-transparent text-black border-l border-gray-300"
            value={newContact.number}
            onChange={(e) => setNewContact({...newContact, number: e.target.value})}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#6C0B14] active:scale-95 transition w-32 h-12 rounded-full text-sm text-white cursor-pointer"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* Contacts List */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-gray-600">{contact.number}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setNewContact({ name: contact.name, number: contact.number });
                  setEditingId(contact.id);
                }}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(contact.id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}