import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="MainFooterContainer">
      <div className="FooterChildContainerRow">
        <div className="ChildSubContainerVer1">
          {/* <img src={Logo} alt="Image" className="FootLogoStyle" /> */}
          <div className="RowBlock1">
            {/* <img src={PinLoc} alt="Image" className="RowBlockIcon" /> */}
            <p className="RowBlockText">
              Realtor Office Building 5F <br /> 123 Anywhere St., Any City,
              12345 Any State
            </p>
          </div>
          <div className="RowBlock2">
            {/* <img src={phone} alt="Image" className="RowBlockIcon" /> */}
            <p className="RowBlockText">123-456-7890</p>
          </div>
          <div className="RowBlock2">
            {/* <img src={Mail} alt="Image" className="RowBlockIcon" /> */}
            <p className="RowBlockText">support@dreamwell.com</p>
          </div>
        </div>

        <div className="ChildSubContainerVer2">
          <p className="FooterHeading">Quick Links</p>
          <div className="QuickLinksStyle">About Us</div>
          <div className="QuickLinksStyle">Terms & Conditions</div>
          <div className="QuickLinksStyle">Guide</div>
          <div className="QuickLinksStyle">Support Center</div>
          <div className="QuickLinksStyle">Blog</div>
          <div className="QuickLinksStyle">Contact</div>
          <div className="QuickLinksStyle">Privacy Policy</div>
        </div>

        <div className="ChildSubContainerVer3">
          <p className="FooterHeading">Discover</p>
          <div className="QuickLinksStyle">Rawalpindi</div>
          <div className="QuickLinksStyle">Islamabad</div>
          <div className="QuickLinksStyle">Pakistan</div>
          <div className="QuickLinksStyle">Bahria Town</div>
          <div className="QuickLinksStyle">DHA isbamabad</div>
          <div className="QuickLinksStyle">PC</div>
        </div>

        <div className="ChildSubContainerVer4">
          <div className="LastBlockHead">
            Get the Latest Information about properties from{" "}
            <span className="MonarchText"> MONARCH INTERNATIONAL</span>
          </div>
          <div className="LastBlockInputBox">
            <input
              className="LastBlockInput"
              type="text"
              placeholder="Enter your email here"
            />
            <div className="ButtonStyle">Subscribe</div>
          </div>
          <div className="FootText1">Need any Help!</div>
          <div className="FootText2">Chat with our live agent</div>
          <div className="PhoneNumberStyle">+92-311-000-22-33</div>
        </div>
      </div>
      <div className="UnderLineStyle" />
      <div className="FooterBaseMainContainerRow">
        <div className="BaseChildContainerRow1">
          <div className="FollowUs">Follow Us</div>
          {/* <img src={facebook} alt="Image" className="SocialIcons" />
          <img src={youtube} alt="Image" className="SocialIcons" />
          <img src={linkedin} alt="Image" className="SocialIcons" />
          <img src={twitter} alt="Image" className="SocialIcons" />
          <img src={insta} alt="Image" className="SocialIcons" /> */}
        </div>
        <div className="BaseChildContainerRow2">
          <div className="BaseText">Privacy Policy</div>
          <div className="BaseText">|</div>
          <div className="BaseText">Terms & Conditions</div>
          <div className="BaseText">|</div>
          <div className="BaseText">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
}
