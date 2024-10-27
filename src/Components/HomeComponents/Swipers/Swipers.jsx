import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import img0 from "../../../assets/6.avif";
import img1 from "../../../assets/7.avif";
import img2 from "../../../assets/8.avif";
import SwiperCard from "./SwiperCard";
const Swipers = ({ headTitle }) => {
  const breakpointss = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  const swiperData = [
    {
      id: "1",
      to: "/shop",
      img: img0,
      title: "Women's Wool Breezer",
      detail: "Limited Edition Color, Natural Black",
    },
    {
      id: "2",
      to: "/shop",
      img: img1,
      title: "Women's Wool Breezer",
      detail: "Limited Edition Color, Natural Black",
    },
    {
      id: "3",
      to: "/shop",
      img: img2,
      title: "Women's Wool Breezer",
      detail: "Limited Edition Color, Natural Black",
    },
    {
      id: "4",
      to: "/shop",
      img: img0,
      title: "Women's Wool Breezer",
      detail: "Limited Edition Color, Natural Black",
    },
    {
      id: "5",
      to: "/shop",
      img: img1,
      title: "Women's Wool Breezer",
      detail: "Limited Edition Color, Natural Black",
    },
    {
      id: "6",
      to: "/shop",
      img: img2,
      title: "Women's Wool Breezer",
      detail: "Limited Edition Color, Natural Black",
    },
  ];

  return (
    <div className="swipers">
      <div className="container">
        <h2>{headTitle}</h2>
        <Swiper
          breakpoints={breakpointss}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {swiperData.map((swiper, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperCard swiper={swiper} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
