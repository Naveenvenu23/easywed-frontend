import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryItems = () => {
  const { category } = useParams();         
  const navigate = useNavigate();          
  const [items, setItems] = useState([]);   
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    axios.get(`http://localhost:3000/items/${category}`)
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching category items:", err);
        setLoading(false);
      });
  }, [category]);

  const handleBook = (item) => {
    navigate("/bookingsystem", { state: item });
  };

  if (loading) {
    return <div className="text-center mt-32 text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-pink-800">
        {category} Packages
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-pink-700 font-bold mt-2">₹{item.price}</p>
              <button
                onClick={() => handleBook(item)}
                className="mt-4 w-full bg-pink-800 text-white py-2 rounded hover:bg-pink-700"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItems;
