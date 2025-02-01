import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ScrollControlledVideo from "./ScrollControlledVideo";

const StickyBox: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ height: "250vh", display: "flex", flexDirection: "column", alignItems: "center", }}>

        <Box
          sx={{
            position: "sticky",
            top: "50px",
            zIndex: 1000,
          }}
        >
          <ScrollControlledVideo />
        </Box>
      </Box>

    </Container>
  );
};

export default StickyBox;
