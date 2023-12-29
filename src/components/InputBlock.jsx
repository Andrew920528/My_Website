import React from "react";
import TextField from "@mui/material/TextField";
const InputBlock = ({title, placeholder, multiline}) => {
  return (
    <div className="input-block">
      <p>{title}</p>
      <div className={`input-block-frame ${multiline && "multiline"}`}>
        <div className="input-field-container">
          {multiline ? (
            <textarea
              className="input-field"
              placeholder={placeholder}
            ></textarea>
          ) : (
            <input className="input-field" placeholder={placeholder} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBlock;
