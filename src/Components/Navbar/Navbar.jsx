import React, { useState, useEffect } from "react";
import "./appNavbar.css";
import { NavLink, useHistory, Navigate, useNavigate } from "react-router-dom";
import { FiAlignRight, FiX } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";

import Fade from "react-reveal/Fade";
// import { BurgerIcon, MonarchLogo, PhoneIcon, value } from "../../Assets";
import Select from "react-select";
import { PartnerLogo } from "../../Assets";

function Navbar({ setIsLogin }) {
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
        setToggleMenu(false);
      } else if (window.scrollY === 0) {
        setIsScrolling(false);
      }
    });
  });

  function scrolldiv(scroll) {
    var elem = document.getElementById(scroll);
    elem.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Fade top>
      <nav
        className={
          isScrolling
            ? "NavBar_Main_Container Active_Header"
            : "NavBar_Main_Container"
        }
      >
        <div className="Navbar_Main_Logo_Container">
          <img src={PartnerLogo} alt="Image" className="Nav_Image_Style" />
          <div className={"Navlink_Wrapper"}>
            <NavLink
              className={"Link_Style"}
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "black",
                  fontWeight: isActive ? "bold" : "600",
                  backgroundColor: isActive ? "#1dafa1" : null,
                };
              }}
            >
              Home
            </NavLink>

            <NavLink
              className={"Link_Style"}
              to="/AboutUs"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "black",
                  fontWeight: isActive ? "bold" : "600",
                  backgroundColor: isActive ? "#1dafa1" : null,
                };
              }}
            >
              About
            </NavLink>
          </div>
        </div>

        <div className="MainButtonWrapperContainer">
          <div
            className="NavabrInquiryButton"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            <BiLogIn color="white" size={30} />
            <p className="Navbar_Instant_Text_Style">Login</p>
          </div>
        </div>

        <div className={"NavLink_App_Smaller_Devices"}>
          {toggleMenu ? (
            <div className="Toggle_Btn_CLose">
              <FiX
                color="black"
                size={30}
                onClick={() => setToggleMenu(false)}
              />
            </div>
          ) : (
            <div className="Toggle_Btn_Open">
              <FiAlignRight
                color="black"
                size={30}
                onClick={() => setToggleMenu(true)}
              />
            </div>
          )}

          {toggleMenu ? (
            <div className={"NavLink_App_Smaller_Overlay"}>
              <div className={"Navlink_App_Links_Wrapper_SmallScreen_links"}>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Rent
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Buy
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Commercial
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Investment
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Services
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Blogs
                </NavLink>
                <NavLink
                  className={"Link_Style_Small_Device"}
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#124342" : "black",
                      fontWeight: isActive ? "bold" : "400",
                    };
                  }}
                >
                  Contact
                </NavLink>
                <div className="NavButtonSmallDeviceWrapper">
                  <div className="NavabrInquiryButtonSmallDevice">
                    {/* <img src={PhoneIcon} alt="Image" /> */}
                    <div className="InquiryTextWrapper">
                      <p className="Navbar_Instant_Text_Style">INSTANT</p>
                      <p className="Navbar_Enquiry_Text_Style">Enquiry</p>
                    </div>
                  </div>
                  <div className="ValuationButtonWrapperSmallDevice">
                    {/* <img src={BurgerIcon} alt="Image" /> */}
                    <p className="Navbar_Valuation_Text_Style">Valuation</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </Fade>
  );
}

export default Navbar;
