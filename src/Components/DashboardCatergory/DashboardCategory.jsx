import React, { useState } from "react";
import "./dashboardCategory.css";
import { AiOutlineCamera } from "react-icons/ai";
import { CustomError } from "../../Components/Toast";
import CategorySlider from "../CategorySlider/CategorySlider";

const DashboardCategory = () => {
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
  const Data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ];
  return (
    <>
      <div className="UploadImageWrapper">
        <div className="Add_Category_Image_container">
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
                className="Empty_Prfile_Image_Style_Edit"
              />
            )} */}
          <div className="Add_Category_Icon_Container">
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

      <div className="Add_Category_detailinput_container_Input">
        <input
          type="text"
          className="Add_Category_input__box"
          placeholder="Name"
        />
        {/* <div className="Add_Category_Error__message">{nameErrMsg ? nameErrMsg : null}</div> */}
      </div>
      <div className="All_Category_Text_Style">All Categories</div>
      <div className="AddCategoryContentWrapper">
        {Data.map((item) => {
          return <CategorySlider isAdd={true} />;
        })}
      </div>
    </>
  );
};

export default DashboardCategory;
