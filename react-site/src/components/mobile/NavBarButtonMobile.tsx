import React from "react";
import { Theme } from "@emotion/react";
import { Button, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface NavBarButtonMobileProps {
    variant: string; // "secondary" (regular) | "apply" (highlighted)
    bg: string;
    text: string; // About | Teams | Robots | Sponsors | Game | Apply
    close?: () => void;
    to?: string; // /
    sx?: SxProps<Theme>;
}

/**
 * For use in conjunction with `NavBar` component.
 */
export default function NavBarButtonMobile(props: NavBarButtonMobileProps) {
    // Because typescript can't recognize variant unions correctly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fixVariant: any = props.variant;
    const text = props.text.toLowerCase();

    const processClick = () => {
        console.log("process click");
        props.close?.();
    }

    return (
        <Button
            variant={fixVariant}
            fullWidth={true}
            onClick={processClick}
            sx={{
                marginLeft: '10%',
                justifyContent: "flex-start",
                backgroundColor: props.bg,
                "&:hover": { backgroundColor: props.bg },
                ...props.sx,
            }}
        >
            {/*if merch button clicked, then should open up in another page
      - note: cannot use if-statement in jsx component*/}
            {(text === "merch" ? (
                <Link to={"https://www.redbubble.com/people/CombatRobots/shop"}
                    target="_blank" //Opens in a new tab
                    rel="noopener noreferrer" //Prevents security vulnerabilities when opening external links, apparently lol
                    style={{ color: "white" }}>
                    <Typography variant="mobileH2" sx={{ margin: 0, textAlign: 'left' }}>{props.text}</Typography>
                </Link>
            ) : (
                <Link
                    // Sets the link of each NavBar button to the corresponding page, but with "About" to empty since it's the home page.
                    to={"/" + (text == "about" ? "" : text)}
                    style={{ color: "white" }}
                >
                    <Typography variant="mobileH2" sx={{ margin: 0, textAlign: 'left' }}>{props.text}</Typography>
                </Link>
            ))}
        </Button>
    );
}
