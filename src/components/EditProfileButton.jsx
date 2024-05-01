/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import useFileChange from "../hooks/useFileChange";
import { CreateIcon } from "../icons";

const EditProfileButton = ({ onChange }) => {
  const { handleFileUpload } = useFileChange();

  return (
    <>
      <input
        type="file"
        style={{
          width: 32,
          position: "absolute",
          top: "-3%",
          right: "-5%",
          opacity: 0,
        }}
        accept="image/png, image/gif, image/jpeg"
        name="bubbleColor"
        autoFocus
        onChange={(event) => handleFileUpload(event, onChange)}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          background: "#000",
          pointerEvents: "none",
          "&:hover": {
            background: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <CreateIcon size="small" sx={{ color: "#fff", fontSize: "1rem" }} />
      </IconButton>
    </>
  );
};

export default EditProfileButton;
