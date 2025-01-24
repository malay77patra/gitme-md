import React from "react";
import { Typography, AppBar, Container, Toolbar, Box } from "@mui/material";
import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";

const Navbar = ({ themeToggled, toggleTheme }) => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GITME.md
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Expand toggled={!themeToggled} toggle={toggleTheme} style={{ fontSize: '1.5rem', color: 'inherit' }} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
