import React, {forwardRef} from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import TranslateIcon from "@mui/icons-material/Translate";

const MobileTop = ({darkMode, toggleMode, language, theme}) => {
  return (
    <div
      className="mobile-top"
      style={{
        backgroundColor: darkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)",
      }}
    >
      <h3 className="name">Andrew Hsu</h3>
      <div className="icons">
        <IconButton onClick={() => {}} color="inherit">
          <TranslateIcon />
        </IconButton>
        <IconButton onClick={toggleMode} color="inherit">
          <Brightness7Icon />
        </IconButton>
      </div>
    </div>
  );
};

export default MobileTop;
