import React from "react";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <div className="cont">
          <h1>Light On Your Feet</h1>
          <p>
            Comfortable and very layerable, our Tree styles take you from crisp
            to cold.
          </p>
          <div className="c_btn">
            <NavLink to="/shopmen" className="shop">
              Shop Men
            </NavLink>
            <NavLink to="/shopwomen" className="shop">
              Shop Women
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
