import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Screens/AboutUs/AboutUs";
import LoginPopupModel from "./Components/LoginPopupModel";
import Dashboard from "./Screens/Dashboad/Dashboard";
import Faqs from "./Screens/Faqs/Faqs";
import Privacy from "./Screens/PrivacyPolicy/Privacy";
import Terms from "./Screens/TermsAndCondition/Terms";
import Warranty from "./Screens/WarrantyAndReturn/Warranty";
import PaymentInfo from "./Screens/PaymentInfo/PaymentInfo";

const App = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <LoginPopupModel setIsLogin={setIsLogin} isLogin={isLogin} />
        <Navbar setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Warranty" element={<Warranty />} />
          <Route path="/PaymentInfo" element={<PaymentInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
