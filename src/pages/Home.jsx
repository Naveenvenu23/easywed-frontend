import React, { useState, useEffect, useRef } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  function logout() {
    signOut(auth)
      .then(() => {
        console.log("Logged out successfully!");
        navigate("/");
      })
      .catch(() => {
        console.log("Failed to logout, try again later...");
      });
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await axios.post("https://easywed-backend.onrender.com/send", form);
      alert("Message sent successfully!");
    } catch (err) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    axios.get("https://easywed-backend.onrender.com/categories")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>

      <section>
        <div className="relative h-[550px] w-full">
          <img src="./images/nav1 (4).jpg" className="w-full h-full object-cover" alt="Wedding" />
          <div className="absolute top-[300px] left-1/2 -translate-x-1/2 text-center">
            <p className="text-xl lg:text-5xl md:text-7xl courgette-text text-white animate-slide-in-right">We'll make your wedding perfect</p>
            <img src="./images/underline.webp" className="mx-auto mt-4 w-[220px] animate-slide-in-right" alt="Underline" />
          </div>
        </div>
      </section>


      <div className=" h-[100px] bg-[#A2AC6F] flex justify-center items-center gap-5 px-10 text-white">
        <p className="animate-pulse lg:text-xl font-semibold">ORDER Full Package Plan & Get -25% discount!</p>
        <Link to="/shoppackages">
        <div className= "text-white border-2 p-3 hover:text-[#A2AC6F] hover:bg-white font-bold cursor-pointer">
          View offers
        </div>
        </Link>
      </div>

      <section className='flex justify-center items-center gap-4 sm:gap-12 mt-16 sm:mt-32 overflow-x-auto px-3'>
        <img src='./images/wed (2).jpg' className='h-40 sm:h-80 rounded' />
        <img src='./images/wed (1).jpg' className='h-40 sm:h-80 rounded' />
        <img src='./images/wed (3).jpg' className='h-40 sm:h-80 rounded' />
      </section>


      <div className="flex flex-col justify-center items-center mt-32">
        <p className="text-4xl courgette-text ">Let's Plan Your Perfect Wedding</p>
        <p className="mt-5 text-pink-700 font-semibold">W E L C O M E</p>
      </div>


      <section className="w-full overflow-x-auto mt-32 relative">
        <button
          onClick={() => scroll('left')}
          className='h-[50px] w-[50px] bg-gray-400 rounded-full flex justify-center items-center 
