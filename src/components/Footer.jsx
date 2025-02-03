import React from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import {RESUME_LINK} from "../global/constants";

function viewResume() {
  window.open(RESUME_LINK, "_blank");
}
const Footer = ({darkMode, displayForMobile, displayForPC}) => {
  return (
    <div
      className={`footer ${displayForMobile ? "--pc-display-none" : ""} ${
        displayForPC ? "--mobile-display-none" : ""
      }`}
    >
      <div
        className="footer-line"
        style={{
          backgroundColor: darkMode
            ? "rgba(255,255,255,0.2)"
            : "rgba(0,0,0,0.2)",
        }}
      />
      <FooterIconWithLink
        icon={<Inventory2OutlinedIcon fontSize="inherit" />}
        text={"View Project Archive"}
        onClick={() => {
          console.log("view project archive");
        }}
      />
      <FooterIconWithLink
        icon={<SimCardDownloadOutlinedIcon fontSize="inherit" />}
        text={"View Resume"}
        onClick={() => {
          viewResume();
        }}
      />
      <div className="socialIcons">
        <GitHubIcon
          fontSize="inherit"
          onClick={() => {
            console.log("to github");
          }}
        />
        <LinkedInIcon
          fontSize="inherit"
          onClick={() => {
            console.log("to linkedin");
          }}
        />
        <EmailRoundedIcon
          fontSize="inherit"
          onClick={() => {
            console.log("to mail");
          }}
        />
      </div>
      <p className="copyright">© 2023 Andrew Hsu</p>
    </div>
  );
};

const FooterIconWithLink = ({icon, text, onClick}) => {
  return (
    <div className="footer-icon-with-link">
      <div className="icon">{icon}</div>
      <p
        className="text"
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Footer;
