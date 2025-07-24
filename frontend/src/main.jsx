import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'leaflet/dist/leaflet.css';

import { createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import Root from './Root.jsx'
import Home from './pages/Home.jsx';
import PremiumHome from './pages/PremiumHome.jsx';
import MapView from './pages/map.jsx';




 const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="" element={<Home/>} />
    
    <Route path="/premium" element={<PremiumHome/>} />
    <Route path="/map" element={<MapView/>} />
    
    </Route>
  )
 )

createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
  
</React.StrictMode>

)
