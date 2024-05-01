/* eslint-disable react/prop-types */
import { Stack, Box, IconButton } from "@mui/material";
import { useBubbleContext } from "../context/BubbleContext";
import { DeleteOutlineOutlinedIcon } from "../icons";
import { useTheme } from "@emotion/react";
import { ModalContentWrapper } from "./";

const AddImageModalContent = ({ onSave }) => {
  const { bubbleImageUrl, setBubbleImageUrl, onFileUpload, handleImageSave } =
    useBubbleContext();
  const theme = useTheme();

  return (
    <ModalContentWrapper
      heading="Upload Image"
      onClick={() => {
        handleImageSave();
        onSave?.();
      }}
    >
      {bubbleImageUrl ? (
        <Stack
          direction="row-reverse"
          alignItems="flex-start"
          gap={2}
          p={2}
          sx={{ boxSizing: "border-box" }}
        >
          <IconButton
            onClick={() => {
              setBubbleImageUrl(null);
            }}
          >
            <DeleteOutlineOutlinedIcon sx={{ fontSize: 28, color: "error" }} />
          </IconButton>
          <img
            style={{ height: 165, width: 200, objectFit: "contain" }}
            src={bubbleImageUrl}
            alt="Uploaded Image"
            height="300"
          />
        </Stack>
      ) : (
        <Box
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 1,
            p: 1,
            my: 1,
          }}
        >
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            name="bubbleColor"
            autoFocus
            onChange={onFileUpload}
          />
        </Box>
      )}
    </ModalContentWrapper>
  );
};

export default AddImageModalContent;
