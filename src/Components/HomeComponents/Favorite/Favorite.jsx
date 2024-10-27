import React, { useState } from "react";
import Fcard from "./Fcard";
const Favorite = () => {
  const [tagName, setTagName] = useState("For Everyday");
  const handelClick = (e) => {
    document.querySelectorAll(".f_tab").forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  return (
    <div className="favorite">
      <div className="container">
        <h2 className="text-center">Our Favorites</h2>
        <div className="f_tabs">
          <div className="container">
            <span
              className="f_tab active"
              onClick={(e) => {
                setTagName("For Everyday");
                handelClick(e);
              }}
            >
              For Everyday
            </span>
            <span
              className="f_tab"
              onClick={(e) => {
                setTagName("For the Rain");
                handelClick(e);
              }}
            >
              For the Rain
            </span>
            <span
              className="f_tab"
              onClick={(e) => {
                handelClick(e);
                setTagName("For Running");
              }}
            >
              For Running
            </span>
          </div>
        </div>
        <div className="f_cards">
          <Fcard tagName={tagName} />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
