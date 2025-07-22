// src/components/MapView.jsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

// ✅ Custom hospital icon
const hospitalIcon = new L.Icon({
  iconUrl: 'logo.png', // Reference from public directory
  iconSize: [100, 100],                 // Adjust as needed
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
});

export default function MapView() {
  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[33.6844, 73.0479]} // Islamabad
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ✅ Use custom hospital icon here */}
        <Marker position={[33.6844, 73.0479]} icon={hospitalIcon}>
          <Popup>
            🏥 <strong>SehatPlus HQ</strong><br />
            G-8, Islamabad
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
