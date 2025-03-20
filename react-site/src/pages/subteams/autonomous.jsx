import SubteamPage from "../../components/SubteamPage";
import React from "react";
import { LinkToOtherSubteams } from "../../components/SubteamPage";

export default function Autonomous() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Machine Learning / Computer Vision", desc: "Researches and builds the machine learning model to detect our robot from a camera outside of the box through object detection, as well as using computer vision algorithms to find the robot's position in the arena. " },
        { name: "Algorithm Design", desc: "Designs an algorithm that takes the positions of robots in the arena and other state variables as input to decide what our robot should do. This year, we plan to develop situational strategies through experimenting with simulated battles, possibly involving reinforcement learning." },
        { name: "Robot Construction", desc: "Researches robot types and components to purchase, as well as ensuring consistent communication between our sensors, computer, and motors. In the Spring semester, we will build and test our new robot." },
        //what about optional subtitle
    ];

    return (
        <SubteamPage
            name="Autonomous"
            desc="Within the Autonomous Subteam, we specialize in the construction of 3lb autonomous combat robots. Our mission is to build, wire, and code robots that can autonomously compete with conventional human-controlled robots."
            optionalDesc="Autonomous aims to push boundaries in the autonomous robotics field, challenging ourselves to see how well our algorithms can perform in the arena, and continuously enhancing them over time."
            subsystemIntro="Our approach to robot design revolves around three critical subsystems that all members are in together:" //TODO: make bold
            subsystems={subsystems}
            //To add hyperlink in middle of text by using <Link> component, must wrap in <p>
            otherInterest={[
                <p>
                    • More intensive robot building and simpler circuits (with no coding), check out the {LinkToOtherSubteams({ url: "/team/kinetic", text: "Kinetic" })} Subteam or the {LinkToOtherSubteams({ url: "/team/sportsman", text: "Sportsman" })} Subteam
                </p>,
                <p>
                    • Coding for websites and video games, check out the Marketing Subteam {LinkToOtherSubteams({ url: "/team/marketing", text: "Marketing" })} Subteam
                </p>,
                <p>
                    • Business and corporate sponsorships, check out the {LinkToOtherSubteams({ url: "/team/marketing", text: "Marketing" })} Subteam
                </p>
                ,
                <p>
                    Art and design, check out the {LinkToOtherSubteams({ url: "/team/marketing", text: "Marketing" })} Subteam
                </p>
            ]}
        />
    );
}

