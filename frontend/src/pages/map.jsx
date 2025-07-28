// src/components/MapView.jsx
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// Replace the default icon with custom hospital icon
const hospitalIcon = new L.Icon({
  iconUrl: '/map.svg',  // Make sure this matches your icon file name
  iconSize: [32, 32],            // Size of the icon in pixels
  iconAnchor: [16, 32],          // Point of the icon which corresponds to marker's location
  popupAnchor: [0, -32],         // Point from which the popup should open relative to the iconAnchor
  shadowUrl: null,               // Remove shadow
});
function speakInstructions(instructions) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(instructions);
    utterance.lang = 'en-US'; // or 'ur-PK' if some text is in Urdu
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Speech synthesis not supported in this browser.");
  }
}


// Add user location icon
const userIcon = new L.Icon({
  iconUrl: '/nav.svg',  // Add a user location icon to your public folder
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

// Add LocationControl component
function LocationControl() {
  const map = useMap();
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const locationMarkerRef = useRef(null);

  const handleLocationFound = (e) => {
    const { lat, lng } = e.latlng;
    setUserLocation([lat, lng]);
    map.flyTo(e.latlng, 15);

    // Update or create the location marker
    if (locationMarkerRef.current) {
      locationMarkerRef.current.setLatLng(e.latlng);
    } else {
      locationMarkerRef.current = L.marker(e.latlng, { icon: userIcon }).addTo(map);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      map.locate({ setView: false, watch: true }); // Set watch: true for continuous updates
      map.on('locationfound', handleLocationFound);
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (locationMarkerRef.current) {
        locationMarkerRef.current.remove();
      }
      map.off('locationfound', handleLocationFound);
    };
  }, [map]);

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar">
        <button 
          onClick={getLocation}
          className="px-4 py-2 bg-[#6C0B14] text-white w-30 h-9 rounded-xl hover:bg-[#4d0000]"
          // style={{ margin: '10px' }}
        >
         My Location
        </button>
      </div>
      {error && (
        <div className="leaflet-control">
          <p className="bg-red-100 text-red-700 p-2 rounded">{error}</p>
        </div>
      )}
    </div>
  );
}

function RoutingControl({ from, to }) {
  const map = useMap();

  useEffect(() => {
  if (!from || !to) return;

  const control = L.Routing.control({
    waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
    router: L.Routing.osrmv1({
      serviceUrl: 'https://router.project-osrm.org/route/v1',
    }),
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    createMarker: () => null,
  }).addTo(map);

  control.on('routesfound', (e) => {
    const instructions = e.routes[0].instructions || e.routes[0].segments?.flatMap(s => s.steps) || [];

    const stepTexts = instructions.map((instr, i) => {
      if (typeof instr === 'string') return instr; // fallback
      return instr.instruction || instr.text;
    });

    const fullText = stepTexts.join('. ');
    speakInstructions(fullText); // 👈 speak here
  });

  return () => map.removeControl(control);
}, [from, to, map]);


  return null;
}

function ClickHandler({ setDestination }) {
  useMapEvents({
    click(e) {
      setDestination([e.latlng.lat, e.latlng.lng]);
    }
  });
  return null;
}

export default function MapView() {
  const [geoData, setGeoData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setUserLocation([33.6844, 73.0479]); // Fallback to Islamabad
      }
    );
  }, []);

  return (
     <div className="h-screen w-full flex items-center justify-center bg-gray-100">
    <div className="relative w-[85%] max-w-7xl h-[80vh] rounded-lg shadow-xl border border-gray-300 bg-white overflow-hidden">
    <div className="h-screen w-full">
      <MapContainer
        center={[33.6844, 73.0479]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <LocationControl />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickHandler setDestination={setDestination} />
        {userLocation && destination && (
          <RoutingControl from={userLocation} to={destination} />
        )}

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
      {destination && (
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
          <p>Click anywhere on map to set destination</p>
          <button 
            onClick={() => setDestination(null)}
            className="px-2 py-1 bg-red-500 text-white rounded mt-2"
          >
            Clear Route
          </button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}
