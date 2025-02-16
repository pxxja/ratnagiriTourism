import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(!formData.email|| !formData.password){
        alert("Please fill all the fields")
        return;
    }
    try {
      const response=await axios
      .post("/api/v1/users/login",formData)
      
      console.log(response.data)
     if(response.data.success===true){
      alert("Login Successful! 🎉");
      navigate("/"); // Redirect to home after login
     }else{
      alert("Invalid Email or Password");
     }
    } catch (error) {
      console.log("Login Error",error);
      alert("Something went wrong while logging in");
    }
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl border border-gray-300 sm:p-10">
        <h2 className="text-3xl font-serif font-extrabold text-center text-indigo-700 uppercase">
            log in
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-black uppercase">
                <FaEnvelope />
                <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div>
          <label className="flex items-center space-x-2 text-sm font-semibold text-black uppercase">
                <FaLock />
                <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 font-semibold hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;