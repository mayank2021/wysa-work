import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { RemoveRedEyeIcon, VisibilityOffIcon } from "../icons";
import { useLoginContext } from "../context/LoginContext";
import { EditProfileButton } from "./";

const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const { userLogin } = useLoginContext();

  const theme = useTheme();
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Box
        sx={{
          width: 120,
          height: 120,
          borderRadius: 10000,
          background: theme.palette.primary.main,
          border: `2px solid ${theme.palette.primary.main}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <EditProfileButton onChange={setProfileImage} />
        {profileImage ? (
          <Box
            component={"img"}
            src={profileImage}
            sx={{
              objectFit: "cover",
              width: 120,
              height: 120,
              borderRadius: 10000,
              m: "5px auto",
            }}
          />
        ) : (
          <Typography
            sx={{ fontWeight: "bold", fontSize: "3rem", color: "#fff" }}
          >
            M
          </Typography>
        )}
      </Box>
      <TextField
        disabled
        size="small"
        margin="normal"
        fullWidth
        label="Email"
        value={userLogin?.email || "N/A"}
      />
      <TextField
        disabled
        size="small"
        margin="normal"
        fullWidth
        type={`${showPassword ? "text" : "password"}`}
        label="Password"
        value={userLogin.password || "N/A"}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="start"
              sx={{ cursor: "pointer" }}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default UserProfile;
