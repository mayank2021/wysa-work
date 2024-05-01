import { Stack } from "@mui/material";
import { useState } from "react";
import {
  Bubble,
  Dropdown,
  ModalComp,
  UserProfile,
  ChangeThemeModalContent,
  AddImageModalContent,
  AddDelayModalContent,
} from "../components";
import { useThemeContext } from "../context/ThemeContext";
import { useLoginContext } from "../context/LoginContext";
import { useBubbleContext } from "../context/BubbleContext";

const homeContainer = (selectedTheme) => ({
  backgroundImage: selectedTheme.background,
  background: selectedTheme.background,
  color: selectedTheme.text,
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  py: 10,
});

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { showModal, setShowModal, selectedTheme, setAddNewTheme } =
    useThemeContext();
  const { setUserLogin } = useLoginContext();
  const { bubbles, setSelectedBubble, setBubbleImageUrl } = useBubbleContext();

  const hanldeDropdownSelection = (option, bubble) => {
    if (option === "Logout") {
      setUserLogin(false);
      localStorage.clear();
      window.location.reload();
      return;
    }
    setShowModal(true);
    setSelectedOption(option);
    if (bubble) setSelectedBubble(bubble);
  };

  const getModalContent = (option) => {
    if (option === "Profile") return <UserProfile />;
    if (option === "Change Theme")
      return <ChangeThemeModalContent onSave={() => setShowModal(false)} />;
    else if (option === "Set Delay")
      return <AddDelayModalContent onSave={() => setShowModal(false)} />;
    else if (option === "Add Image")
      return <AddImageModalContent onSave={() => setShowModal(false)} />;
    else return <h3>Unexpected Behaviour: Something went wrong</h3>;
  };

  const onModalClose = () => {
    setShowModal(false);
    setSelectedBubble(null);
    setBubbleImageUrl(null);
    setAddNewTheme(false);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={homeContainer(selectedTheme)}
    >
      <Stack sx={{ position: "fixed", top: "5%", right: "5%" }}>
        <Dropdown
          dropdownItems={["Profile", "Change Theme", "Logout"]}
          onSelect={hanldeDropdownSelection}
        />
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={2}
      >
        {bubbles?.map((bubble) => (
          <Bubble
            key={bubble.id}
            text={bubble.text}
            img={bubble?.img}
            delay={bubble.delay}
            bubbleDropdown={["Set Delay", "Add Image"]}
            onBubbleDropdownSelect={(option) =>
              hanldeDropdownSelection(option, bubble)
            }
          />
        ))}
      </Stack>
      <ModalComp open={showModal} onClose={onModalClose}>
        {getModalContent(selectedOption)}
      </ModalComp>
    </Stack>
  );
};

export default HomePage;
