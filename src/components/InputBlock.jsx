import React from "react";
import {useTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
const InputBlock = ({title, placeholder, multiline}) => {
  const theme = useTheme();

  return (
    <div className="input-block">
      <p>{title}</p>
      <div className={`input-block-frame ${multiline && "multiline"}`}>
        <div className="input-field-container">
          {multiline ? (
            <textarea
              className={`input-field ${theme.mode}`}
              placeholder={placeholder}
            ></textarea>
          ) : (
            <input
              className={`input-field ${theme.mode}`}
              placeholder={placeholder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBlock;
