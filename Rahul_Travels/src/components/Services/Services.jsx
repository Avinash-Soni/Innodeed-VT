import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
import { IoIosCar } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { SiPrime } from "react-icons/si";
import { MdFreeCancellation } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const ServicesData = [
  {
    id: 1,
    title: "Car Booking",
    path: "/CarBooking",
    icon: <IoIosCar />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Offer",
    path: "/Offer",
    icon: <BiSolidOffer />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Prime Member",
    path: "/PrimeMember",
    icon: <SiPrime />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Cancel Trip",
    path: "/CancelTrip",
    icon: <MdFreeCancellation />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Career",
    path: "/Career",
    icon: <FaHandshake />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    path: "/ContactUs",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <Link to={service.path} key={service.id}>
              <motion.div
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {service.title}
                </h1>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
