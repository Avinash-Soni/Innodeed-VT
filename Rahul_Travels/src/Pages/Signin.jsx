import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; 

const Signin = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    mobile: "",
    password: "",
  });

  const [registeredUser, setRegisteredUser] = useState(null); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisteredUser(form); 
    alert("Registration successful! Please login.");
    setIsRegistering(false);
    setForm({
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      mobile: "",
      password: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      registeredUser &&
      registeredUser.email === form.email &&
      registeredUser.password === form.password
    ) {
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [50, 0] }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={logo}
        alt="Rahul Travels Logo"
        className="w-20 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isRegistering ? "Register" : "Sign In"}
        </h2>

        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="space-y-4"
        >
          {isRegistering && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <motion.button
            type="submit"
            className="w-full primary-btn text-white py-2 rounded-lg font-semibold  transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRegistering ? "Register" : "Login"}
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-600 font-medium hover:underline"
          >
            {isRegistering ? "Sign In" : "Register"}
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default Signin;
