import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ServicesHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#b4b4b4",
        pt: 14,
        pb: 12,
      }}
      className="bg-gradient-to-b from-purple-900 to-indigo-700  text-white "
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h5" color="#b4b4b4" paragraph>
          Services
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          We're Here To Effectively Manage Your CAPEX & OPEX Model
        </Typography>

        {/* Additional content or components for the services page */}
      </Container>
    </Box>
  );
};

export default ServicesHero;
