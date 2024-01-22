import React from "react";
import Frame from "./Frame";
import Chip from "./Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import {useTheme} from "@emotion/react";
const InfoCard = ({
  image,
  sub1,
  title,
  sub2,
  description,
  skills,
  site,
  youtube,
  github,
  pivot,
}) => {
  const LinkWithIcon = ({icon, text, url}) => {
    const theme = useTheme();
    return (
      <div className="link-with-icon">
        <div className="icon-wrapper">{icon}</div>
        <a href={url} className={theme.mode} target="_blank">
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
            src={image}
            alt="info-card"
            style={{objectPosition: pivot ? pivot : "50% 50%"}} // default cropping pivot
          />
        </div>
        <div className="card-content">
          <div className="info-block-title">
            <p className="subtitle-1">{sub1} </p>
            <h3> {title} </h3>
            <p className="subtitle-2">
              <i>{sub2}</i>
            </p>
          </div>
          <div className="div-line" />
          <div className="info-block-description">
            <p>{description}</p>
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
            {site && (
              <LinkWithIcon
                icon={<OpenInNewIcon />}
                text={"Organization Site"}
                url={site}
              />
            )}
            {youtube && (
              <LinkWithIcon
                icon={<YouTubeIcon />}
                text={"Demo Video"}
                url={youtube}
              />
            )}
            {github && (
              <LinkWithIcon
                icon={<GitHubIcon />}
                text={"Github Repository"}
                url={github}
              />
            )}
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default InfoCard;
