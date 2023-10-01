import React, { useState } from "react";
import "./productDetail.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardSlider from "../../Components/CardSlider/CardSlider";

const Productdetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="ProductDetailMainContainer">
      <div className="PD_Image_MainRapper">
        <div className="FeatureButtonContainer">
          <div ref={navigationPrevRef}>
            <MdKeyboardArrowLeft
              color={"black"}
              size={50}
              className="ProductIconStyle"
            />
          </div>
          <div ref={navigationNextRef}>
            <MdKeyboardArrowRight
              color={"black"}
              size={50}
              className="ProductIconStyle"
            />
          </div>
        </div>
        <CardSlider
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
        />
      </div>
      <div className="PD_Text_MainContainer">
        <div className="PD_NameTextStyle">Samsung Galaxy S23 Ultra</div>
        <div className="PD_PriceTextStyle">Rs.560,000.00 PKR</div>
        <div className="PD_DescriptionTextStyle">
          Samsung Galaxy S23's going to have a Dynamic AMOLED 2X Capacitive
          Touchscreen, with a full HD resolution of 1440 x 3088 Pixels under the
          hood of the new handset. The Protection of the screen is this device
          has got Corning Gorilla Glass. The RAM that is coupled with the SoC is
          12 gigabytes. This is the high-end RAM capacity that is used in the
          Galaxy S23 Ultra by Samsung. Both, the chipset and the RAM will
          enhance the processing speed of the handset a great deal. The internal
          storage is 256/512 gigabytes which is enough to store the data on the
          Samsung S23 Ultra for the rest of your life. There is a Quad Camera
          setup in the back of this handset, The main sensor will be 200
          megapixels wide, 10 megapixels periscope telephoto, and 10 megapixels
          telephoto and 12 MP ultra wide camera
        </div>
      </div>
    </div>
  );
};
export default Productdetail;
