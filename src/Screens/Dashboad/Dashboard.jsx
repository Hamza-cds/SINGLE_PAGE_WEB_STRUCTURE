import React, { useState } from "react";
import "./dashboard.css";
import DashboardCategory from "../../Components/DashboardCatergory/DashboardCategory";
import DashboardProduct from "../../Components/DashboardProduct/DashboardProduct";

const Dashboard = () => {
  let [isActive, setIsActive] = useState(0);

  return (
    <>
      <section className="DashboardMainHeaderContainer">
        <section className="DashboardSideMainWrapper">
          <div className="CategoryButtonStyle">Logo here</div>
          <div
            className="CategoryButtonStyle"
            onClick={() => {
              setIsActive(0);
            }}
            style={{
              backgroundColor: isActive == 0 ? " #041514" : null,
              color: isActive == 0 ? "white" : "black",
            }}
          >
            Category
          </div>
          <div
            className="ProductButtonStyle"
            onClick={() => {
              setIsActive(1);
            }}
            style={{
              backgroundColor: isActive == 1 ? " #041514" : null,
              color: isActive == 1 ? "white" : "black",
            }}
          >
            Products
          </div>
          <div
            className="ProductButtonStyle"
            onClick={() => {
              setIsActive(2);
            }}
            style={{
              backgroundColor: isActive == 2 ? " #041514" : null,
              color: isActive == 2 ? "white" : "black",
            }}
          >
            Others
          </div>
          <div
            className="ProductButtonStyle"
            onClick={() => {
              setIsActive(3);
            }}
            style={{
              backgroundColor: isActive == 3 ? " #041514" : null,
              color: isActive == 3 ? "white" : "black",
            }}
          >
            Others
          </div>
        </section>
        <section className="DashboardRightContentWrapper">
          {isActive == 0 ? (
            <DashboardCategory />
          ) : isActive == 1 ? (
            <DashboardProduct />
          ) : null}
        </section>
      </section>
    </>
  );
};

export default Dashboard;
