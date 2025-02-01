import SubteamPage from "../../components/SubteamPage";
import React from "react";

export default function Kinetic() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Drivetrain", desc: "Encompasses the locomotion system of the robot. Kinetic meticulously selects the drive systems to ensure our robots are agile, responsive, and formidable on the battlefield." },
        { name: "Weapon", desc: "Encompasses the attacking method of the robot. Kinetic's arsenal is optimized for maximum impact and high energy spinning to destroy our opponents." },
        { name: "Chassis", desc: "Generates revenue, maintains corporate relations, delivers pitches, and identifies opportunities for members and the team.\n\nThis subsystem strives to expand our network and secure the resources necessary for CRC's growth." },
        { name: "Electronics", desc: "Encompasses the motors, ESCs, batteries, power switches, and wires of the robot for RC control. Kinetic ensures that all electronics are built to last through 3-minute matches." }
    ];

    return (
       <SubteamPage
                name = "Kinetic"
                desc = "Within the Kinetic Subteam, we specialize in the construction of 12lb high kinetic energy combat robots, including vertical spinners, horizontal spinners, full-body spinners, and drums. Our mission is to design and build highly efficient robots that excel in competitions."
                optionalDesc = "We prioritize three key elements: damage-dealing capability, durability, and adaptability. Kinetic is dedicated to maintaining a competitive edge in the world of robotic warfare."
                subsystemIntro = "Our approach to robot design revolves around four critical subsystems:" //TODO: make bold
                subsystems={subsystems}
                otherInterest={[
                    "• Creating creative/unique robots, our Sportsman Subteam may be a better fit",
                    "• Circuitry/autonomous robots, our Autonomous Subteam may be a better fit",
                    "• Front-end or game programming, business, art/design, our Marketing Subteam may be a better fit" 
                ]}
            />
    );
}