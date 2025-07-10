import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopPackages = () => {
  const navigate = useNavigate();

  const handleBook = (item) => {
    navigate("/bookingsystem", { state: item });
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] p-8 md:p-16 font-sans">
      <h2 className="text-4xl font-bold mb-6 text-center text-pink-900">Shop Packages</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Golden Package</h3>
          <p className="mb-3">Includes: Venue + Dress + Makeup</p>
          <p className="text-xl font-bold mb-2">Price: ₹75,000</p>
          <p className="text-green-700 font-semibold">Seasonal Discount: 10% OFF</p>
          <button
            onClick={() => handleBook({ name: "Golden Package", price: "₹75,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Royal Package</h3>
          <p className="mb-3">All-in-one: Venue, Dress, Makeup, Catering, Photography & More</p>
          <p className="text-xl font-bold mb-2">Price: ₹1,50,000</p>
          <p className="text-green-700 font-semibold">Special Offer: ₹15,000 OFF</p>
          <button
            onClick={() => handleBook({ name: "Royal Package", price: "₹1,50,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Venue & Decoration</h3>
          <p className="mb-3">Romantic wedding venue setup with floral decor and lighting</p>
          <p className="text-xl font-bold mb-2">Price: ₹50,000</p>
          <p className="text-green-700 font-semibold">Complimentary arch decor</p>
          <button
            onClick={() => handleBook({ name: "Venue & Decoration", price: "₹50,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Bridal Elegance</h3>
          <p className="mb-3">Includes premium Bridal Dress, Makeup, and Mehndi</p>
          <p className="text-xl font-bold mb-2">Price: ₹40,000</p>
          <p className="text-green-700 font-semibold">Free bridal hair styling</p>
          <button
            onClick={() => handleBook({ name: "Bridal Elegance", price: "₹40,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Photo Memories</h3>
          <p className="mb-3">Photography + Candid + Pre-wedding shoot</p>
          <p className="text-xl font-bold mb-2">Price: ₹55,000</p>
          <p className="text-green-700 font-semibold">Free wedding album (20 pages)</p>
          <button
            onClick={() => handleBook({ name: "Photo Memories", price: "₹55,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Feast Delight</h3>
          <p className="mb-3">Premium Catering + Custom Menu + Servers</p>
          <p className="text-xl font-bold mb-2">Price: ₹60,000</p>
          <p className="text-green-700 font-semibold">Free dessert counter</p>
          <button
            onClick={() => handleBook({ name: "Feast Delight", price: "₹60,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Invitation & Welcome Kit</h3>
          <p className="mb-3">Custom Invitations + Guest Welcome Boxes</p>
          <p className="text-xl font-bold mb-2">Price: ₹15,000</p>
          <p className="text-green-700 font-semibold">Includes free delivery</p>
          <button
            onClick={() => handleBook({ name: "Invitation & Welcome Kit", price: "₹15,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-2xl font-semibold mb-3">Mehndi Celebration</h3>
          <p className="mb-3">Bridal + Guest Mehndi artists with decor setup</p>
          <p className="text-xl font-bold mb-2">Price: ₹25,000</p>
          <p className="text-green-700 font-semibold">Free flower jewelry</p>
          <button
            onClick={() => handleBook({ name: "Mehndi Celebration", price: "₹25,000" })}
            className="mt-4 bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-800"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShopPackages;
