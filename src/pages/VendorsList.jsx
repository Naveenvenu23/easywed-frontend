import React from 'react';
import { FaStar, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const VendorsList = () => {
  const navigate = useNavigate();

  const handleBook = (item) => {
    navigate("/bookingsystem", { state: item });
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center text-pink-900 mb-10">
        Explore Verified Wedding Vendors
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <select className="border border-gray-300 rounded-md p-2">
          <option>All Cities</option>
          <option>Chennai</option>
          <option>Coimbatore</option>
          <option>Bangalore</option>
        </select>
        <select className="border border-gray-300 rounded-md p-2">
          <option>All Categories</option>
          <option>DJ</option>
          <option>Catering</option>
          <option>Makeup</option>
          <option>Photography</option>
          <option>Mehndi</option>
        </select>
        <select className="border border-gray-300 rounded-md p-2">
          <option>Any Price</option>
          <option>Under ₹20,000</option>
          <option>Under ₹30,000</option>
        </select>
        <select className="border border-gray-300 rounded-md p-2">
          <option>Availability</option>
          <option>Available</option>
          <option>Unavailable</option>
        </select>
      </div>

    
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg" alt="Bass Beats DJ" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Bass Beats DJ</h2>
            <p className="text-sm text-gray-500">DJ</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Chennai</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.7 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 15,000</p>
            <p className="text-sm font-semibold text-green-600">Available</p>
            <button onClick={() => handleBook({ name: "Bass Beats DJ", price: "₹15,000" })} className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800">Book Now</button>
          </div>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg" alt="Royal Catering" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Royal Catering</h2>
            <p className="text-sm text-gray-500">Catering</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Coimbatore</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.3 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 28,000</p>
            <p className="text-sm font-semibold text-red-500">Unavailable</p>
            <button className="mt-2 bg-pink-900 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed" disabled>Book Now</button>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Glam Bride Studio" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Glam Bride Studio</h2>
            <p className="text-sm text-gray-500">Makeup Artist</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Bangalore</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.8 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 18,000</p>
            <p className="text-sm font-semibold text-green-600">Available</p>
            <button onClick={() => handleBook({ name: "Glam Bride Studio", price: "₹18,000" })} className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800">Book Now</button>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" alt="Candid Clicks" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Candid Clicks</h2>
            <p className="text-sm text-gray-500">Photographer</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Chennai</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.9 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 35,000</p>
            <p className="text-sm font-semibold text-green-600">Available</p>
            <button onClick={() => handleBook({ name: "Candid Clicks", price: "₹35,000" })} className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800">Book Now</button>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/2406248/pexels-photo-2406248.jpeg" alt="Henna Magic" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Henna Magic</h2>
            <p className="text-sm text-gray-500">Mehndi Artist</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Chennai</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.5 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 6,000</p>
            <p className="text-sm font-semibold text-green-600">Available</p>
            <button onClick={() => handleBook({ name: "Henna Magic", price: "₹6,000" })} className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800">Book Now</button>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg" alt="Rose Garden Hall" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Rose Garden Hall</h2>
            <p className="text-sm text-gray-500">Wedding Venue</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Bangalore</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.6 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 50,000</p>
            <p className="text-sm font-semibold text-green-600">Available</p>
            <button onClick={() => handleBook({ name: "Rose Garden Hall", price: "₹50,000" })} className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800">Book Now</button>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/2567376/pexels-photo-2567376.jpeg" alt="Shaadi Experts" className="w-full h-48 object-cover" />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-bold text-[#6b4226]">Shaadi Experts</h2>
            <p className="text-sm text-gray-500">Wedding Planner</p>
            <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Coimbatore</p>
            <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 5.0 rating</p>
            <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 40,000</p>
            <p className="text-sm font-semibold text-green-600">Available</p>
            <button onClick={() => handleBook({ name: "Shaadi Experts", price: "₹40,000" })} className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800">Book Now</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  <img
    src="https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg"
    alt="Elegant Events"
    className="w-full h-48 object-cover"
  />
  <div className="p-4 space-y-1">
    <h2 className="text-xl font-bold text-[#6b4226]">Elegant Events</h2>
    <p className="text-sm text-gray-500">Wedding Planner</p>
    <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Chennai</p>
    <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.6 rating</p>
    <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 38,000</p>
    <p className="text-sm font-semibold text-green-600">Available</p>
    <button
      onClick={() => handleBook({ name: "Elegant Events", price: "₹38,000" })}
      className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
    >
      Book Now
    </button>
  </div>
</div>

<div className="bg-white shadow-lg rounded-lg overflow-hidden">
  <img
    src="https://images.pexels.com/photos/14050784/pexels-photo-14050784.jpeg"
    alt="The Mehndi Art"
    className="w-full h-48 object-cover"
  />
  <div className="p-4 space-y-1">
    <h2 className="text-xl font-bold text-[#6b4226]">The Mehndi Art</h2>
    <p className="text-sm text-gray-500">Mehndi Artist</p>
    <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Bangalore</p>
    <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.4 rating</p>
    <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 7,500</p>
    <p className="text-sm font-semibold text-green-600">Available</p>
    <button
      onClick={() => handleBook({ name: "The Mehndi Art", price: "₹7,500" })}
      className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
    >
      Book Now
    </button>
  </div>
</div>


<div className="bg-white shadow-lg rounded-lg overflow-hidden">
  <img
    src="https://images.pexels.com/photos/1250283/pexels-photo-1250283.jpeg"
    alt="Regal Banquet Hall"
    className="w-full h-48 object-cover"
  />
  <div className="p-4 space-y-1">
    <h2 className="text-xl font-bold text-[#6b4226]">Regal Banquet Hall</h2>
    <p className="text-sm text-gray-500">Wedding Venue</p>
    <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> Coimbatore</p>
    <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> 4.9 rating</p>
    <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> 45,000</p>
    <p className="text-sm font-semibold text-green-600">Available</p>
    <button
      onClick={() => handleBook({ name: "Regal Banquet Hall", price: "₹45,000" })}
      className="mt-2 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
    >
      Book Now
    </button>
  </div>
</div>


      </div>
    </div>
  );
};

export default VendorsList;
