// src/components/MapView.jsx

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Replace the default icon with custom hospital icon
const hospitalIcon = new L.Icon({
  iconUrl: '/map.svg',  // Make sure this matches your icon file name
  iconSize: [32, 32],            // Size of the icon in pixels
  iconAnchor: [16, 32],          // Point of the icon which corresponds to marker's location
  popupAnchor: [0, -32],         // Point from which the popup should open relative to the iconAnchor
  shadowUrl: null,               // Remove shadow
});

export default function MapView() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/map-codinates.geojson')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        console.log('Loaded GeoJSON:', data); // Debug log
        setGeoData(data);
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  }, []);

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[33.6844, 73.0479]} // Islamabad
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render markers from GeoJSON */}
        {geoData &&
          geoData.features.map((feature, idx) => {
            const [lng, lat] = feature.geometry.coordinates;
            return (
              <Marker
                key={idx}
                position={[lat, lng]}
                icon={hospitalIcon}
              >
                <Popup>
                  {feature.properties?.name || 'No name'}
                </Popup>
              </Marker>
            );
          })}

        {/* Example static marker */}
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
