import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Rahul Travels</h1>
            <p className="text-dark1 text-justify">
              <strong>Rahul Travels</strong> has been providing top-notch
              transportation services for over a decade. Whether you're
              planning a family trip, business travel, or a weekend getaway, we
              offer reliable and comfortable options tailored to your needs.
              Our experienced drivers and well-maintained fleet ensure your
              journey is safe and enjoyable.
            </p>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      to="/CarBooking"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Car Booking
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Offer"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Offer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PrimeMember"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Prime Membership
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/CancelTrip"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Cancel Trip
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Career"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Support"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      24/7 Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      to="/"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Services"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AboutUs"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ContactUs"
                      className="cursor-pointer hover:text-secondary duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl primary-btn !mt-1">
                Go
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://play.google.com/store/apps/details?id=com.reliableservices.rahultravels&hl=en_IN&gl=US"
              target="_blank"
                rel="noopener noreferrer"
                className="text-4xl">
                <IoLogoGooglePlaystore className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.instagram.com/rahultravelsoneway?igshid=ZDdkNTZiNTM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
               >
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.facebook.com/RahulTravelsOneWay/"
              target="_blank"
                rel="noopener noreferrer"
                className="text-4xl">
                <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/channel/UCo_CKYxe570TTBFg2thhCqg"
              target="_blank"
                rel="noopener noreferrer"
                className="text-4xl">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
