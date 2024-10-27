import { faCircleQuestion, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faChevronDown,
  faChevronRight,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import links from "./NavData";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [chevr, setchevr] = useState("");
  const [chevrsub, setchevrsub] = useState("");
  const handelClick = (e, clas) => {
    document.querySelectorAll("." + clas).forEach((drop) => {
      if (drop.previousElementSibling.innerText !== e.target.innerText) {
        drop.classList.remove("active");
      }
    });

    e.target.nextElementSibling.classList.toggle("active");
    if (clas === "dropDownMen") {
      if (e.target.nextSibling.classList.contains("active")) {
        setchevr(e.target.innerText);
      } else {
        setchevr("");
      }
    } else {
      if (e.target.nextSibling.classList.contains("active")) {
        setchevrsub(e.target.innerText);
      } else {
        setchevrsub("");
      }
    }
  };
  const navIcons = [
    {
      to: "/userprofile",
      class: "userprofile",
      icon: faUser,
    },
    {
      to: "/question",
      class: "question",
      icon: faCircleQuestion,
    },
    {
      to: "/search",
      class: "search",
      icon: faSearch,
    },
  ];
  return (
    <div className="navbar">
      <div className="container content">
        <div
          className={openNav ? "bars switchIcon" : "bars_switchIcon switchIcon"}
          onClick={() => {
            setOpenNav(true);
          }}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        <div
          className={
            openNav ? "xmark switchIcon" : "xmark_switchIcon switchIcon"
          }
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </div>
        <div className="brand">
          <h3>
            <NavLink to="/">Slippers</NavLink>
          </h3>
        </div>
        <nav className={openNav ? "navlinks true" : "navlinks"}>
          {links.map((link, index) => {
            return (
              <div key={index} className="navlink">
                <div
                  className="linnk"
                  onClick={(e) => {
                    handelClick(e, "dropDownMen");
                  }}
                >
                  {link.label}
                  <span className="chev">
                    {link.label === chevr ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </div>
                <div className={"dropDownMen"}>
                  <div className="container content">
                    {link.childlinks.map((childlink, index) => {
                      return (
                        <div key={index} className="parentlink">
                          <div
                            className="linnk"
                            onClick={(e) => {
                              e.stopPropagation();
                              handelClick(e, "minDrop");
                            }}
                          >
                            {childlink.name.label}
                            <span className="chev">
                              {childlink.name.label === chevrsub ? (
                                <FontAwesomeIcon icon={faChevronDown} />
                              ) : (
                                <FontAwesomeIcon icon={faChevronRight} />
                              )}
                            </span>
                          </div>
                          <div className={"minDrop"}>
                            {childlink.appendlinks.map((appendlink, index) => {
                              return (
                                <NavLink key={index} to={appendlink.to}>
                                  {appendlink.label}
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="navIcon">
          {navIcons.map((navicon, index) => {
            return (
              <NavLink key={index} to={navicon.to} className={navicon.class}>
                <FontAwesomeIcon icon={navicon.icon} size="lg" />
              </NavLink>
            );
          })}
          <NavLink to={"/shop"} className="cartShop">
            <span></span>
            <FontAwesomeIcon icon={faCartShopping} className="cart" size="lg" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
