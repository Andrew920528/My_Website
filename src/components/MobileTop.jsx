import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import IconButton from "@mui/material/IconButton";

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
        <IconButton onClick={toggleMode} color="inherit">
          <Brightness4Icon />
        </IconButton>
      </div>
    </div>
  );
};

export default MobileTop;
