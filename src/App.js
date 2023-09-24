import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Screens/AboutUs/AboutUs";
import LoginPopupModel from "./Components/LoginPopupModel";

const App = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log("isLogin", isLogin);
  return (
    <>
      <LoginPopupModel setIsLogin={setIsLogin} isLogin={isLogin} />
      <BrowserRouter>
        <>
          <Navbar setIsLogin={setIsLogin} />
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
