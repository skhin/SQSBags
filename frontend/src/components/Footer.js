import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer__wrapper">
          <div className="footer__left">
            About the Project: For our 3rd project for our General Assembly's
            SEI Bootcamp, we were tasked to work in a group of 3 to come up with
            a MERN project. Combining our love of online shopping, we decided to
            make an e-commerce store selling bags. That was the birth of SQS
            BAGS (Sean Qizhen, Sireena Bags), your One-Stop Bagging Rights.
          </div>
          <div className="footer__center">
            {" "}
            <img className="nav__logo sqs__logo" src={logo} alt="SQS_Logo" />
          </div>
          <div className="footer__right">
            Contact with us {""}
            <FacebookIcon /> {""} <LinkedInIcon /> {""} <InstagramIcon /> {""}{" "}
            <GitHubIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
