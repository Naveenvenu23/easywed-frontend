import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmed = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Booking Confirmed!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Thank you for booking with us. We’ve received your request and will contact you shortly.
      </p>
      <button
        onClick={handleBackHome}
        className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default BookingConfirmed;
