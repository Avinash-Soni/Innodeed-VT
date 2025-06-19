import React from "react";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { Link } from "react-router-dom";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
             To Get Premium Benefits Take <span className="text-secondary">Prime Membership</span>

            </h1>
            <p>
              Be with us We offers great deals
            </p>
            <Link
              to="KnowMore"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Know more
              <GiGiftOfKnowledge className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
