import React, { useState } from "react";
import "./categorySlider.css";
import { EmptyImage } from "../../Assets";
import EditCategoryPopup from "../EditCategoryPopup";

const CategorySlider = ({ isAdd }) => {
  let [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <div
        className={
          isAdd
            ? "categorySliderMainContainerWrapper"
            : "categorySliderMainContainer"
        }
      >
        <img src={EmptyImage} alt="img" className="categoryLogoImageStyle" />
        <div className="CategoryText">Samsung</div>
        {isAdd ? (
          <div className="CategoryButtonWrapper">
            <div className="CatButtonStyle1">Delete</div>
            <div
              className="CatButtonStyle"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </div>
          </div>
        ) : null}
      </div>
      <EditCategoryPopup setIsEdit={setIsEdit} isEdit={isEdit} />
    </>
  );
};

export default CategorySlider;
