/* eslint-disable react/prop-types */
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuIcon } from "../icons";
import { IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Dropdown({
  dropdownItems = [],
  onSelect,
  icon,
  onClose,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ele) => {
    setAnchorEl(null);
    onClose?.();
    if (!ele.target) onSelect?.(ele);
  };

  return (
    <div>
      {icon ? (
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {icon}
        </IconButton>
      ) : (
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ background: theme.palette.primary.main }}
        >
          <MenuIcon
            sx={{
              color: theme.palette.primary.contrastText,
              "&:hover": { color: "#000" },
            }}
          />
        </IconButton>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ mt: icon ? 0 : 1, ml: icon ? 2 : 0 }}
      >
        {dropdownItems?.map((ele) => (
          <MenuItem key={ele} onClick={() => handleClose(ele)}>
            {ele}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
