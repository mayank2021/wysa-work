import { Box, Button, TextField } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const AddCustomTheme = () => {
  const { setAddNewTheme, handleAddNewTheme } = useThemeContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let newTheme = {
      id: Date.now(),
      bubble: data.get("bubbleColor"),
      background: data.get("background"),
      text: data.get("text"),
    };
    handleAddNewTheme?.(newTheme);
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        size="small"
        margin="normal"
        required
        fullWidth
        type="color"
        label="Bubble color"
        name="bubbleColor"
        autoFocus
      />
      <TextField
        size="small"
        margin="normal"
        required
        fullWidth
        type="color"
        name="background"
        label="Background Color"
      />
      <TextField
        size="small"
        margin="normal"
        required
        fullWidth
        type="color"
        name="text"
        label="Text Color"
      />
      <Box display={"flex"} justifyContent={"flex-end"} gap={1}>
        <Button
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => setAddNewTheme(false)}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddCustomTheme;
