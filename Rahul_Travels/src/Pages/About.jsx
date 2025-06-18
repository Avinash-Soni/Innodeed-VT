import React, { useState } from "react";
import { motion } from "framer-motion";
import sahilSmall from "../assets/sahilSmall.png";
import GEM from "../assets/GEM'S.png";
import Associate from "../assets/Associate.png";
import whoWeAreImg from "../assets/whoWeAreImg.png";
import missionImg from "../assets/missionImg.png";
import satisfactionImg from "../assets/satisfactionImg.jpg";
import passionImg from "../assets/passionImg.png";
import { FaHandPointer } from "react-icons/fa";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Moved coFounders & contentSections ABOVE component
const coFounders = [
  {
    name: "Dr. Sahil Yadav",
    position: "C.E.O. & Co-Founder",
    image: sahilSmall,
    details:
      `Now after winning the hearts of thousands of customers, we achieved a 30-fold growth in a small span resulting in a strong fleet base of 100+ cabs & 30,000+ satisfied customers with an efficient workforce of over 200 employees. At Rahul Travels we aim to deliver best possible services & cooperation to ensure 100% customer satisfaction every time.`,
  },
  {
    name: "Dipti Chouhan ",
    position: "GEM'S",
    image: GEM ,
    details:
      "Dipti handles operations and ensures every customer interaction is seamless and efficient.",
  },
  {
    name: "Venkatesh",
    position: "Our Associate",
    image: Associate,
    details:
      "Partnering with this brand has been a game-changer. Their innovative car accessories not only add style but also improve functionality. Our customers love the quality.As a car enthusiast myself, I appreciate the attention to detail this brand puts into their accessories. They truly understand what we want and need for a complete driving experience.Venkatesh Aceceraies is located at Sindhi market, Jai stambh chouck , Raipur Established in the year 1983 Cantact No is 077140 68500 there work is so Excellent All work of Rahul Travels oNe Way Taxi Pvt Ltd Done by Venkatesh Car Accessories",
  },
];

const contentSections = [
  {
    title: "Who we are",
    image: whoWeAreImg ,
    text: `Rahul Travels Oneway Taxi Pvt. Ltd. is pioneer one way car rental service provider in India with a strong base of 100+ cabs. Our clients include all major private and government departments, MNCs, and individuals across India. We started our operations from Korba city in the year 2012 with a fleet of just 1 cab and a workforce of 3 employees.`,
  },
  {
    title: " Our Mission is Client’s Satisfaction",
    image: missionImg,
    text: `We love the satisfaction we get every day by helping you! Having the answers to tough questions makes our jobs worthwhile. Our cars come with unlimited kms so you can concentrate on counting memories, not kms. You can either pick up the car from one of our predefined locations near you or have the car of your choice hand-delivered to your doorstep, office, or arrival airport. So what are you waiting for? Rent a favorite car or taxi now.`,
  },
  {
    title: "We Love Our Customers",
    image: satisfactionImg,
    text: `We love the satisfaction we get every day by helping you! Having the answers to tough questions makes our jobs worthwhile.`,
  },
  {
    title: "Did you know? Helping Our Clients is Our Passion",
    image: passionImg,
    text: `Rahul Travels Pvt. Ltd. is a company that provides insight and help to customers who need it. This is not only the idea behind our company but the passion for each employee who works with us. Our company is a family and each of us has a common personality trait—passion. We hire driven people who have a passion for helping others, to protect our customers in their career.`,
  },
];

const About = () => {
  const [selectedFounder, setSelectedFounder] = useState(null); // ✅ useState moved inside component

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-20">
      {/* Top Introduction */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-secondary">About Rahul Travels</h1>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Rahul Travels has been providing top-notch transportation services for over a decade. Whether you're planning a family trip,
          business travel, or a weekend getaway, we offer reliable and comfortable options tailored to your needs. Our experienced
          drivers and well-maintained fleet ensure your journey is safe and enjoyable.
        </p>
      </motion.div>

      {/* Co-Founders Section */}
<div className="grid md:grid-cols-3 gap-8 text-center">
  {coFounders.map((founder, index) => (
    <motion.div
      key={index}
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
     


      {/* Clickable Image with Tooltip */}
      <img
        src={founder.image}
        alt={founder.name}
        title="Click to know more"
        onClick={() => setSelectedFounder(founder)}
        className="w-32 h-32 object-cover mx-auto rounded-full mb-4 border-4 border-blue-200 cursor-pointer hover:ring-4 hover:ring-blue-400 hover:brightness-95 transition"
      />

      <h3 className="text-xl font-semibold text-secondary">{founder.name}</h3>
      <p className="text-gray-600">{founder.position}</p>
       {/* Hint Label */}
      <p className="text-sm text-blue-600 mb-2 flex justify-center items-center gap-1">
  <FaHandPointer className="text-blue-500" />
  Click the image to know more
</p>
    </motion.div>
    
  ))}
  
</div>


      {/* Founder Details Modal */}
      {selectedFounder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setSelectedFounder(null)}
              className="absolute top-2 right-3 text-gray-600 text-xl hover:text-red-500"
            >
              ×
            </button>
            <img
              src={selectedFounder.image}
              alt={selectedFounder.name}
              className="w-24 h-24 object-cover mx-auto rounded-full border-4 border-blue-200 mb-4"
            />
            <h3 className="text-xl font-bold text-center">{selectedFounder.name}</h3>
            <p className="text-gray-500 text-center mb-2">{selectedFounder.position}</p>
            <p className="text-gray-700 text-sm text-center">{selectedFounder.details}</p>
          </div>
        </div>
      )}

      {/* Dynamic Content Sections */}
      {contentSections.map((section, index) => (
        <motion.section
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 rounded-2xl shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-secondary mb-3">{section.title}</h2>
            {section.subheading && <p className="text-gray-600 mb-2">{section.subheading}</p>}
            <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed">{section.text}</p>
          </div>
        </motion.section>
      ))}

      {/* YouTube Video Embed */}
      <motion.div
        className="mt-20 rounded-xl overflow-hidden shadow-2xl bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center text-white bg-text-secondary py-4">Watch More About Us</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/iijk9NiSZK8?start=29"
            title="Rahul Travels YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
