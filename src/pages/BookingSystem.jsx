import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSystem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, price } = location.state || {};

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setUserName('');
    setEmail('');
    setEventDate('');
    setLocationInput('');
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!userName || !email || !eventDate || !locationInput || !name || !price) {
      alert(' Please fill all required fields!');
      return;
    }

    const bookingData = {
      userName,
      email,
      eventDate,
      location: locationInput,
      packageName: name,
      price
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unknown error');
      }

      navigate('/bookingconfirmed');
    } catch (err) {
      console.error('Booking error');
      alert(' Something went wrong: ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] p-8 md:p-16 font-sans">
      <h2 className="text-4xl font-bold mb-6 text-center text-pink-900">Booking Your Event</h2>

      <form onSubmit={handleBooking} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label className="mb-1 font-medium">Your Name <span className='text-red-500'>*</span></label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="mb-1 font-medium">Email <span className='text-red-500'>*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="mb-1 font-medium flex items-center gap-2">
            <FaCalendarAlt /> Date of Event <span className='text-red-500'>*</span>
          </label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="mb-1 font-medium">Selected Package <span className='text-red-500'>*</span></label>
          <input
            type="text"
            value={name || ''}
            disabled
            className="w-full border border-gray-300 rounded p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="mb-1 font-medium">Price <span className='text-red-500'>*</span></label>
          <input
            type="text"
            value={price || ''}
            disabled
            className="w-full border border-gray-300 rounded p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="mb-1 font-medium">Location <span className='text-red-500'>*</span></label>
          <input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="City or venue"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-900 text-white py-3 rounded hover:bg-[#9f775d] transition"
          >
            {loading ? 'Booking...' : 'Book'}
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="w-full bg-gray-300 text-gray-800 py-3 rounded hover:bg-gray-400 transition"
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingSystem;
