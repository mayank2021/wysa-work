import { Box, Button, Stack, Typography } from "@mui/material";
import { ThemeIcon, AddCustomTheme } from "./";
import { useThemeContext } from "../context/ThemeContext";
import { AddIcon } from "../icons";

const ChangeThemeModalContent = () => {
  const {
    themes,
    themeChange,
    handleThemeSelect,
    handleApplyTheme,
    addNewTheme,
    setAddNewTheme,
  } = useThemeContext();

  return (
    <Stack>
      <Box display="flex" justifyContent={"space-between"}>
        <Typography sx={{ fontSize: "1.2rem" }}>Themes</Typography>
        {!addNewTheme && (
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            size="small"
            onClick={() => setAddNewTheme(true)}
          >
            Add
          </Button>
        )}
      </Box>
      {addNewTheme ? (
        <AddCustomTheme />
      ) : (
        <Stack direction={"row"} gap={2} p={2} flexWrap={"wrap"}>
          {themes?.map((ele) => (
            <ThemeIcon
              key={ele.id}
              bubble={ele.bubble}
              background={ele.background}
              isActive={ele.id === themeChange?.id}
              onSelect={() => handleThemeSelect(ele)}
            />
          ))}
        </Stack>
      )}

      {!addNewTheme && (
        <Button
          variant="contained"
          size="small"
          sx={{ ml: "auto", px: 2 }}
          onClick={handleApplyTheme}
        >
          Apply
        </Button>
      )}
    </Stack>
  );
};

export default ChangeThemeModalContent;
