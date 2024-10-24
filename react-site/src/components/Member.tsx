import { Box, Card, Typography } from "@mui/material";
import React from "react";

export interface MemberProps {
  imgSrc: string;
  name: string;
  position: string[];
}

export default function Member(props: MemberProps) {
  const { imgSrc, name, position } = props;
  // const size = props.size ?? "inherit";

  return (
    <Box sx={{ textAlign: "left" }}>
      <Card
        style={{
          borderRadius: "20%",
          border: "2px #4361EE solid",
          //width: '250px',
          height: '250px',
          overflow: "hidden",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={imgSrc} style={{ width: "100%", height: "100%" }} />
      </Card>
      <Typography sx={{ fontWeight: "bold", mt: "5px", ml: "5px" }}>{name}</Typography>
      <Typography sx={{ ml: "5px" }}> {position}</Typography>
    </Box>
  );
}
