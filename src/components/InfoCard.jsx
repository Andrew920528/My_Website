import React from "react";
import Frame from "./Frame";
import placeholder from "../images/placeholder.jpg";
import Chip from "./Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Link} from "@mui/material";
import {useTheme} from "@emotion/react";
const InfoCard = () => {
  const skills = [
    "React",
    "HTML",
    "JavaScript",
    "SASS",
    "PostgreSQL",
    "Postman",
    "Python",
    "API Development",
  ];
  const LinkWithIcon = ({icon, text, url}) => {
    const theme = useTheme();
    return (
      <div className="link-with-icon">
        <div className="icon-wrapper">{icon}</div>
        <a href={url} className={theme.mode}>
          {text}
        </a>
      </div>
    );
  };
  return (
    <div className="info-card">
      <Frame>
        <div className="image-wrapper">
          <img
            src={placeholder}
            alt="info-card"
            style={{objectPosition: "50% 50%"}} // default cropping pivot
          />
        </div>
        <div className="card-content">
          <div className="info-block-title">
            <p className="subtitle-1"> 2023 May - 2023 Aug </p>
            <h3> Nexuni Co. Ltd.</h3>
            <p className="subtitle-2">
              <i>Full Stack Software Developer</i>
            </p>
          </div>
          <div className="div-line" />
          <div className="info-block-description">
            <p>
              Working on an agile dev team, we built an image classification app
              that identify car parts and improved its accuracy to about 75%. I
              gained hands-on experience with using Google Cloud APIs and
              various software for image classification such as OpenCV and
              tensorflow.
            </p>
            <p className="learn-more">Learn More</p>
          </div>
          <div className="div-line" />
          <div className="chips">
            {skills.map((val) => {
              return <Chip text={val} key={"skill" + val} />;
            })}
          </div>
          <div className="div-line" />
          <div className="links">
            <LinkWithIcon
              icon={<OpenInNewIcon />}
              text={"Organization Site"}
              url={"a"}
            />
            <LinkWithIcon
              icon={<YouTubeIcon />}
              text={"Demo Video"}
              url={"b"}
            />
            <LinkWithIcon
              icon={<GitHubIcon />}
              text={"Github Repository"}
              url={"c"}
            />
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default InfoCard;
