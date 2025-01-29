import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <Box>
        <img src="/logo.svg" alt="GITME.md Logo" style={{ width: "150px", marginBottom: "20px" }} />
      </Box>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to GITME.md
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Generate your GitHub profile README with ease.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Create a stunning GitHub profile README in just a few clicks. Customize it to showcase your projects, skills, and achievements.
      </Typography>
      <Link to="/demo">
        <Button variant="contained" color="primary" size="large" style={{ marginTop: "20px" }}>
          Get Started
        </Button>
      </Link>
    </Container>
  );
};

export default Landing;
