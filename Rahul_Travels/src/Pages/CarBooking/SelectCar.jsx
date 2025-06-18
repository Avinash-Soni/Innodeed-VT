// src/Pages/CarBooking/SelectCar.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cars from "../../Data/cars.js";
import coordinates from "../../Data/coordinates.json";
import { motion } from "framer-motion";

const SelectCar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [distance, setDistance] = useState(null);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  useEffect(() => {
    if (!state) return;

    const src = coordinates[state.state]?.[state.source];
    const dest = coordinates[state.state]?.[state.destination];

    if (src && dest) {
      setDistance(calculateDistance(src.lat, src.lng, dest.lat, dest.lng));
    }
  }, [state]);

  return (
    <motion.div
      className="max-w-6xl mx-auto mt-10 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center text-secondary mb-4">
        Select Your Car
      </h2>
      <p className="text-center text-gray-700 mb-8 text-lg">
        From <strong>{state.source}</strong> to{" "}
        <strong>{state.destination}</strong> in{" "}
        <strong>{state.state}</strong> - Approx.{" "}
        <strong>{distance?.toFixed(2)} km</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cars.map((car, idx) => {
          const price = distance ? Math.ceil(distance * car.pricePerKm) : 0;

          return (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-contain "
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{car.name}</h3>
                <p className="text-gray-600 mb-2">
                  ₹{price} &bull; ₹{car.pricePerKm}/km
                </p>
                <button
                  className="primary-btn"
                  onClick={() =>
                    navigate("/booking-summary", {
                      state: {
                        ...state,
                        selectedCar: car.name,
                        selectedCarImage: car.image,
                        distance,
                        price,
                      },
                    })
                  }
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SelectCar;
