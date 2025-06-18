// src/Pages/CarBooking/BookingForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coordinates from "../../Data/coordinates.json";
import { motion } from "framer-motion";

const BookingForm = () => {
  const navigate = useNavigate();
  const states = Object.keys(coordinates);

  const [formData, setFormData] = useState({
    state: "",
    source: "",
    destination: "",
    journeyDate: "",
    pickupTime: "",
    travelType: "one-way",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "state" && { source: "", destination: "" }) // reset cities on state change
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/select-car", { state: formData });
  };

  const availableCities = formData.state ? Object.keys(coordinates[formData.state]) : [];

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Book Your Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* State */}
          <div>
            <label className="block font-semibold mb-1">State</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.state}
              onChange={(e) => handleChange("state", e.target.value)}
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

           {/* Travel Type */}
          <div>
            <label className="block font-semibold mb-1">Travel Type</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.travelType}
              onChange={(e) => handleChange("travelType", e.target.value)}
              required
            >
              <option value="one-way">One Way Travel</option>
              <option value="outstation">Outstation</option>
              <option value="ambulance">Ambulance</option>
            </select>
          </div>

          {/* Source */}
          <div>
            <label className="block font-semibold mb-1">Source</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.source}
              onChange={(e) => handleChange("source", e.target.value)}
              required
              disabled={!formData.state}
            >
              <option value="">Select Source</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Destination */}
          <div>
            <label className="block font-semibold mb-1">Destination</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.destination}
              onChange={(e) => handleChange("destination", e.target.value)}
              required
              disabled={!formData.state}
            >
              <option value="">Select Destination</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Journey Date */}
          <div>
            <label className="block font-semibold mb-1">Journey Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg"
              value={formData.journeyDate}
              onChange={(e) => handleChange("journeyDate", e.target.value)}
              required
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block font-semibold mb-1">Pickup Time</label>
            <input
              type="time"
              className="w-full p-3 border rounded-lg"
              value={formData.pickupTime}
              onChange={(e) => handleChange("pickupTime", e.target.value)}
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="primary-btn">
            Search Cars
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm;
