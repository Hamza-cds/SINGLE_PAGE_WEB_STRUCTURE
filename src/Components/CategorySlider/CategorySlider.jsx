import React, { useState } from "react";
import "./categorySlider.css";
import { EmptyImage } from "../../Assets";

const CategorySlider = () => {
  return (
    <div className="categorySliderMainContainer">
      <img src={EmptyImage} alt="img" className="categoryLogoImageStyle" />
      <div className="CategoryText">Samsung</div>
    </div>
  );
};

export default CategorySlider;
