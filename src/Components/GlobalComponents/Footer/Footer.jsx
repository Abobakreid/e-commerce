import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import FooterData from "./FooterData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="flex">
          {FooterData.map((footerData, index) => {
            return (
              <div className="f_link" key={index}>
                <h3>{footerData.label}</h3>
                <div className="links">
                  {footerData.subLinks.map((subLink, index) => {
                    return (
                      <NavLink to={subLink.to} key={index}>
                        {subLink.label}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faComment} />
          </a>
        </div>
        <div className="copyright text-center">
          © 2022 Allbirds, Inc. All Rights Reserved. Terms, Privacy &
          Accessibility
        </div>
      </div>
    </div>
  );
};

export default Footer;
