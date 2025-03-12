import SubteamPage from "../../components/SubteamPage";
import React from "react";

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
            otherInterest={[
                "• More intensive robot building and simpler circuits (with no coding), check out the Kinetic Subteam or the Sportsman Subteam",
                "• Coding for websites and video games, check out the Marketing Subteam",
                "• Business and corporate sponsorships, check out the Marketing Subteam",
                "• Art and design, check out the Marketing Subteam"
            ]}
        />
    );
}