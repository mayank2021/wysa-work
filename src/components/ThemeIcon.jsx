/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";

const iconStyle = {
  width: 25,
  height: 45,
};

const ThemeIcon = ({ bubble, background, isActive, onSelect }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        border: `3px solid ${isActive ? theme.palette.primary.main : "#000"}`,
        width: 50,
        borderRadius: 1000,
        cursor: "pointer",
      }}
      onClick={onSelect}
    >
      <Box
        sx={{
          ...iconStyle,
          borderTopLeftRadius: 10000,
          borderBottomLeftRadius: 10000,
          background: bubble,
        }}
      />
      <Box
        sx={{
          ...iconStyle,
          borderTopRightRadius: 10000,
          borderBottomRightRadius: 10000,
          backgroundImage: background,
          background: background,
        }}
      />
    </Stack>
  );
};

export default ThemeIcon;
