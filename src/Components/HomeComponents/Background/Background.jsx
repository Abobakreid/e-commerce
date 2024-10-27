import React from "react";

const Background = ({ img, head, parag, btnOne, btnTwo }) => {
  return (
    <div className="background">
      <div className="b_img">
        <img src={img} alt="" />
      </div>
      <div className="text-center detail">
        <h2>{head}</h2>
        <p>{parag}</p>
        {btnOne ? <span className="shop">{btnOne}</span> : null}
        {btnTwo ? <span className="shop">{btnTwo}</span> : null}
      </div>
    </div>
  );
};

export default Background;
