import React from "react";
import {Box} from "@mui/material";
const Chip = ({text, mode}) => {
  return (
    <div className={`chip-border-wrap ${mode}`}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: "48px",
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
