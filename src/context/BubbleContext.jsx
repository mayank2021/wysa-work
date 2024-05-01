/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { bubblesData } from "../Data/chat";
import useFileChange from "../hooks/useFileChange";

const BubbleContext = createContext();

export const BubbleContextProvider = ({ children }) => {
  const [bubbles, setBubbles] = useState(bubblesData);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const [bubbleImageUrl, setBubbleImageUrl] = useState(null);
  const [bubbleDelay, setBubbleDelay] = useState(null);
  const [key, setKey] = useState(0);

  const { handleFileUpload } = useFileChange();

  const onFileUpload = (event) => {
    handleFileUpload(event, setBubbleImageUrl);
  };

  const handleImageSave = () => {
    const updatedBubbles = bubbles?.map((ele) => {
      if (ele.id === selectedBubble?.id) {
        return {
          ...ele,
          img: bubbleImageUrl,
        };
      }
      return ele;
    });
    setBubbles(updatedBubbles);
    setSelectedBubble(null);
    setBubbleImageUrl(null);
  };

  const handleBubbleDelayChange = (e) => {
    let { value } = e.target;
    setBubbleDelay(value);
  };

  const handleDelaySave = () => {
    const updatedBubbles = bubbles?.map((ele) => {
      if (ele.id === selectedBubble?.id) {
        return {
          ...ele,
          delay: bubbleDelay,
        };
      }
      return ele;
    });
    setKey((prev) => prev + 1);
    setBubbles(updatedBubbles);
    setSelectedBubble(null);
    setBubbleDelay(null);
  };
  return (
    <BubbleContext.Provider
      value={{
        bubbles,
        bubbleImageUrl,
        setBubbleImageUrl,
        onFileUpload,
        setSelectedBubble,
        handleImageSave,
        handleBubbleDelayChange,
        handleDelaySave,
        key,
      }}
    >
      {children}
    </BubbleContext.Provider>
  );
};

export const useBubbleContext = () => useContext(BubbleContext);
