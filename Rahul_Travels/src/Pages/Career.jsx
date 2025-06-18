import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Car Owner – Partner with Us",
    location: "Pan India",
    type: "Flexible",
    description:
      "Do you own a car? Partner with us to rent your vehicle and earn! We handle bookings, customers, and support. Just keep your car ready!",
  },
  {
    id: 2,
    title: "Customer Support Executive",
    location: "Remote / Work From Home",
    type: "Part-Time",
    description:
      "Help our users have a great booking experience. Good English and patience required!",
  },
  {
    id: 3,
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full-Time",
    description:
      "We are looking for a React.js developer with a keen eye for design and performance.",
  },
  {
    id: 4,
    title: "Backend Developer",
    location: "Chhattisgarh, India",
    type: "Full-Time",
    description:
      "We need an experienced Node.js or Python developer with REST API knowledge.",
  },
  
  
];

const Career = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="max-w-6xl mx-auto mt-12 px-4 md:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary mb-2">Join Our Team</h2>
        <p className="text-gray-600 text-lg">
          Explore exciting career opportunities at our growing car booking startup!
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6 ">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`bg-white shadow-lg rounded-xl p-6 space-y-3 border-l-4 ${
              job.title.includes("Car Owner")
                ? "border-green-500"
                : "border-blue-500"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-sm text-gray-500">
              📍 {job.location} &nbsp; | &nbsp; ⏰ {job.type}
            </p>
            <p className="text-gray-600">{job.description}</p>
            <button
              onClick={() => navigate("/apply", { state: { jobTitle: job.title } })}
              className="primary-btn"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Career;
