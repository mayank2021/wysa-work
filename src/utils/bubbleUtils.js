export const animation = {
  hidden: {
    opacity: 0,
    y: "100vw",
    transition: { duration: 1 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2 },
  },
};

export const btnAnimation = {
  hidden: {
    opacity: 0,
    x: "-70px",
    transition: { duration: 0.5 },
  },
  visible: {
    x: "10px",
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
