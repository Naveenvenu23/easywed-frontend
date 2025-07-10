import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative">

      <img
        src="./images/about2.jpg"
        alt="About Background"
        className="w-full h-screen object-cover"
      />


      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-start pl-20 pr-20 text-white">
        <h1 className="text-5xl font-bold courgette-text mb-6">About EasyWed</h1>
        
        <p className="text-lg max-w-3xl leading-8 mb-6">
          EasyWed is your one-stop solution for complete wedding planning in India. Whether you're looking for a grand traditional ceremony or a simple, elegant function, we have the expertise to make it happen.
        </p>

        <p className="text-lg max-w-3xl leading-8 mb-6">
          From selecting the perfect venue and managing guest lists to arranging makeup artists, photographers, decorations, catering, mehndi, and wedding attire — we handle it all. Our professional team works closely with you to understand your vision and turn it into reality with a personal touch.
        </p>

        <p className="text-lg max-w-3xl leading-8 mb-6">
          With years of experience and a passion for weddings, we ensure your special day is stress-free, stylish, and unforgettable. Every couple is unique — and we believe your wedding should reflect your love story in the most beautiful way.
        </p>

        <p className="text-lg max-w-3xl leading-8 mb-6">
          Join hands with EasyWed and let us make your wedding not just perfect, but magical.
        </p>
        
        <Link to='/contact'>
        <button className="mt-6 px-8 py-3 bg-pink-800 hover:bg-white text-white hover:text-pink-800 font-semibold rounded-md transition duration-300">
          Make a coversation
        </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
