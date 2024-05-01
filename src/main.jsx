import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { BubbleContextProvider } from "./context/BubbleContext.jsx";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2979ff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <ThemeContextProvider>
        <BubbleContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BubbleContextProvider>
      </ThemeContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
