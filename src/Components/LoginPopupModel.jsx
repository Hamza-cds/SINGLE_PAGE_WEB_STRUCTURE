import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LoginPopupModel = ({ setIsLogin, isLogin }) => {
  const navigate = useNavigate();

  const disableScrollOnOpen = () => {
    document.body.style.overflow = "hidden";
  };
  const disableScrollOnClose = () => {
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <Modal
        onAfterOpen={disableScrollOnOpen}
        onAfterClose={disableScrollOnClose}
        isOpen={isLogin}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsLogin(false)}
        className="Login_Modal"
        overlayClassName="Login_Overlay"
      >
        <div>
          <div
            className="CrossIconStyle"
            onClick={() => {
              setIsLogin(false);
            }}
          >
            x
          </div>
          <div className="Credential_Text_Style">
            Please enter your credentials
          </div>
          <div className="Login_input_container">
            <input
              type="text"
              className="Login_input__box"
              placeholder={"Email/Phone"}
            />
            {/* <div className="error__message">
              {ErrMsg ? ErrMsg : null}
            </div> */}
          </div>
          <div className="Login_input_container">
            <input
              type="text"
              className="Login_input__box"
              placeholder={"Password"}
            />
            {/* <div className="error__message">
              {ErrMsg ? ErrMsg : null}
            </div> */}
          </div>

          <div
            className="LoginButton"
            onClick={() => {
              navigate("/Dashboard");
              setIsLogin(false);
            }}
          >
            <BiLogIn color="white" size={30} />
            <p className="Login_Text_Style">Login</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginPopupModel;
