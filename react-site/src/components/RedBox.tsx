import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface RedBoxProps {
  title: string; // Sponsor Us | Join Us
  text: string; // Description of the box
  word: string; // SPONSOR | APPLY
  link: string; // Link to the Sponsors and Apply page
}

export default function RedBox(props: RedBoxProps) {
  return (
    <Box bgcolor="#820002" sx={{ borderRadius: 5 }}>
      <Typography variant="h4" sx={{ mt: 2, textAlign: "center", fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>{props.title}</Typography>
      <Typography sx={{ textAlign: "left", padding: 2 }}>{props.text}</Typography>
      {/* TODO: Restrict link area to only the button. */}
      <Link to={props.link} style={{ color: "inherit" }}>
        <Box bgcolor="#B23030" sx={{ borderRadius: 12, width: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
          <Typography variant="h4" sx={{ textAlign: "center", padding: 1, fontFamily: 'Josefin Sans' }}>{props.word}</Typography>
        </Box>
      </Link>
      <Box height={20} />
    </Box>
  );
}
