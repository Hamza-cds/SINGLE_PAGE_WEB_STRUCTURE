import React, { useState } from "react";
import "./productComp.css";
import EditProductCategory from "../EditProductCategory";
import { useNavigate } from "react-router-dom";

const ProductComp = ({ item, isDashboard }) => {
  const navigate = useNavigate();

  let [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          if (isDashboard) {
            return null;
          } else {
            navigate("/Productdetail");
          }
        }}
        className={
          isDashboard
            ? "ProductswiperMainContentContainer"
            : "swiperMainContentContainer"
        }
      >
        <div className="SwiperImageContainer">
          <img src={item.image} alt="Image" className="SwiperImageStyle" />
        </div>
        <div className="SwiperContentContainer">
          {/* <div className="SwiperHeadingContainer"> */}
          <div>
            <p className="SwiperLocationTextNameStyle">{item.heading}</p>
          </div>
          <p className="SwiperLocationTextStyle">Oppo A16E (4/64)gb</p>
          <div className="PriceContainerStyle">
            <div className="SwiperPrice_Text_Style">5000</div>
            <div className="RsTextStyle">Rs</div>
          </div>
        </div>

        {isDashboard ? (
          <div className="Product_CategoryButtonWrapper">
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
      <EditProductCategory setIsEdit={setIsEdit} isEdit={isEdit} />
    </>
  );
};

export default ProductComp;
