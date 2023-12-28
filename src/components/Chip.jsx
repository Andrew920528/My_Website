import React from "react";
import {Box} from "@mui/material";
const Chip = ({text}) => {
  return (
    <div className="chip-border-wrap">
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: "50px",
        }}
      >
        <div className="chip">
          <p>{text}</p>
        </div>
      </Box>
    </div>
  );
};

export default Chip;
