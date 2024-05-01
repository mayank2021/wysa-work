/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from "@mui/material";

const ModalContentWrapper = ({ children, heading, onClick }) => {
  return (
    <Stack>
      <Typography sx={{ fontSize: "1.2rem" }}>{heading}</Typography>
      {children}
      <Button
        variant="contained"
        size="small"
        sx={{ ml: "auto", px: 2 }}
        onClick={onClick}
      >
        Save
      </Button>
    </Stack>
  );
};

export default ModalContentWrapper;
