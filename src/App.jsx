import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import CategoryItems from './pages/CategoryItems';
import Contact from './pages/Contact';
import VendorsList from './pages/VendorsList';
import ShopPackages from './pages/ShopPackages';

import BookingSystem from './pages/BookingSystem';
import GalleryPortfolio from './pages/GalleryPortfolio';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import About from './pages/About';
import BookingConfirmed from "./pages/BookingConfirmed";


function AppRoutes({ cartCount, setCartCount }) {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/signin','/bookingconfirmed'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && (
        <Navbar cartCount={cartCount} />
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:category" element={<CategoryItems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vendorslist" element={<VendorsList />} />
        <Route path="/shoppackages" element={<ShopPackages />} />
        
        <Route path="/bookingsystem" element={<BookingSystem />} />
        <Route path="/gallery" element={<GalleryPortfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop cartCount={cartCount} setCartCount={setCartCount} />} />
        <Route path="/bookingconfirmed" element={<BookingConfirmed />} />
      

      </Routes>
    </>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <AppRoutes cartCount={cartCount} setCartCount={setCartCount} />
    </BrowserRouter>
  );
}

export default App;
