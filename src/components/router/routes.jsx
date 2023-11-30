// src/components/Routes.js
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import About from "../pages/about/index";
import Contact from "../pages/contact/index";
import Services from "../pages/services/index";
import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";

function AppRoutes() {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
