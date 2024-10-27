import React from "react";
import { NavLink } from "react-router-dom";
const SwiperCard = ({swiper, index}) => {
  return (
    <NavLink  to={swiper.to} className="s_card" key={swiper.id}>
      <div className="s_img">
        <img src={swiper.img} alt="" />
      </div>
      <div className="s_detail">
        <h2>{swiper.title}</h2>
        <p>{swiper.detail}</p>
      </div>
    </NavLink>
  );
};

export default SwiperCard;
