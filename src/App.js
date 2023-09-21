import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
        </>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
