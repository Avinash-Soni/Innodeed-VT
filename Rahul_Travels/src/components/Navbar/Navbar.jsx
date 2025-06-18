import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import NavbarMenuItem from "./NavbarMenuItem";
import { NavbarMenu } from "./navbarMenuData";
import ReactDOM from "react-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 px-4 flex justify-between items-center relative"
      >
         {/* Logo section */}
        <div >
          <img src={logo} alt="Logo" style={{ height: "200px" }} />
        </div>

        {/* Desktop Menu */}
        <NavbarMenuItem />

        {/* Mobile Hamburger */}
<div className="lg:hidden relative z-50">
  <IoMdMenu
    className="text-4xl cursor-pointer"
    onClick={() => setIsOpen(true)}
  />

  {isOpen &&
  ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-6"
    >
      <button
        className="absolute top-5 right-5 text-3xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      <ul className="flex flex-col gap-6 text-xl text-center">
        {NavbarMenu.map((menu) => (
          <li key={menu.id}>
            <Link
              to={menu.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 rounded hover:bg-gray-200"
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/SignIn" className="w-full mt-8 px-4">
        <button
          className="primary-btn w-full py-3 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </button>
      </Link>
    </motion.div>,
    document.body // <-- renders into <body> directly
  )}
</div>

        
      </motion.div>
    </nav>
  );
};

export default Navbar;
