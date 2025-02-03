import React from "react";
import SpeakerNotesRoundedIcon from "@mui/icons-material/SpeakerNotesRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import variables from "../../style/abstract/_variable.scss";
import {SectionLabel, SectionObj} from "./SectionLabel";
const PCNav = ({
  refs,
  activeSection,
  setActiveSection,
  setShowPage,
  scrollableContainerRef,
}) => {
  const gradient = "url('#linearColors-pc')";
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
    <div className="pc-nav">
      <svg width={0} height={0}>
        <linearGradient id="linearColors-pc" x1={0} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={variables.primary_v} />
          <stop offset={1} stopColor={variables.secondary_v} />
        </linearGradient>
      </svg>
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
              setActiveSection(section.id);
              if (section.id !== 0) {
                setShowPage(section.id);
                if (scrollableContainerRef.current) {
                  scrollableContainerRef.current.scrollTop = 0;
                }
              }
            }}
            selected={activeSection === section.id}
          />
        );
      })}
    </div>
  );
};

export default PCNav;
