import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Prime from "./components/Prime/Prime";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import PrimeMembership from "./Pages/PrimeMembership";
import WhyMee from "./Pages/WhyMe";
import Contact from "./Pages/Contect";
import About from "./Pages/About";
import Offers from "./Pages/Offers";
import Signin from "./Pages/Signin";
import BookingForm from "./Pages/CarBooking/BookingForm";
import SelectCar from "./Pages/CarBooking/SelectCar";
import BookingSummary from "./Pages/CarBooking/BookingSummary";
import Cancel_Trip from "./Pages/CancelTrip";
import Careers from "./Pages/Career";

// Pages
const Home = () => (
  <>
    <Hero />
    <Services />
    <Banner />
    <Prime />
    <Banner2 />
  </>
);
const ServicesPage = () => <div className="p-8 text-xl"><Services /></div>;
const AboutUs = () => <div className="p-8 text-xl"><About /></div>;
const ContactUs = () => <div className="p-8 text-xl"><Contact /></div>;
const SignIn = () => <div className="p-8 text-xl"><Signin /></div>;
const CarBooking = () => <div className="p-8 text-xl"> <BookingForm /></div>;
const Offer = () => <div className="p-8 text-xl"><Offers /></div>;
const PrimeMember = () => <div className="p-8 text-xl"><PrimeMembership /></div>;
const CancelTrip = () => <div className="p-8 text-xl"><Cancel_Trip/></div>;
const Career = () => <div className="p-8 text-xl"><Careers/></div>;
const WhyMe = () => <div className="p-8 text-xl"><WhyMee /></div>;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  const hideLayout = location.pathname === "/SignIn";

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <div className="bg-light overflow-hidden relative">
        {!hideLayout && <Navbar />}
      </div>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CarBooking" element={<CarBooking />} />
        <Route path="/select-car" element={<SelectCar />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/PrimeMember" element={<PrimeMember />} />
        <Route path="/CancelTrip" element={<CancelTrip />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/KnowMore" element={<PrimeMember />} />
        <Route path="/WhyMe" element={<WhyMe />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen text-3xl text-red-600">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
      {!hideLayout && <Footer />}
    </main>
  );
};

export default App;
