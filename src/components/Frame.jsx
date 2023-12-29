import React from "react";
import {Box} from "@mui/material";
const Frame = ({type, children}) => {
  return (
    <div className={`frame-border-wrap ${type}`}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: "5px",
        }}
      >
        <div className="frame">{children}</div>
      </Box>
    </div>
  );
};

export default Frame;
