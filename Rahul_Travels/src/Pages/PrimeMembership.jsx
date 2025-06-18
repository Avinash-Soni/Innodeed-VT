import React, { useState } from "react";
import { SiPrime } from "react-icons/si";
import PrimePng from "../assets/prime.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const PrimeMembership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [membershipType, setMembershipType] = useState("yearly");
  const yearlyFee = 5000;
  const lifetimeFee = 25000;
  const gstPercent = 18;

  const membershipFee = membershipType === "yearly" ? yearlyFee : lifetimeFee;
  const gstAmount = (membershipFee * gstPercent) / 100;
  const payableAmount = membershipFee + gstAmount;

  return (
    <motion.div
      className="max-w-7xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Info Section */}
        <div className="lg:w-1/2 space-y-6 text-gray-800">
        <div className="text-7xl mb-4 "><SiPrime/></div>
          <h2 className="text-3xl font-bold text-secondary  mb-4">Prime Membership Benefits</h2>
          <ul className="space-y-4 text-lg list-disc pl-6">
            <li>One-way facility available for Prime Members only.</li>
            <li>Personal Relationship Manager appointed for each member.</li>
            <li>First priority for confirmation in waiting cases.</li>
            <li>Membership amount is non-refundable.</li>
          </ul>
          <div ref={ref} className="flex justify-center items-center">
                    <motion.img
                      initial={{ x: 50, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                      src={PrimePng}
                      alt="Hero"
                      className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
                    />
                    </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2">
        
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Prime Membership Form</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="input-style" />
              <input type="text" placeholder="Address" className="input-style" />
              <input type="text" placeholder="Mobile Number" className="input-style" />
              <input type="email" placeholder="Email" className="input-style" />
              <input type="text" placeholder="State" className="input-style" />
              <input type="text" placeholder="City" className="input-style" />
            </div>

            <div>
              <label className="font-semibold text-gray-800 block mb-2">Membership Type</label>
              <div className="flex gap-6 text-gray-900">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="membership"
                    value="yearly"
                    checked={membershipType === "yearly"}
                    onChange={() => setMembershipType("yearly")}
                    className="mr-2 accent-blue-600"
                  />
                  Yearly - ₹5,000/-
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="membership"
                    value="lifetime"
                    checked={membershipType === "lifetime"}
                    onChange={() => setMembershipType("lifetime")}
                    className="mr-2 accent-blue-600"
                  />
                  Lifetime - ₹25,000/-
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-1/2 pr-2">
                <label className="block font-medium text-gray-800 mb-1">GST ({gstPercent}%)</label>
                <input
                  type="text"
                  readOnly
                  value={`₹${gstAmount.toFixed(2)}`}
                  className="input-style bg-gray-100"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block font-medium text-gray-800 mb-1">Payable Amount</label>
                <input
                  type="text"
                  readOnly
                  value={`₹${payableAmount.toFixed(2)}`}
                  className="input-style bg-gray-100"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className=" w-full primary-btn !mt-8"
              type="submit"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default PrimeMembership;
