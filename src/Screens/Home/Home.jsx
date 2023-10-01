import React, { useState } from "react";
import "./home.css";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import ProductComp from "../../Components/ProductComponant/ProductComp";
import {
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
} from "../../Assets";
import { FaSearch } from "react-icons/fa";

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
      image: mobile4,
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
      <section className="HomeMainHeaderContainer">
        <div className="Home_All_Category_Text_Style1">All Categories</div>
        <div className="HomeCategoryMainWrapper">
          {Data.map((item) => {
            return <CategorySlider />;
          })}
        </div>
        <div className="Home_Search_Container">
          <div className="Home_All_Category_Text_Style">All Products</div>
          <div className="search_container">
            <FaSearch size={18} className="search_icon" color="#7b7b7b" />
            <input
              type="text"
              placeholder="Search..."
              className="search_input"
            />
          </div>
        </div>
        <div className="HomeSelectCategoryDataShow">
          {array.map((item) => {
            return <ProductComp item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
