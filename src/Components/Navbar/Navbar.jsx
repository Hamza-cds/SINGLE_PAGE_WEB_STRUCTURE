import React, { useState, useEffect } from "react";
import "./appNavbar.css";
import { NavLink, useHistory, Navigate, useNavigate } from "react-router-dom";
import { FiAlignRight, FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
// import { BurgerIcon, MonarchLogo, PhoneIcon, value } from "../../Assets";
import Select from "react-select";

function Navbar(props) {
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

  const options = [
    { id: 1, value: "Our Projects", label: "Our Projects" },
    { id: 2, value: "Property Detail", label: "PropertyDetail" },
  ];

  return (
    <Fade top>
      <nav
        className={
          isScrolling
            ? "NavBar_Main_Container Active_Header"
            : "NavBar_Main_Container"
        }
      >
        {/* <img src={MonarchLogo} alt="Image" className="Nav_Image_Style" /> */}

        <div className={"Navlink_Wrapper"}>
          <NavLink
            className={"Link_Style"}
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
            className={"Link_Style"}
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
            className={"Link_Style"}
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
          <Select
            placeholder={"Commerical"}
            options={options}
            className="Select_Option_Style_Navbar"
            classNamePrefix="Select"
            // onChange={(value) => {
            //   if (value.id == 1) {
            //     navigate("/OurProjects");
            //   } else if (value.id == 2) {
            //     navigate("/ProperDetail");
            //   }
            // }}
            components={{
              IndicatorSeparator: () => null,
            }}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "white" : null,
                borderRadius: "5px",
                border: state.isFocused ? 0 : 0,
                outline: state.isFocused ? "none" : "none",
                boxShadow: "none",
                cursor: "pointer",
              }),
            }}
          />
          <NavLink
            className={"Link_Style"}
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
            className={"Link_Style"}
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
            className={"Link_Style"}
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
            className={"Link_Style"}
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
            className={"Link_Style"}
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
        </div>

        <div className="MainButtonWrapperContainer">
          <div className="NavabrInquiryButton">
            {/* <img src={PhoneIcon} alt="Image" /> */}
            <div className="InquiryTextWrapper">
              <p className="Navbar_Instant_Text_Style">INSTANT</p>
              <p className="Navbar_Enquiry_Text_Style">Enquiry</p>
            </div>
          </div>
          <div className="ValuationButtonWrapper">
            {/* <img src={BurgerIcon} alt="Image" /> */}
            <p className="Navbar_Valuation_Text_Style">Valuation</p>
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
