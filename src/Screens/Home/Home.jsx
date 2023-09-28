import React, { useState } from "react";
import "./home.css";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";

const Home = () => {
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
      <section className="HomeMainHeaderContainer">
        <div className="HomeCategoryMainWrapper">
          {Data.map((item) => {
            return <CategorySlider />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
