import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/components.css'

import Landing from "./components/Landing";
import Template from "./Template";

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
      <Container sx={{
        maxWidth: '1012px',
        padding: '24px'
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/demo" element={<Template />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider >
  );
}

export default App;
