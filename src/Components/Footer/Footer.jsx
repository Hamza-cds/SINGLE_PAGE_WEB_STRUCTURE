import React from "react";
import "./footer.css";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { PartnerLogo } from "../../Assets";

export default function Footer() {
  return (
    <div className="MainFooterContainer">
      <div className="FooterChildContainerRow">
        <div className="ChildSubContainerVer1">
          <img src={PartnerLogo} alt="Image" className="FootLogoStyle" />
          <div className="RowBlock1">
            <ImLocation2 color={"#1dafa1"} size={16} />
            <p className="RowBlockText">
              Realtor Office Building 5F <br /> 123 Anywhere St., Any City,
              12345 Any State
            </p>
          </div>
          <div className="RowBlock2">
            <BsFillTelephoneFill color={"#1dafa1"} size={16} />
            <p className="RowBlockText">123-456-7890</p>
          </div>
          <div className="RowBlock2">
            <TfiEmail color={"#1dafa1"} size={16} />
            <p className="RowBlockText">support@dreamwell.com</p>
          </div>
        </div>

        <div className="ChildSubContainerVer2">
          <p className="FooterHeading">Quick Links</p>
          <div className="QuickLinksStyle">FAQ's</div>
          <div className="QuickLinksStyle">About Us</div>
          <div className="QuickLinksStyle">Privacy Policy</div>
          <div className="QuickLinksStyle">Terms & Conditions</div>
          <div className="QuickLinksStyle">Warranty & Returns</div>
          <div className="QuickLinksStyle">Payment Information</div>
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
          {/* <img src={facebook} alt="Image" className="SocialIcons" />
          <img src={youtube} alt="Image" className="SocialIcons" />
          <img src={linkedin} alt="Image" className="SocialIcons" />
          <img src={twitter} alt="Image" className="SocialIcons" />
          <img src={insta} alt="Image" className="SocialIcons" /> */}
        </div>
      </div>
    </div>
  );
}
