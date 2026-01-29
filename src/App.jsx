import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";





const App = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      
       
       
      </Routes>
      <Footer />
    </>
  );
};

export default App;
