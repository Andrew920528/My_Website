import React from "react";
import {useState, useEffect} from "react";
import SpeakerNotesRoundedIcon from "@mui/icons-material/SpeakerNotesRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import variables from "../style/abstract/_variable.scss";
import {useTheme} from "@emotion/react";
const SectionLabel = ({icon, text, onClick, selected}) => {
  return (
    <div className="section-label" onClick={onClick}>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={variables.primary_v} />
          <stop offset={1} stopColor={variables.secondary_v} />
        </linearGradient>
      </svg>
      <div>{icon}</div>
      <p className={selected ? "selected" : ""}>{text}</p>
    </div>
  );
};

const MobileNav = () => {
  const [navValue, setNavValue] = useState(0);
  const theme = useTheme();
  const gradient = "url('#linearColors')";
  const icons = [
    <HomeRoundedIcon sx={navValue === 0 ? {fill: gradient} : {}} />,
    <SpeakerNotesRoundedIcon sx={navValue === 1 ? {fill: gradient} : {}} />,
    <DocumentScannerRoundedIcon sx={navValue === 2 ? {fill: gradient} : {}} />,
    <FolderCopyRoundedIcon sx={navValue === 3 ? {fill: gradient} : {}} />,
    <SendRoundedIcon sx={navValue === 4 ? {fill: gradient} : {}} />,
  ];

  return (
    <div className={`mobile-nav ${theme.mode}`}>
      <SectionLabel
        icon={icons[0]}
        text={"Home"}
        onClick={() => {
          setNavValue(0);
        }}
        selected={navValue === 0}
      />
      <SectionLabel
        icon={icons[1]}
        text={"About"}
        onClick={() => {
          setNavValue(1);
        }}
        selected={navValue === 1}
      />
      <SectionLabel
        icon={icons[2]}
        text={"Experience"}
        onClick={() => {
          setNavValue(2);
        }}
        selected={navValue === 2}
      />
      <SectionLabel
        icon={icons[3]}
        text={"Projects"}
        onClick={() => {
          setNavValue(3);
        }}
        selected={navValue === 3}
      />
      <SectionLabel
        icon={icons[4]}
        text={"Contact"}
        onClick={() => {
          setNavValue(4);
        }}
        selected={navValue === 4}
      />
    </div>
  );
};

export default MobileNav;
