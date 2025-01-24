import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "./components/Navbar"; // Import Navbar


function App() {
  const userPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || (userPrefersDark ? "dark" : "light");
  });

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);


  const themeToggled = themeMode === "dark";
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar themeToggled={themeToggled} toggleTheme={toggleTheme} />
    </ThemeProvider >
  );
}

export default App;
