import React from "react";
import "./footer.css";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

import {
  BiLogoFacebookSquare,
  BiLogoWhatsappSquare,
  BiLogoInstagramAlt,
} from "react-icons/bi";

import {
  FaceBookIcon,
  InstagramIcon,
  PartnerLogo,
  WhatsUpIcon,
} from "../../Assets";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="MainFooterContainer">
      <div className="FooterChildContainerRow">
        <div className="ChildSubContainerVer1">
          <img src={PartnerLogo} alt="Image" className="FootLogoStyle" />
          <div className="RowBlock1">
            <ImLocation2
              color={"#1dafa1"}
              size={16}
              className="InfoIconStyle"
            />
            <p className="RowBlockText">
              Realtor Office Building 5F
              <br />
              123 Anywhere St., Any City, 12345 Any State
            </p>
          </div>
          <div className="RowBlock2">
            <BsFillTelephoneFill
              color={"#1dafa1"}
              size={16}
              className="InfoIconStyle"
            />
            <p className="RowBlockText">123-456-7890</p>
          </div>
          <div className="RowBlock2">
            <TfiEmail color={"#1dafa1"} size={16} className="InfoIconStyle" />
            <p className="RowBlockText">support@dreamwell.com</p>
          </div>
        </div>

        <div className="ChildSubContainerVer2">
          <p className="FooterHeading">Quick Links</p>
          <NavLink
            className="QuickLinksStyle"
            to="/Faqs"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid #1dafa1" : null,
              };
            }}
          >
            FAQ's
          </NavLink>
          <NavLink
            className="QuickLinksStyle"
            to="/Privacy"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid #1dafa1" : null,
              };
            }}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className="QuickLinksStyle"
            to="/Terms"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid #1dafa1" : null,
              };
            }}
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            className="QuickLinksStyle"
            to="/Warranty"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid #1dafa1" : null,
              };
            }}
          >
            Warranty & Returns
          </NavLink>
          <NavLink
            className="QuickLinksStyle"
            to="/PaymentInfo"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid #1dafa1" : null,
              };
            }}
          >
            Payment Information
          </NavLink>
        </div>

        <div className="ChildSubContainerVer4">
          <div className="LastBlockHead">
            Get the Latest Information about properties from{" "}
            <span className="MonarchText"> MONARCH INTERNATIONAL</span>
          </div>
          <div className="FootText1">Need any Help!</div>
          <div className="FootText2">Call us</div>
          <div className="PhoneNumberStyle">+92-311-000-22-33</div>
        </div>
      </div>
      <div className="UnderLineStyle" />
      <div className="FooterBaseMainContainerRow">
        <div className="BaseChildContainerRow1">
          <div className="FollowUs">Follow Us</div>
        </div>
        <div className="BaseChildContainerRow2">
          <BiLogoFacebookSquare
            color={"#1dafa1"}
            size={35}
            className="IconStyle"
          />

          <BiLogoWhatsappSquare
            color={"#1dafa1"}
            size={35}
            className="IconStyle"
          />
          <BiLogoInstagramAlt
            color={"#1dafa1"}
            size={35}
            className="IconStyle"
          />
        </div>
      </div>
    </div>
  );
}
