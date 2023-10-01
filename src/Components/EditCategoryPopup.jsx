import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";

const EditCategoryPopup = ({ setIsEdit, isEdit }) => {
  const navigate = useNavigate();

  const disableScrollOnOpen = () => {
    document.body.style.overflow = "hidden";
  };
  const disableScrollOnClose = () => {
    document.body.style.overflow = "auto";
  };
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
  return (
    <>
      <Modal
        onAfterOpen={disableScrollOnOpen}
        onAfterClose={disableScrollOnClose}
        isOpen={isEdit}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsEdit(false)}
        className="Login_Modal"
        overlayClassName="Login_Overlay"
      >
        <div>
          <div
            className="CrossIconStyle"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            x
          </div>
          <div className="Edit_Credential_Text_Style">Edit Category</div>
          <div className="Add_Edit_Category_Image_container">
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
          <div className="Login_input_container">
            <input
              type="text"
              className="Login_input__box"
              placeholder={"Name"}
            />
            {/* <div className="error__message">
              {ErrMsg ? ErrMsg : null}
            </div> */}
          </div>

          <div
            className="LoginButton"
            onClick={() => {
              navigate("/Dashboard");
              setIsEdit(false);
            }}
          >
            <IoMdAddCircle color="white" size={30} />
            <p className="Login_Text_Style">Submit</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditCategoryPopup;