absolute top-36 left-11 z-10
'>
          <FaArrowLeft />
        </button>

        <div ref={scrollRef} className="flex flex-nowrap gap-10 px-10  scroll-smoth overflow-x-hidden">

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="./images/0 (1).jpg" className="h-80 w-64 rounded-md shadow-lg hover:opacity-80 object-cover" alt="Bouquets & Style" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">Bouquets & Style</p>
            <Link to="/category/Venue">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHYviqDH4IWrlwTIYbBWwzwhQ9tHwiiDP3g&s" className="h-80 w-64 rounded-md shadow-lg hover:opacity-80 object-cover" alt="Wedding Planning" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">Traditional</p>
            <Link to="/category/Venue">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="./images/0 (3).jpg" className="h-80 w-64 rounded-md shadow-lg hover:opacity-80" alt="Catering & Decoration" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">DJ & music</p>
            <Link to="/category/Decoration">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTk2jWcQOFyMbfpjfaj5LF5N0zcfV5jaIYkQ&s" className=" h-80 w-64 rounded-md shadow-lg hover:opacity-80 object-cover" alt="Wedding Planning" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">Wedding Planning</p>
            <Link to="/category/Venue">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LxcJqhN9kQITIYgvrLiudZYT1Mhq4BBH6g&s" className="h-80 w-64 rounded-md shadow-lg hover:opacity-80 object-cover" alt="Catering & Decoration" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">London Wedding Dress</p>
            <Link to="/category/Decoration">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxT5j0yXL_51TxtstuUyT3mfwN-x6kTguJg&s" className="h-80 w-64 rounded-md shadow-lg hover:opacity-80 object-cover" alt="Wedding Planning" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">Jwellery</p>
            <Link to="/category/Venue">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>

          <div className="flex flex-col items-center min-w-[280px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZEEJGRoVAuw4Bbjt8PA4RSh8CcmGZa5mQA&s" className="h-80 w-64 rounded-md shadow-lg hover:opacity-80 object-cover" alt="Wedding Planning" />
            <p className="mt-5 font-semibold text-lg text-gray-600 courgette-text">Fire Works</p>
            <Link to="/category/Decoration">
              <button className="mt-5 bg-pink-900 text-white px-5 py-2 hover:bg-[#bba38b]">Shop Now</button>
            </Link>
          </div>


        </div>
        <button
          onClick={() => scroll('right')}
          className='h-[50px] w-[50px] bg-gray-400 rounded-full flex justify-center items-center
 absolute top-36 left-[400px] lg:left-[1450px] z-100
 '>
          <FaArrowRight />

        </button>

      </section>


      <section className="mt-36 relative">
        <img src="./images/about2.jpg" className="w-full h-[800px] object-cover" alt="background" />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-20 bg-black/20">
          <div className="text-white max-w-xl flex flex-col gap-8">
            <p className="text-xl font-semibold text-pink-900">A B O U T &nbsp; U S</p>

            <p className="text-2xl lg:text-4xl font-semibold courgette-text">
              We Plan & Design Weddings<br />That Stay in Your Heart Forever
            </p>

            <p className="leading-relaxed lg:text-lg">
              A wedding is a special moment in everyone's life. Every couple dreams of a beautiful,
              stress-free celebration. Our expert team helps you choose the perfect venue, decor, outfits,
              and more — making your big day smooth and memorable.
            </p>

            <Link to="/about">
              <button className="w-48 h-12 bg-pink-800 hover:bg-white text-white hover:text-pink-800 font-semibold rounded-md">
                MORE ABOUT US
              </button>
            </Link>
          </div>
        </div>
      </section>



      <section className='mt-36 px-4 sm:px-6 lg:px-10'>
        <div className="text-center">
          <p className="text-3xl sm:text-4xl courgette-text">Shop Our Latest Styles</p>
          <p className="mt-3 sm:mt-5 text-pink-700 font-semibold text-lg sm:text-xl">C A T E G O R I E S</p>
          <img src='./images/underline.webp' className='mx-auto w-32 sm:w-40' alt="underline" />
        </div>

        <div id='category' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 text-center'>

          <Link to="/category/Venue">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/cat (1).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Venue" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Venue
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Dress">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/cat.jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Dress" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Dress
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Makeup">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/cat (2).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Makeup" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Makeup
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Photography">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/cat (4).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Photography" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Photography
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Decoration">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/shop (1).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Decoration" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Decoration
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Catering">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/wed1 (2).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Catering" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Catering
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Invitation">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/cat (7).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Invitation" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Invitation
                </p>
              </div>
            </div>
          </Link>

          <Link to="/category/Mehndi">
            <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative w-full max-w-xs">
                <img src="./images/cat (6).jpg" className="w-full h-64 sm:h-72 object-cover rounded-md shadow-lg" alt="Mehndi" />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-semibold courgette-text text-pink-900 bg-white/70 px-2 py-1 rounded">
                  Mehndi
                </p>
              </div>
            </div>
          </Link>

        </div>
      </section>




      <section className="relative mt-36">
        <img src="./images/foot.jpg" className="w-full h-[800px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8 bg-black/20">
          <p className="text-xl lg:text-5xl font-semibold courgette-text text-white text-center">
            Let Us Make Your Wedding Flawless
          </p>
          <button className="w-48 h-10 lg:w-60 lg:h-20 lg:text-xl font-semibold bg-pink-800 hover:bg-white text-white hover:text-pink-800 rounded-md">
            SEND REQUEST
          </button>
        </div>
      </section>


      <section>
        <div className="text-center mt-32">
          <p className="text-4xl courgette-text">Give Us a Feedback</p>
          <p className="mt-5 text-pink-700 font-semibold">C O N T A C T</p>
        </div>

        <div className="relative">
          <img src="./images/feed.jpg" className="w-full h-[800px] object-cover" />
          <div className="absolute top-0 lg:left-[100px] w-full h-full flex justify-start items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 p-10 mb-36  rounded-lg w-[500px] ">
              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Name"
                required
                className="p-3 border border-gray-300 rounded "
              />
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email"
                required
                className="p-3 border border-gray-300 rounded"
              />
              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Message"
                required
                rows="5"
                className="p-3 border border-gray-300 rounded resize-none"
              />
              <button
                type="submit"
                className="w-full h-12 text-lg font-semibold text-white bg-[#FF536C] hover:bg-[#536518] rounded"
              >
                {loading ? "Sending..." : "SEND FEEDBACK"}

              </button>
            </form>
          </div>
        </div>
      </section>

      
      <footer>
        <div className='lg:flex justify-center gap-14 items-center h-48 w-[70%] ml-28 lg:ml-56 mt-40'>
          <div>
            <h1 className='lg:text-2xl courgette-text text-pink-900 underline'>Address</h1>
            <p>123 Royal Street, Chennai, Tamil Nadu</p>
          </div>
          <div>
            <h1 className='lg:text-2xl courgette-text text-pink-900 underline'>Contact</h1>
            <p>0987654321</p>
          </div>
          <div>
            <h1 className='lg:text-2xl courgette-text text-pink-900 underline'>E-mail</h1>
            <p>easywed@gmail.com</p>
          </div>
        </div>


        <div className="flex justify-center ">
          <Link
            to="/contact"
            className="bg-pink-700 text-white px-6 py-2 rounded-full shadow hover:bg-pink-800 transition"
          >
         Contact us
          </Link>
        </div>

        <div className='text-center mt-14 flex items-center justify-center ml-16 lg:ml-56 h-16 w-[70%] border-t-2 border-pink-900'>
          <p>Easywed © 2025 All Rights Reserved Terms of Use and Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
