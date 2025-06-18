import React from "react";
import { motion } from "framer-motion";
import mainImage from "../assets/Rahul_travels_car.png";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const iconSize = 48;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhyMe = () => {
  const contents = [
    {
      Icon: GiTakeMyMoney,
      title: "Most Affordable",
      text: `Are you searching most affordable car near you then Rahul Travels is one of the Best and leading One way Car Rental provider, having well maintained vehicles and experienced car-driver at lowest price.`,
    },
    {
      Icon: FaHeart,
      title: "Best Rated",
      text: `Be it business one way travels, leisure travel, intercity getaways or just city visit. Take a ride with our exhaustive range of well-maintained Hatchbacks, Sedans, MUVs, SUVs, Hybrids and Luxury Cars.`,
    },
    {
      Icon: GrServices,
      title: "Excellent Service",
      text: `With Rahul Travels One Way Taxi Pvt Ltd, we endeavor to provide users the absolute best in reliable and comfortable one-way car rental services, premium outstation taxi service across India, all at the most affordable prices.`,
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-16 text-center text-gray-800">
        Why Choose Rahul Travels?
      </h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-20">
        {contents.map(({ Icon, title, text }, idx) => (
          <motion.div
            key={idx}
            className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            variants={cardVariants}
          >
            <div className="bg-blue-100 text-gray-700 p-4 rounded-full mb-6 shadow-md transition duration-300">
              <Icon size={iconSize} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              {text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Image with scroll reveal */}
      <motion.div
        className="flex justify-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={mainImage}
          alt="Rahul Travels Car"
          className="w-[900px] h-auto rounded-xl shadow-2xl transition-all duration-700 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default WhyMe;
