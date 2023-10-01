import React, { useState } from "react";
import "./dashboardProduct.css";
import { AiOutlineCamera } from "react-icons/ai";
import { CustomError } from "../../Components/Toast";
import Select from "react-select";
import ProductComp from "../ProductComponant/ProductComp";
import {
  mobile1,
  mobile2,
  mobile3,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
} from "../../Assets";

const DashboardProduct = () => {
  // const [categoryImage, setCategoryImage] = useState("");
  // const [editCategoryImage, setEditCategoryImage] = useState("");

  // const onSelectImage = (img) => {
  //   if (
  //     img.type.includes("png") ||
  //     img.type.includes("jpg") ||
  //     img.type.includes("jpeg")
  //   ) {
  //     setCategoryImage(img);
  //     setEditCategoryImage("");
  //   } else {
  //     CustomError("Invalid File");
  //   }
  // };
  const options = [
    { id: 1, label: "Chocolate" },
    { id: 2, label: "Strawberry" },
    { id: 3, label: "Vanilla" },
  ];
  const array = [
    {
      id: 1,
      image: mobile1,
      heading: "Techno",
    },
    {
      id: 2,
      image: mobile2,
      heading: "OPPO",
    },
    {
      id: 3,
      image: mobile3,
      heading: "VIVO",
    },
    {
      id: 4,
      image: mobile5,
      heading: "Huawei",
    },
    {
      id: 5,
      image: mobile5,
      heading: "Nokia",
    },
    {
      id: 6,
      image: mobile6,
      heading: "Samsung",
    },
    {
      id: 7,
      image: mobile7,
      heading: "Iphone",
    },
    {
      id: 8,
      image: mobile8,
      heading: "Nokia",
    },
    {
      id: 9,
      image: mobile2,
      heading: "OPPO",
    },
    {
      id: 10,
      image: mobile3,
      heading: "VIVO",
    },
  ];

  return (
    <>
      <div className="UploadImageWrapper">
        <div className="Add_Product_Image_container">
          {/* {editServiceImage || serviceImage ? (
              <img
                src={
                  editServiceImage
                    ? process.env.REACT_APP_BASEURL_ONLY.concat(
                        editServiceImage
                      )
                    : URL.createObjectURL(serviceImage)
                }
                alt="Image"
                className="Empty_Prfile_Image_Style_Edit"
              />
            ) : (
              <img
                src={userAvatar}
                alt="Image"
                className="Product_Empty_Prfile_Image_Style_Edit"
              />
            )} */}
          <div className="Add_Product_Icon_Container">
            <AiOutlineCamera
              color="white"
              size={25}
              className="AddCameraImageStyle"
            />
            <input
              type="file"
              className="popup_formupload_input"
              accept=".png, .jpg, jpeg"
              // onChange={(e) => onSelectImage(e.target.files[0])}
              onClick={(event) => (event.currentTarget.value = null)}
            />
          </div>
        </div>
        <div className="CategoryMainButtonWrapperContainer">
          <div className="AddCategoryButton">
            <p className="Add_Category_Text_Style">Add</p>
          </div>
        </div>
      </div>
      <div className="ProductsInputMainContainer">
        <div className="Product_Select_Dropdown">
          <div className={"Add_Emp_Category_Select_Container"}>
            <Select
              placeholder="Category"
              options={options}
              className={"Add_Emp_Category_Select_Option_Style"}
              classNamePrefix="Select"
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              isMulti={true}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  background: "#F5F5F5",
                  borderColor: state.isFocused ? "white" : null,
                  borderRadius: "25px",
                  border: state.isFocused ? 0 : 0,
                  outline: state.isFocused ? "none" : "none",
                  boxShadow: "none",
                  cursor: "pointer",
                  paddingLeft: "27px",
                  paddingRight: "27px",
                  height: "45px",
                }),
              }}
            />
          </div>

          <div className="Add_Product_detailinput_container_Input">
            <input
              type="text"
              className="Add_Category_input__box"
              placeholder="Name"
            />
            {/* <div className="Add_Category_Error__message">{nameErrMsg ? nameErrMsg : null}</div> */}
          </div>
        </div>
        <div className="Product_Select_Dropdown">
          <div className="Add_Product_detailinput_container_Input">
            <input
              type="text"
              className="Add_Category_input__box"
              placeholder="Price"
            />
            {/* <div className="Add_Category_Error__message">{nameErrMsg ? nameErrMsg : null}</div> */}
          </div>

          <div className="Add_Category_Text_Area_Input_Wrapper">
            <textarea
              className="Add_Service_Text_Area_Style"
              placeholder="Description"
              rows="8"
              cols="70"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="All_Category_Text_Style">All Products</div>

      <div className="AddCategoryContentWrapper">
        {array.map((item) => {
          return <ProductComp item={item} isDashboard={true} />;
        })}
      </div>
    </>
  );
};

export default DashboardProduct;
