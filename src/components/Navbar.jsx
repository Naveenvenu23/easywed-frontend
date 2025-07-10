import React, { useState } from 'react';
import { FaPhoneAlt, FaBars } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../config';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('Logged out successfully');
        navigate('/');
      })
      .catch(() => {
        console.log('Failed to logout');
      });
  };

  return (
    <>
      <div className="flex p-5 justify-around items-center">
        <div className="flex justify-around items-center text-sm lg:text-xl text-gray-700">
          <div>
            <p>Contact Us</p>
            <p>0987654321</p>
          </div>
          <div className="lg:text-xl text-green-500 ml-2">
            <FaPhoneAlt />
          </div>
        </div>

        <div>
          <img src="./images/logo.webp" alt="Logo" className="mt-5 w-40" />
        </div>

        <div className="text-sm lg:text-xl text-gray-700">
          <p>Your Cart: <span className="font-bold">{cartCount}</span></p>
        </div>

        <div
          className="lg:hidden text-2xl text-pink-900 ml-4 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      </div>

      <div
        className="courgette-text hidden lg:flex justify-center gap-16 items-center text-white text-lg h-[80px]"
        style={{ backgroundColor: '#CBB8A7' }}
      >
        <Link to="/home" className="animate-slide-in-left delay-100">Home</Link>
        <Link to="/about" className="animate-slide-in-left delay-150">About</Link>

      <div className="relative group cursor-pointer animate-slide-in-left z-50">
  <p className="group-hover:text-white">Categories</p>

  <div className="absolute top-[110%] left-0 hidden group-hover:flex flex-col bg-white text-pink-900 shadow-md rounded-md w-48 text-left p-2 z-50">
    <Link to="/category/Venue" className="px-4 py-2 hover:bg-pink-100">Venue</Link>
    <Link to="/category/Dress" className="px-4 py-2 hover:bg-pink-100">Dress</Link>
    <Link to="/category/Makeup" className="px-4 py-2 hover:bg-pink-100">Makeup</Link>
    <Link to="/category/Photography" className="px-4 py-2 hover:bg-pink-100">Photography</Link>
    <Link to="/category/Decoration" className="px-4 py-2 hover:bg-pink-100">Decoration</Link>
    <Link to="/category/Catering" className="px-4 py-2 hover:bg-pink-100">Catering</Link>
    <Link to="/category/Invitation" className="px-4 py-2 hover:bg-pink-100">Invitation</Link>
    <Link to="/category/Mehndi" className="px-4 py-2 hover:bg-pink-100">Mehndi</Link>
  </div>
</div>


        <Link to="/vendorslist" className="animate-slide-in-left delay-300">Vendors</Link>
        <Link to="/shop" className="animate-slide-in-left delay-400">Shop Now</Link>
        <Link to="/shoppackages" className="animate-slide-in-left delay-500">Packages</Link>
        <Link to="/gallery" className="animate-slide-in-left delay-600">Gallery</Link>
        <Link to="/contact" className="animate-slide-in-left delay-700">Contact</Link>

        <p
          onClick={logout}
          className="absolute top-[50px] right-[30px] border-2 text-white cursor-pointer hover:bg-[#bba38b] rounded-md bg-pink-900 p-2"
        >
          Log Out
        </p>

        <p
          onClick={logout}
          className="absolute top-[50px] right-[100px] border-2 text-white cursor-pointer hover:bg-[#bba38b] rounded-md bg-pink-900 p-2 lg:hidden"
        >
          <CiMenuBurger />
        </p>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 text-center ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        <div className="p-6 flex flex-col gap-6 text-lg text-pink-900">
          <div
            className="text-right text-black font-bold text-xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </div>
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <a href="#category" onClick={() => setMenuOpen(false)}>Categories</a>
          <Link to="/vendorslist" onClick={() => setMenuOpen(false)}>Vendors</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop Now</Link>
          <Link to="/shoppackages" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button onClick={logout} className="text-white font-semibold w-full bg-pink-900 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
