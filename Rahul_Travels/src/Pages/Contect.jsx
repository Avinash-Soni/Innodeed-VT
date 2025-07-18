import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactUs from "../assets/ContactUs.png";
import ThankU from "../assets/ThankU.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setSubmitted(true);
  };

  const toggleFAQ = index => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqs = [
    { q: "How can I make a booking?", a: "You can book a ride through our website, mobile app, or by calling our customer support directly." },
    { q: "What are your payment options?", a: "We accept cash, UPI, credit/debit cards, and other digital wallets for your convenience." },
    { q: "Is there a cancellation policy?", a: "Yes, cancellations made at least 2 hours before the trip are fully refundable. Later cancellations may incur charges." },
    { q: "Do you offer airport pick-up and drop services?", a: "Yes, we provide timely and reliable airport transfers 24/7 across major cities." },
    { q: "Are your drivers verified?", a: "Absolutely. All our drivers are professionally trained and background-verified for your safety." },
    { q: "Can I modify my booking after confirmation?", a: "Yes, booking modifications are allowed up to 1 hour before the scheduled trip." },
    { q: "Do you provide luxury vehicles for special occasions?", a: "Yes, we offer premium cars for weddings, events, and corporate travel." },
    { q: "Is there customer support available?", a: "Our support team is available 24/7 to assist you via phone, email, or chat." },
    { q: "Are your prices fixed or do they vary?", a: "We offer transparent and fixed pricing for most routes. Surge pricing may apply during peak hours." },
    { q: "Can I book a return trip in advance?", a: "Yes, you can pre-book both one-way and return trips at the time of booking." }
  ];

  return (
    <motion.div
      className="container mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-10 max-w-screen-xl"
      initial="initial"
      animate="animate"
    >
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Contact Info */}
        <motion.div className="md:w-1/2 w-full" variants={fadeInUp}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Contact Details</h1>
          <p className="mb-2 text-sm sm:text-base"><strong>Address:</strong><br />
            301 Shriji Heights,<br />
            beside Kotak Mahindra Bank,<br />
            Civil Lines, Raipur, Chhattisgarh 492001
          </p>
          <p className="mb-2 text-sm sm:text-base">
            <strong>Phone:</strong> <a href="tel:+919893411411" className="text-blue-600 hover:underline">+91 98934 11411</a>
          </p>
          <p className="mb-6 text-sm sm:text-base">
            <strong>Email:</strong> <a href="mailto:rahultravelsoneway@gmail.com" className="text-blue-600 hover:underline">rahultravelsoneway@gmail.com</a>
          </p>
          <motion.img
            src={ContactUs}
            alt="Rahul Travels"
            className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[300px]"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right: Form */}
        <motion.div className="md:w-1/2 w-full" variants={fadeInUp}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Send Us a Message</h1>
          {submitted ? (
            <motion.img
              src={ThankU}
              alt="Thank You"
              className="w-full rounded-xl shadow-lg object-cover max-h-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text" name="name" placeholder="Your Name"
                value={formData.name} onChange={handleChange} required
                className="p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email" name="email" placeholder="Your Email"
                value={formData.email} onChange={handleChange} required
                className="p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel" name="phone" placeholder="Your Phone Number"
                value={formData.phone} onChange={handleChange} required
                pattern="^[0-9]{10}$" maxLength="10"
                title="Enter a valid 10-digit phone number"
                className="p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message" rows="5" placeholder="Your Message"
                value={formData.message} onChange={handleChange} required
                className="p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                type="submit"
                className="primary-btn"
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div className="w-full mt-6 sm:mt-10" variants={fadeInUp}>
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">FAQs</h3>
        <div className="w-full max-w-3xl mx-auto px-2 sm:px-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-medium bg-gray-100 p-3 rounded-md hover:bg-gray-200 text-sm sm:text-base"
              >
                {faq.q}
              </button>
              {faqOpen === index && (
                <motion.p
                  className="p-3 bg-white border border-gray-300 rounded-md mt-2 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {faq.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
