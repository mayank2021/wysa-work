/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { useBubbleContext } from "../context/BubbleContext";
import { ModalContentWrapper } from "./";

const AddDelayModalContent = ({ onSave }) => {
  const { handleBubbleDelayChange, handleDelaySave } = useBubbleContext();

  return (
    <ModalContentWrapper
      heading="Set Bubble Delay"
      onClick={() => {
        handleDelaySave();
        onSave?.();
      }}
    >
      <TextField
        size="small"
        margin="normal"
        required
        fullWidth
        type="number"
        label="Delay (seconds)"
        onChange={handleBubbleDelayChange}
        autoFocus
      />
    </ModalContentWrapper>
  );
};

export default AddDelayModalContent;
