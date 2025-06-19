import React from "react";
import { motion } from "framer-motion";
import specialOffer from "../assets/logo.png";
import { Link } from "react-router-dom";

const offers = [
   {
    route: "Jamshedpur To Kolkata Airport Ertiga",
    price: "₹5500",
    date: "13-06-2025",
    time: "00:15 to 23:45",
  },
  {
    route: "Jamshedpur To Ranchi Airport Ertiga",
    price: "₹2200",
    date: "13-06-2025",
    time: "00:20 to 23:50",
  },
  {
    route: "Dhamtari To Raipur Swift Dzire",
    price: "₹1250",
    date: "13-06-2025",
    time: "19:30 to 21:30",
  },
  {
    route: "Jagdalpur To Raipur Swift Dzire",
    price: "₹4375",
    date: "13-06-2025",
    time: "19:30 to 23:59",
  },
  {
    route: "Sakti To Bilaspur Crysta",
    price: "₹1250",
    date: "13-06-2025",
    time: "20:00 to 22:00",
  },
  {
    route: "Sakti To Raipur Crysta",
    price: "₹2750",
    date: "13-06-2025",
    time: "20:05 to 22:05",
  },
  {
    route: "Champa To Bilaspur Crysta",
    price: "₹1250",
    date: "13-06-2025",
    time: "21:00 to 22:10",
  },
  {
    route: "Champa To Raipur Crysta",
    price: "₹2750",
    date: "13-06-2025",
    time: "21:05 to 22:15",
  },
  {
    route: "Raipur Airport To Jamshedpur Vista HS",
    price: "₹625",
    date: "14-06-2025",
    time: "02:00 to 23:50",
  },
  {
    route: "Ambikapur To Korba Amaze",
    price: "₹1250",
    date: "14-06-2025",
    time: "04:00 to 06:00",
  },
  {
    route: "Jagdalpur To Kanker Swift Dzire",
    price: "₹1250",
    date: "14-06-2025",
    time: "04:00 to 06:00",
  },
  {
    route: "Ambikapur To Bilaspur Amaze",
    price: "₹1750",
    date: "14-06-2025",
    time: "04:05 to 06:05",
  },
  {
    route: "Jagdalpur To Dhamtari Swift Dzire",
    price: "₹1750",
    date: "14-06-2025",
    time: "04:05 to 06:05",
  },
  {
    route: "Ambikapur To Raipur Amaze",
    price: "₹2750",
    date: "14-06-2025",
    time: "04:10 to 06:10",
  },
  {
    route: "Jagdalpur To Raipur Swift Dzire",
    price: "₹2250",
    date: "14-06-2025",
    time: "04:10 to 06:10",
  },
  {
    route: "Jagdalpur To Bhilai Swift Dzire",
    price: "₹2250",
    date: "14-06-2025",
    time: "04:20 to 06:20",
  },
];

const TodayOffers = () => {
  return (
    <motion.div
      className="p-4 sm:p-6 bg-[#f8f9fa] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        TODAY'S OFFER
      </motion.h1>

      {/* Desktop Table View */}
      <div className="w-full overflow-x-auto hidden sm:block">
        <motion.table
          className="min-w-[800px] bg-white shadow-md rounded-xl text-sm sm:text-base"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <thead className="bg-orange-400 text-white">
            <tr>
              <th className="py-3 px-4">Sno.</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Route</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <motion.tr
                key={index}
                className="border-b hover:bg-yellow-50"
                whileHover={{ scale: 1.01 }}
              >
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">
                  <img
                    src={specialOffer}
                    alt="offer"
                    className="w-10 h-10 mx-auto rounded-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </td>
                <td className="py-3 px-4 text-gray-700">{offer.route}</td>
                <td className="py-3 px-4 text-gray-700">{offer.price}</td>
                <td className="py-3 px-4 text-gray-700">{offer.date}</td>
                <td className="py-3 px-4 text-gray-700">{offer.time}</td>
                <td className="py-3 px-4 text-center">
                  <Link to="/">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 text-sm rounded-full transition-colors duration-300">
                      Book Now
                    </button>
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden flex flex-col gap-4 mt-6">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-2"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={specialOffer}
                alt="offer"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h2 className="font-semibold text-gray-800">{offer.route}</h2>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> {offer.price}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> {offer.date}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Time:</strong> {offer.time}
            </p>
            <div className="mt-2">
              <Link to="/">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 text-sm rounded-full transition-colors duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TodayOffers;