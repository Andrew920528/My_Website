import {Box} from "@mui/material";
import {useState} from "react";
const RectButton = ({text, onClick}) => {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={`rect-button ${loading && "disable"}`}
      onClick={async (e) => {
        if (!loading) {
          setLoading(true);
          await onClick(e);
          setLoading(false);
        }
      }}
    >
      <div className="rect-button-wrapper">
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: "5px",
          }}
        >
          <p>{text}</p>{" "}
        </Box>
      </div>
    </button>
  );
};

export default RectButton;
