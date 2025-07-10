import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../config';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [signing, setSigning] = useState(false);
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();

    if (!user || !pass) {
      alert("Email and password are required.");
      return;
    }

    setSigning(true);

    createUserWithEmailAndPassword(auth, user, pass)
      .then((result) => {
        console.log("User signed up:", result.user);
        alert("Signed up successfully! Please log in.");
        navigate("/");
      })
      .catch((error) => {
        console.error("Signup error:", error.message);
        alert("Something went wrong, please try again later.");
      })
      .finally(() => {
        setSigning(false);
      });
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const email = data.user.email;
        setValue(email);
        localStorage.setItem("email", email);
        navigate("/home");
      })
      .catch((err) => {
        console.error("Google sign-in error:", err.message);
        alert("Google sign-in failed. Please try again.");
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);

  return (
    <>

      <div className="absolute top-10 left-10 z-10 ml-10 text-white">
        <h1 className="text-2xl lg:text-7xl font-bold courgette-text text-white animate-slide-in-left">EasyWed</h1>
        <p className="lg:text-xl font-semibold mt-4 ml-2 text-white">
          W E D D I N G - P L A N N E R
        </p>
      </div>


      <div className="h-screen w-screen overflow-hidden">
        <img
          src="./images/nav1 (1).jpg"
          alt="Signup Background"
          className="h-full w-full object-cover"
        />
      </div>


      <div className="absolute top-[420px] left-64 lg:left-[400px] transform -translate-x-1/2 -translate-y-1/2 
                      h-[450px] w-[350px] flex flex-col justify-center items-center gap-6 
                      bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-10 z-20">
        <h1 className="text-2xl font-bold text-pink-800">Sign Up</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />

        <input
          type="password"
          placeholder="Create your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />

        <button
          onClick={signupUser}
          disabled={signing}
          className="mt-4 px-6 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-800 disabled:opacity-60"
        >
          {signing ? "Signing up..." : "Sign Up"}
        </button>

        <button
          onClick={handleClick}
          disabled={signing}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 disabled:opacity-60"
        >
          Sign up with Google
        </button>

      
      </div>
    </>
  );
};

export default Signin;
