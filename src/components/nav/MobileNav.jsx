import React from "react";
import {useState, useEffect} from "react";
import SpeakerNotesRoundedIcon from "@mui/icons-material/SpeakerNotesRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import {useTheme} from "@emotion/react";
import {SectionLabel, SectionObj} from "./SectionLabel";

const MobileNav = ({refs, activeSection, setActiveSection}) => {
  const theme = useTheme();
  const gradient = "url('#linearColors')";
  const icons = [
    <HomeRoundedIcon sx={activeSection === 0 ? {fill: gradient} : {}} />,
    <SpeakerNotesRoundedIcon
      sx={activeSection === 1 ? {fill: gradient} : {}}
    />,
    <DocumentScannerRoundedIcon
      sx={activeSection === 2 ? {fill: gradient} : {}}
    />,
    <FolderCopyRoundedIcon sx={activeSection === 3 ? {fill: gradient} : {}} />,
    <SendRoundedIcon sx={activeSection === 4 ? {fill: gradient} : {}} />,
  ];
  const sections = [
    new SectionObj({id: 0, icon: icons[0], text: "Home"}),
    new SectionObj({id: 1, icon: icons[1], text: "About"}),
    new SectionObj({id: 2, icon: icons[2], text: "Experience"}),
    new SectionObj({id: 3, icon: icons[3], text: "Projects"}),
    new SectionObj({id: 4, icon: icons[4], text: "Contact"}),
  ];

  return (
    <div className={`mobile-nav ${theme.mode}`}>
      {sections.map((section) => {
        return (
          <SectionLabel
            key={section.id}
            icon={section.icon}
            text={section.text}
            onClick={() => {
              refs[section.id].current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
            }}
            selected={activeSection === section.id}
          />
        );
      })}
    </div>
  );
};

export default MobileNav;
