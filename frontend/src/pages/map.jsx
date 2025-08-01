// src/components/MapView.jsx
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const { BaseLayer } = LayersControl;

// Replace the default icon with custom hospital icon
const hospitalIcon = new L.Icon({
  iconUrl: '/map-pin.svg',  // Make sure this matches your icon file name
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
    <div className="leaflet-bottom leaflet-left">
      
      <div className="leaflet-control leaflet-bar">
        <button 
          onClick={getLocation}
          className="px-4 py-2 bg-[#6C0B14] text-white w-30 h-9 rounded-xl hover:bg-[#4d0000] bottom-11 absolute"
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

function VoiceNavigationControl({ isVoiceEnabled, setIsVoiceEnabled }) {
  return (
    <div className="leaflet-bottom leaflet-left">
      <div className="leaflet-control leaflet-bar m-4">
        <button 
          onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
          className={`px-4 py-2 ${
            isVoiceEnabled ? 'bg-green-600' : 'bg-[#6C0B14]'
          } text-white rounded-xl hover:opacity-90 flex items-center gap-2`}
        >
          {isVoiceEnabled ? (
            <>
              <span>🔊</span> Voice Active
            </>
          ) : (
            <>
              <span>🔇</span> Voice Off
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Update the RoutingControl component to respect voice settings
function RoutingControl({ from, to, isVoiceEnabled }) {
  const map = useMap();
  const spokenSteps = useRef(new Set()); // Track spoken instructions

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

    let intervalId;

    control.on('routesfound', (e) => {
      if (!isVoiceEnabled) return;

      const route = e.routes[0];
      const steps = route.instructions || route.segments?.flatMap(s => s.steps) || [];
      
      // Initial announcement of first instruction
      if (steps.length > 0 && !spokenSteps.current.has(steps[0].text)) {
        speakInstructions(steps[0].text || steps[0].instruction);
        spokenSteps.current.add(steps[0].text);
      }

      const checkStep = () => {
        if (!map || !steps || steps.length === 0) return;

        // Get current user position - you might want to use actual GPS position instead
        const userLatLng = map.getCenter();

        for (let step of steps) {
          if (!step.lat || !step.lng || spokenSteps.current.has(step.text)) continue;

          const stepLatLng = L.latLng(step.lat, step.lng);
          const distance = userLatLng.distanceTo(stepLatLng);

          // Announce instruction when within 50 meters of the step
          if (distance < 50) {
            speakInstructions(step.text || step.instruction);
            spokenSteps.current.add(step.text);
            break;
          }
        }
      };

      // Start checking position every 3 seconds
      intervalId = setInterval(checkStep, 3000);
    });

    // Cleanup function
    return () => {
      if (intervalId) clearInterval(intervalId);
      map.removeControl(control);
      spokenSteps.current.clear();
    };
  }, [from, to, map, isVoiceEnabled]);

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
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);

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
    <div className="relative w-[90%] max-w-7xl h-[85vh] rounded-lg shadow-xl border border-gray-300 bg-white overflow-hidden">
    <div className="h-full w-full">
      <MapContainer
        center={[33.6844, 73.0479]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          
          <BaseLayer name="Satellite View">
            <TileLayer
              attribution='&copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </BaseLayer>
          
          <BaseLayer name="Dark Mode">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
          </BaseLayer>
        </LayersControl>

        <LocationControl />
        <VoiceNavigationControl 
          isVoiceEnabled={isVoiceEnabled}
          setIsVoiceEnabled={setIsVoiceEnabled}
        />
        <ClickHandler setDestination={setDestination} />
        
        {userLocation && destination && (
          <RoutingControl 
            from={userLocation} 
            to={destination} 
            isVoiceEnabled={isVoiceEnabled}
          />
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
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-2">
            📍 Destination set
          </p>
          <button 
            onClick={() => setDestination(null)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
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
