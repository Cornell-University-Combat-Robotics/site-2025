import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ScrollControlledVideo from "./ScrollControlledVideo";

const StickyBox: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "100%" }}>
        <Box
          sx={{
            position: "sticky",
            top: "50px",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <ScrollControlledVideo />
        </Box>
      </Box>
    </Container>
  );
};

export default StickyBox;
