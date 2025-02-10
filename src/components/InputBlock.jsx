import React from "react";
import {useTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
const InputBlock = ({title, placeholder, multiline, ...rest}) => {
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
              {...rest}
            ></textarea>
          ) : (
            <input
              className={`input-field ${theme.mode}`}
              placeholder={placeholder}
              {...rest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBlock;
