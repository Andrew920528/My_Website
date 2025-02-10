import React, {forwardRef, useEffect, useState} from "react";
import me_drawing from "../images/me_art.png";
import Chip from "../components/Chip";
import {KeyboardDoubleArrowDown} from "@mui/icons-material";
import {useTheme} from "@emotion/react";
const Home = forwardRef(({startSectionRef}, ref) => {
  const theme = useTheme();
  const [position, setPosition] = useState({x: 0, y: 0});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({x: event.clientX, y: event.clientY});
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home" ref={ref}>
      <div
        className="glow"
        style={{
          top: position.y - 350,
          left: position.x - 350,
        }}
      ></div>
      <div className="home-canvas">
        <img src={me_drawing} alt="me_drawing" className="me-drawing"></img>
        <h1 className="title-text hello">Hello,</h1>
        <h1 className="title-text im">I'm</h1>
        <h1 className={`title-text andrew shadow-${theme.mode}`}>Andrew Hsu</h1>
      </div>
      <div className="explore-group">
        <Chip
          text="Explore"
          mode="big"
          onClick={() => {
            if (startSectionRef && startSectionRef.current) {
              startSectionRef.current.scrollIntoView({behavior: "smooth"});
            }
          }}
        />
        <KeyboardDoubleArrowDown className={`down-arrow`} />
      </div>
    </div>
  );
});

export default Home;
