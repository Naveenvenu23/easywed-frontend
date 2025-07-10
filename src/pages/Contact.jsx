import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
 
      await axios.post('http://localhost:3000/send', formData);
      alert('Message sent successfully!');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-[#333] mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 bg-white shadow-md p-8 rounded-xl">
     
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-pink-900 text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>+91-0987654321</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-pink-900 text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>wedding@easywed.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-pink-900 text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p>123 Royal Street, Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>

        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-9876543210"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Service Interested In</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">-- Select --</option>
              <option>Venue Booking</option>
              <option>Bridal Makeup</option>
              <option>Photography</option>
              <option>Catering</option>
              <option>Decoration</option>
              <option>Invitation Design</option>
              <option>Mehndi Artist</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-900 text-white px-6 py-2 rounded-md hover:bg-[#9f775d] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
