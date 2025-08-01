// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'leaflet/dist/leaflet.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RouterProvider } from 'react-router';

import Root from './Root.jsx';
import Home from './pages/home.jsx';
import PremiumHome from './pages/PremiumHome.jsx';
import MapView from './pages/map.jsx';
import AboutUs from './pages/AboutUs.jsx';
import EmergencyContacts from './pages/EmergnencyContacts.jsx';
import Login from './pages/login.jsx';
import Registration from './pages/registration.jsx';
import UploadReport from './pages/Upload.jsx'; 
import Alert from './pages/alert.jsx';
import ContactUs from './pages/contact.jsx';
import PremiumDashboard from './pages/Prohome.jsx';

// Add this import
import { AuthProvider } from '@/context/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="premium" element={<PremiumHome />} />
      <Route path="pro" element={<PremiumDashboard />} />
      <Route path="emergency-patient" element={<EmergencyContacts />} />
      <Route path="map" element={<MapView />} />
      <Route path="upload-report" element={<UploadReport />} /> 
      <Route path="alert" element={<Alert />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="register" element={<Registration />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);