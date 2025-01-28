import React, {forwardRef} from "react";
import me_drawing from "../images/me_art.png";
import Chip from "../components/Chip";
import {KeyboardDoubleArrowDown} from "@mui/icons-material";
import {useTheme} from "@emotion/react";
const Home = forwardRef(({startSectionRef}, ref) => {
  const theme = useTheme();
  return (
    <div className="home" ref={ref}>
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
