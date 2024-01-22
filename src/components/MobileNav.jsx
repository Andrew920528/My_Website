import {Box, Tab, Tabs} from "@mui/material";
import React from "react";
import {useState} from "react";
import SpeakerNotesRoundedIcon from "@mui/icons-material/SpeakerNotesRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const SectionLabel = ({icon, text, selected}) => {
  return (
    <div className="section-label">
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="rgba(241,184,74,1)" />
          <stop offset={1} stopColor="rgba(207,113,8,1)" />
        </linearGradient>
      </svg>
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

const MobileNav = () => {
  const [navValue, setNavValue] = useState(0);
  const handleChange = (event, newValue) => {
    setNavValue(newValue);
  };

  const gradient = "url('#linearColors')";
  const icons = [
    <HomeRoundedIcon sx={{fill: gradient}} />,
    <SpeakerNotesRoundedIcon sx={{fill: gradient}} />,
    <DocumentScannerRoundedIcon sx={{fill: gradient}} />,
    <FolderCopyRoundedIcon sx={{fill: gradient}} />,
    <SendRoundedIcon sx={{fill: gradient}} />,
  ];

  return (
    <div className="mobile-nav">
      <SectionLabel icon={icons[2]} text={"Home"} />
      {/* <Box>
        <Tabs
          value={navValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" value={0}></Tab>
          <Tab label="Item Two" value={1} />
          <Tab label="Item Three" value={2} />
          <div value={3}>ffefef</div>
        </Tabs>
      </Box> */}
    </div>
  );
};

export default MobileNav;
