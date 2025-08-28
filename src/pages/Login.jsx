import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [logging, setLogging] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("Already logged in, redirecting...");
        navigate("/home");
      } else {
        console.log("Not logged in");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  function loginuser() {
    if (!user || !pass) {
      alert("Email and password are required.");
      return;
    }

    setLogging(true);
    signInWithEmailAndPassword(auth, user, pass)
      .then(() => {
        console.log("Logged in successfully");
        navigate("/home");
      })
      .catch(() => {
        console.log("Login failed");
        alert("Login failed. Invalid email or password.");
      })
      .finally(() => {
        setLogging(false);
      });
  }

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
          alt="Login Background"
          className="h-full w-full object-cover"
        />
      </div>

    
      <div className="absolute top-[420px] left-64 lg:left-[400px] transform -translate-x-1/2 -translate-y-1/2 
                      h-[450px] w-[350px] flex flex-col justify-center items-center gap-6 
                      bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-10 z-20">
        <h1 className="text-2xl font-bold text-pink-800">Log In</h1>

        <input
          type="email"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />

        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter your 6 character password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />

        <button
          onClick={loginuser}
          disabled={logging}
          className="mt-4 px-6 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-800 disabled:opacity-60"
        >
          {logging ? "Logging in..." : "Log In"}
        </button>

        <p className="font-semibold">
          Don't have an account?{" "}
          <span className="text-blue-800 ml-2 cursor-pointer">
            <a href="/signin">Sign Up</a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
