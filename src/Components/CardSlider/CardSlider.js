import React, { useState } from "react";
import "./cardSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
// import { AiOutlineHeart } from "react-icons/ai";

const CardSlider = ({
  activeSlide,
  setActiveSlide,
  navigationNextRef,
  navigationPrevRef,
}) => {
  let [isLike, setIsLike] = useState(0);

  const Data = [
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
      heading: "Metrola",
    },
  ];

  return (
    // <div style={{ flex: "1", marginLeft: "23%" }}>
    <Swiper
      effect={"coverflow"}
      modules={[Navigation]}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => {
        setActiveSlide(swiper.realIndex);
      }}
      className="mySwiper"
      onSwiper={(swiper) => {
        console.log("swiper.activeIndex", swiper.activeIndex);
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {Data.map((user) => (
        <SwiperSlide key={user.id}>
          <div className="PD_swiperMainContentContainer">
            <img src={user.image} alt="Image" className="PD_SwiperImageStyle" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    // </div>
  );
};

export default CardSlider;
