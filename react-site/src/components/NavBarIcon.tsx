import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

// This component creates the small CRC icon on the left side of the navbar.
export default function NavBarIcon() {
  return (
    <Box sx={{ flex: 1, textAlign: "left" }}>
      <Link to="/">
        <img
          src="/logo.png"
          style={{
            width: "2rem",
            height: "2rem",
            padding: "0.75rem",
          }}
        />
      </Link>
    </Box>
  );
}
