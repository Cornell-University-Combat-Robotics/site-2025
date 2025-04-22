import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export interface IconButtonProps {
  image: string; // "secondary" (regular) | "apply" (highlighted)
  to: string; // /
  width: string;
  height: string;
  padding?: string;
}

// This component creates the small CRC icon on the left side of the navbar.
export default function IconButton(props: IconButtonProps) {
  return (
    <Box sx={{ flex: 1, textAlign: "left" }}>
      <Link to={props.to}>
        <img
          src={props.image}
          style={{
            width: props.width,
            height: props.height,
            padding: props.padding || "0.75rem",
          }}
        />
      </Link>
    </Box>
  );
}
