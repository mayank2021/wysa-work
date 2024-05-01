/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import { useBubbleContext } from "../context/BubbleContext";
import { btnAnimation, animation } from "../utils/bubbleUtils";
import { KeyboardArrowDownIcon } from "../icons";
import { motion } from "framer-motion";
import { Dropdown } from "./";

const Bubble = ({
  text,
  img,
  delay,
  bubbleDropdown = [],
  onBubbleDropdownSelect,
}) => {
  const { selectedTheme } = useThemeContext();
  const { key } = useBubbleContext();
  const [showMenu, setShowMenu] = useState(false);

  const getDelay = (delay) => {
    return {
      ...animation,
      visible: {
        ...animation.visible,
        transition: {
          ...animation.visible.transition,
          delay: delay,
        },
      },
    };
  };
  return (
    <motion.div
      key={key}
      variants={getDelay(delay)}
      initial={"hidden"}
      animate={"visible"}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <Stack
          sx={{
            background: selectedTheme?.bubble,
            borderRadius: 3,
            maxWidth: 290,
            p: 2,
            boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
            position: "relative",
            zIndex: 2,
          }}
        >
          {img && (
            <Box
              component={"img"}
              src={img}
              sx={{
                objectFit: "cover",
                width: "90%",
                m: "5px auto",
              }}
            />
          )}
          <Typography sx={{ fontWeight: 500 }}>{text}</Typography>
        </Stack>
        <motion.Box
          variants={btnAnimation}
          initial={"hidden"}
          animate={showMenu ? "visible" : "hidden"}
        >
          <Dropdown
            dropdownItems={bubbleDropdown}
            onSelect={(ele) => onBubbleDropdownSelect?.(ele)}
            onClose={() => setShowMenu(false)}
            icon={
              <Box
                component="span"
                sx={{
                  border: "1.5px solid #9e9e9e",
                  borderRadius: 10000,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 1,
                  cursor: "pointer",
                }}
              >
                <KeyboardArrowDownIcon sx={{ color: "#424242" }} />
              </Box>
            }
          />
        </motion.Box>
      </Stack>
    </motion.div>
  );
};

export default Bubble;
