import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BookingSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    // Generate a random booking ID like BK-648231 or similar
    const id = "BK-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
  }, []);

  if (!state) {
    return (
      <div className="text-center mt-10 text-red-600">
        Booking session expired. Please fill the form again.
        <br />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go to Booking Page
        </button>
      </div>
    );
  }

  const {
    name,
    email,
    phone,
    source,
    destination,
    journeyDate,
    pickupTime,
    travelType,
    selectedCar,
    selectedCarImage,
    distance,
    price,
    state: selectedState,
  } = state;

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-12 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-3xl p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-secondary mb-2">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 mb-2 text-lg">
          Your ride has been successfully booked 🎉
        </p>
        <p className="text-blue-700 font-semibold text-lg">
          Booking ID: {bookingId}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        {/* Car Image & Name */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
          <img
            src={selectedCarImage}
            alt={selectedCar}
            className="w-full max-w-xs h-52 object-contain rounded-lg bg-white shadow"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">{selectedCar}</h3>
        </div>

        {/* Booking Details */}
        <div className="md:w-1/2 bg-white rounded-xl p-6 shadow space-y-4 text-gray-700 text-base">
          <div className="grid grid-cols-2 gap-4">
            <div className="font-medium">Name:</div>
            <div>{name}</div>
            <div className="font-medium">Email:</div>
            <div>{email}</div>
            <div className="font-medium">Phone:</div>
            <div>{phone}</div>
            <div className="font-medium">State:</div>
            <div>{selectedState}</div>
            <div className="font-medium">Travel Type:</div>
            <div>{travelType}</div>
            <div className="font-medium">From:</div>
            <div>{source}</div>
            <div className="font-medium">To:</div>
            <div>{destination}</div>
            <div className="font-medium">Date:</div>
            <div>{journeyDate}</div>
            <div className="font-medium">Pickup Time:</div>
            <div>{pickupTime}</div>
            <div className="font-medium">Distance:</div>
            <div>{distance?.toFixed(2)} km</div>
            <div className="font-medium">Total Price:</div>
            <div className="text-green-700 font-semibold text-lg">₹{price}</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition font-medium"
        >
          🖨️ Print This Page
        </button>
        <button
          onClick={() => navigate("/")}
          className="primary-btn"
        >
          🚗 Book Another Ride
        </button>
        <button
           onClick={() => navigate("/CancelTrip")}
           className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition font-medium"
        >
           ❌ Cancel This Trip
        </button>
      </div>
    </motion.div>
  );
};

export default BookingSummary;
