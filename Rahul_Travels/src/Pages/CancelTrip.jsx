import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CancelTrip = () => {
  const navigate = useNavigate();
  const [bookingId, setBookingId] = useState("");
  const [reason, setReason] = useState("");
  const [isCancelled, setIsCancelled] = useState(false);

  const handleCancel = () => {
    if (bookingId.trim() !== "" && reason.trim() !== "") {
      // Here you could send cancellation to the server if backend is present
      setIsCancelled(true);
    } else {
      alert("Please enter Booking ID and reason for cancellation.");
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto mt-12 bg-gradient-to-br from-white to-red-50 shadow-2xl rounded-3xl p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary">Cancel Your Trip</h2>
      </div>

      {!isCancelled ? (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Booking ID
            </label>
            <input
              type="text"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="e.g. BK-123456"
              className="w-full p-3 border rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Reason for Cancellation
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Optional but helpful..."
              className="w-full p-3 border rounded-lg shadow-sm"
              rows={4}
            ></textarea>
          </div>

          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition font-medium w-full"
          >
            🚫 Cancel Trip
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Your trip has been successfully cancelled.
          </h3>
          <p className="text-gray-700 mb-6">
            We're sorry to see you go. Hope to serve you again soon!
          </p>
          <button
            onClick={() => navigate("/")}
            className="primary-btn"
          >
            🔙 Back to Home
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default CancelTrip;
