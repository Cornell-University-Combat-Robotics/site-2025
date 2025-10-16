import React from "react";
import { Theme } from "@emotion/react";
import { Button, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface NavBarButtonProps {
  variant: string; // "secondary" (regular) | "apply" (highlighted)
  bg: string;
  text: string; // About | Teams | Robots | Sponsors | Game | Apply
  to?: string; // /
  sx?: SxProps<Theme>;
}

/**
 * For use in conjunction with `NavBar` component.
 */
export default function NavBarButton(props: NavBarButtonProps) {
  // Because typescript can't recognize variant unions correctly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fixVariant: any = props.variant;

  return (
    <Button
      variant={fixVariant}
      sx={{
        blockSize: "fit-content",
        backgroundColor: props.bg,
        "&:hover": { backgroundColor: props.bg },
        ...props.sx,
      }}
      disableRipple
    >
      {/*if merch button clicked, then should open up in another page
      - note: cannot use if-statement in jsx component*/}
      {props.text.toLowerCase() === "merch" ? (
        <Link to={"https://www.redbubble.com/people/CombatRobots/shop"}
          target="_blank" //Opens in a new tab
          rel="noopener noreferrer" //Prevents security vulnerabilities when opening external links, apparently lol
          style={{ color: "white" }}>
          <Typography variant="desktopBody2" sx={{ margin: 0 }}>{props.text}</Typography>
        </Link>
      ) : (
        <Link
          // Sets the link of each NavBar button to the corresponding page, but with "About" to empty since it's the home page.
          to={"/" + (props.text.toLowerCase() == "about" ? "" : props.text.toLowerCase())}
          style={{ color: "inherit" }}
        >
          <Typography variant="desktopBody2" sx={{ margin: 0 }}>{props.text}</Typography>
        </Link>
      )}
    </Button>
  );
}
