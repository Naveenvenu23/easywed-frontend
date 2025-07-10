import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Shop = ({ cartCount, setCartCount }) => {
  const handleAdd = () => {
    setCartCount(cartCount + 1);
  };

  const navigate = useNavigate();
  const handleBook = (item) => {
    navigate("/bookingsystem", { state: item })
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-pink-800">Wedding Packages</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/5865128/pexels-photo-5865128.jpeg" alt="Stage Decoration" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Stage Decoration</h2>
          <p className="text-gray-600 text-sm">Beautiful stage setup with floral backdrop.</p>
          <p className="text-pink-700 font-bold mt-1">₹15,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Stage Decoration", price: "₹15,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>


        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg" alt="Wedding Chairs" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Wedding Chairs</h2>
          <p className="text-gray-600 text-sm">Elegant golden chairs with ribbon decor.</p>
          <p className="text-pink-700 font-bold mt-1">₹7,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Wedding Chairs", price: "₹7,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>

      
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg" alt="Floral Arch" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Floral Arch</h2>
          <p className="text-gray-600 text-sm">Grand entry arch with colorful flowers.</p>
          <p className="text-pink-700 font-bold mt-1">₹9,500</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Floral Arch", price: "₹9,500" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>

       
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg" alt="Reception Lights" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Reception Lights</h2>
          <p className="text-gray-600 text-sm">Decorative lighting for wedding halls.</p>
          <p className="text-pink-700 font-bold mt-1">₹6,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Reception Lights", price: "₹6,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>

   
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/2959198/pexels-photo-2959198.jpeg" alt="Entrance Decor" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Entrance Decor</h2>
          <p className="text-gray-600 text-sm">Traditional flower and lamp entrance.</p>
          <p className="text-pink-700 font-bold mt-1">₹8,000</p>
          <button className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Entrance Decor", price: "₹8,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>


        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg" alt="Mandap Setup" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Mandap Setup</h2>
          <p className="text-gray-600 text-sm">Traditional mandap with gold drapes.</p>
          <p className="text-pink-700 font-bold mt-1">₹25,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Mandap Setup", price: "₹25,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>


        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg" alt="Wedding Carpet" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Wedding Carpet</h2>
          <p className="text-gray-600 text-sm">Red carpet for aisle and stage entry.</p>
          <p className="text-pink-700 font-bold mt-1">₹3,500</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Wedding Carpet", price: "₹3,500" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>


        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg" alt="Hanging Lights" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Hanging Lights</h2>
          <p className="text-gray-600 text-sm">Romantic golden lights for ceiling decor.</p>
          <p className="text-pink-700 font-bold mt-1">₹5,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Hanging Lights", price: "₹5,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>

     
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg" alt="Welcome Board" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Welcome Board</h2>
          <p className="text-gray-600 text-sm">Customizable floral welcome signage.</p>
          <p className="text-pink-700 font-bold mt-1">₹2,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Welcome Board", price: "₹2,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>


        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.pexels.com/photos/2739207/pexels-photo-2739207.jpeg" alt="Couple Sofa" className="h-48 w-full object-cover rounded mb-2" />
          <h2 className="text-lg font-semibold">Couple Sofa</h2>
          <p className="text-gray-600 text-sm">Royal designer sofa for couple stage.</p>
          <p className="text-pink-700 font-bold mt-1">₹12,000</p>
          <button onClick={handleAdd} className="bg-[#A2AC6F] text-white px-5 py-2 rounded hover:bg-[#646943] mt-5">Add to cart</button><br />
          <button onClick={() => handleBook({ name: "Couple Sofa", price: "₹12,000" })} className="bg-pink-700 text-white px-5 py-2 rounded hover:bg-pink-800 mt-5">Buy Now</button>
        </div>

      </div>
    </div>
  );
};

export default Shop;
