import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const VendorsList = () => {
  const navigate = useNavigate();

  const handleBook = (item) => {
    navigate("/bookingsystem", { state: item });
  };

  const vendors = [
    {
      name: "Bass Beats DJ",
      city: "Chennai",
      category: "DJ",
      price: 15000,
      availability: "Available",
      image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
      rating: 4.7,
    },
    {
      name: "Royal Catering",
      city: "Coimbatore",
      category: "Catering",
      price: 28000,
      availability: "Unavailable",
      image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg",
      rating: 4.3,
    },
    {
      name: "Glam Bride Studio",
      city: "Bangalore",
      category: "Makeup",
      price: 18000,
      availability: "Available",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 4.8,
    },
    {
      name: "Candid Clicks",
      city: "Chennai",
      category: "Photography",
      price: 35000,
      availability: "Available",
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
      rating: 4.9,
    },
    {
      name: "Henna Magic",
      city: "Chennai",
      category: "Mehndi",
      price: 6000,
      availability: "Available",
      image: "https://images.pexels.com/photos/2406248/pexels-photo-2406248.jpeg",
      rating: 4.5,
    },
    {
      name: "Rose Garden Hall",
      city: "Bangalore",
      category: "Venue",
      price: 50000,
      availability: "Available",
      image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
      rating: 4.6,
    },
    {
      name: "Shaadi Experts",
      city: "Coimbatore",
      category: "Wedding Planner",
      price: 40000,
      availability: "Available",
      image: "https://images.pexels.com/photos/2567376/pexels-photo-2567376.jpeg",
      rating: 5.0,
    },
    {
      name: "Elegant Events",
      city: "Chennai",
      category: "Wedding Planner",
      price: 38000,
      availability: "Available",
      image: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
      rating: 4.6,
    },
    {
      name: "The Mehndi Art",
      city: "Bangalore",
      category: "Mehndi",
      price: 7500,
      availability: "Available",
      image: "https://images.pexels.com/photos/14050784/pexels-photo-14050784.jpeg",
      rating: 4.4,
    },
    {
      name: "Regal Banquet Hall",
      city: "Coimbatore",
      category: "Venue",
      price: 45000,
      availability: "Available",
      image: "https://images.pexels.com/photos/1250283/pexels-photo-1250283.jpeg",
      rating: 4.9,
    },
  ];

  const [filters, setFilters] = useState({
    city: "All Cities",
    category: "All Categories",
    price: "Any Price",
    availability: "Availability",
  });

  const filteredVendors = vendors.filter((vendor) => {
    return (
      (filters.city === "All Cities" || vendor.city === filters.city) &&
      (filters.category === "All Categories" || vendor.category === filters.category) &&
      (filters.availability === "Availability" || vendor.availability === filters.availability) &&
      (filters.price === "Any Price" ||
        (filters.price === "Under ₹20,000" && vendor.price <= 20000) ||
        (filters.price === "Under ₹30,000" && vendor.price <= 30000))
    );
  });

  return (
    <div className="min-h-screen bg-[#fdfaf6] p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center text-pink-900 mb-10">
        Explore Verified Wedding Vendors
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <select className="border p-2" value={filters.city} onChange={(e) => setFilters({ ...filters, city: e.target.value })}>
          <option>All Cities</option>
          <option>Chennai</option>
          <option>Coimbatore</option>
          <option>Bangalore</option>
        </select>

        <select className="border p-2" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option>All Categories</option>
          <option>DJ</option>
          <option>Catering</option>
          <option>Makeup</option>
          <option>Photography</option>
          <option>Mehndi</option>
          <option>Venue</option>
          <option>Wedding Planner</option>
        </select>

        <select className="border p-2" value={filters.price} onChange={(e) => setFilters({ ...filters, price: e.target.value })}>
          <option>Any Price</option>
          <option>Under ₹20,000</option>
          <option>Under ₹30,000</option>
        </select>

        <select className="border p-2" value={filters.availability} onChange={(e) => setFilters({ ...filters, availability: e.target.value })}>
          <option>Availability</option>
          <option>Available</option>
          <option>Unavailable</option>
        </select>
      </div>

      {/* Vendor Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVendors.map((vendor, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-1">
              <h2 className="text-xl font-bold text-[#6b4226]">{vendor.name}</h2>
              <p className="text-sm text-gray-500">{vendor.category}</p>
              <p className="flex items-center text-gray-600 gap-1"><FaMapMarkerAlt /> {vendor.city}</p>
              <p className="flex items-center text-gray-600 gap-1"><FaStar className="text-yellow-400" /> {vendor.rating} rating</p>
              <p className="flex items-center text-gray-600 gap-1"><FaRupeeSign /> {vendor.price.toLocaleString()}</p>
              <p className={`text-sm font-semibold ${vendor.availability === "Available" ? "text-green-600" : "text-red-500"}`}>{vendor.availability}</p>
              <button
                onClick={() => handleBook({ name: vendor.name, price: `₹${vendor.price.toLocaleString()}` })}
                className={`mt-2 px-4 py-2 rounded text-white ${vendor.availability === "Available" ? "bg-pink-900 hover:bg-pink-800" : "bg-gray-400 cursor-not-allowed"}`}
                disabled={vendor.availability !== "Available"}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorsList;
