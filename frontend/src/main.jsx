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

import WebsiteLayout from './layouts/WebsiteLayout.jsx';
import AppLayout from './layouts/AppLayout.jsx';

import Home from './pages/home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/contact.jsx';
import Login from './pages/login.jsx';
import Registration from './pages/registration.jsx';
import PremiumHome from './pages/PremiumHome.jsx';
import EmergencyContacts from './pages/EmergnencyContacts.jsx';
import UploadReport from './pages/upload.jsx';
import Alert from './pages/alert.jsx';
import MapView from './pages/map.jsx';

// ✅ Define routes with clean hierarchy
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🌐 Public Website Layout */}
      <Route element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Route>

      {/* 🔐 Authenticated App Layout */}
      <Route element={<AppLayout />}>
        <Route path="premium" element={<PremiumHome />} />
        <Route path="emergency-patient" element={<EmergencyContacts />} />
        <Route path="upload-report" element={<UploadReport />} />
        <Route path="alert" element={<Alert />} />
        <Route path="map" element={<MapView />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
