/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { themesData } from "../Data/themes";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themes, setThemes] = useState(themesData);
  const [showModal, setShowModal] = useState(false);
  const [selectedTheme, setselectedTheme] = useState(themesData[0]);
  const [themeChange, setThemeChange] = useState(themesData[0]);
  const [addNewTheme, setAddNewTheme] = useState(false);

  useEffect(() => {
    const theme = JSON.parse(window.localStorage.getItem("APP_THEME"));
    const themes = JSON.parse(window.localStorage.getItem("APP_ALL_THEME"));
    if (theme) setselectedTheme(theme);
    if (themes) setThemes(themes);
  }, []);

  const handleThemeSelect = (theme) => {
    setThemeChange(theme);
  };

  const handleApplyTheme = () => {
    setselectedTheme(themeChange);
    setShowModal(false);
    window.localStorage.setItem("APP_THEME", JSON.stringify(themeChange));
  };

  const handleAddNewTheme = (newTheme) => {
    setAddNewTheme(false);
    const newThemes = [...themes, newTheme];
    setThemes(newThemes);
    window.localStorage.setItem("APP_ALL_THEME", JSON.stringify(newThemes));
  };

  return (
    <ThemeContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedTheme,
        handleThemeSelect,
        handleApplyTheme,
        themeChange,
        addNewTheme,
        setAddNewTheme,
        themes,
        handleAddNewTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
