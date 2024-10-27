import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../../assets/2.avif";
import img1 from "../../../assets/3.avif";
import img2 from "../../../assets/4.avif";

const Fcard = ({ tagName }) => {
  const cardsData = [
    {
      id: "1",
      cardName: "Tree Flyer",
      cardDet: "Light, Bouncy, Long Distance Runs",
      cardIcon: faSeedling,
      cardImg: img,
      cardTagName: "For Everyday",
    },
    {
      id: "2",
      cardName: "Trail Runner SWT",
      cardDet: "Durable, Grippy, Off Road Terrain",
      cardIcon: faSeedling,
      cardImg: img1,
      cardTagName: "For the Rain",
    },
    {
      id: "3",
      cardName: "Tree Dasher 2",
      cardDet: "Comfy, Breezy, Everyday Runs",
      cardIcon: faSeedling,
      cardImg: img2,
      cardTagName: "For Running",
    },
    {
      id: "4",
      cardName: "Trail Runner SWT",
      cardDet: "Durable, Grippy, Off Road Terrain",
      cardIcon: faSeedling,
      cardImg: img1,
      cardTagName: "For the Rain",
    },
    {
      id: "5",
      cardName: "Tree Dasher 2",
      cardDet: "Comfy, Breezy, Everyday Runs",
      cardIcon: faSeedling,
      cardImg: img2,
      cardTagName: "For Running",
    },
    {
      id: "6",
      cardName: "Tree Flyer",
      cardDet: "Light, Bouncy, Long Distance Runs",
      cardIcon: faSeedling,
      cardImg: img,
      cardTagName: "For Everyday",
    },
    {
      id: "7",
      cardName: "Tree Flyer",
      cardDet: "Light, Bouncy, Long Distance Runs",
      cardIcon: faSeedling,
      cardImg: img,
      cardTagName: "For Everyday",
    },
    {
      id: "8",
      cardName: "Trail Runner SWT",
      cardDet: "Durable, Grippy, Off Road Terrain",
      cardIcon: faSeedling,
      cardImg: img1,
      cardTagName: "For the Rain",
    },
    {
      id: "9",
      cardName: "Tree Dasher 2",
      cardDet: "Comfy, Breezy, Everyday Runs",
      cardIcon: faSeedling,
      cardImg: img2,
      cardTagName: "For Running",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => {
        if (tagName === card.cardTagName) {
          return (
            <div className="f_card" key={index}>
              <div className="f_img">
                <img src={card.cardImg} alt="" />
                <div className="f_btns">
                  <span className="shop">shop Men</span>
                  <span className="shop">shop Women</span>
                </div>
              </div>
              <div className="f_card_de">
                <h3>{card.cardName}</h3>
                <div className="c_det">
                  <FontAwesomeIcon icon={card.cardIcon} />
                  <p>{card.cardDet}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Fcard;
