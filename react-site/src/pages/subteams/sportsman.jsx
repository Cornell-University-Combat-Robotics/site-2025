import SubteamPage from "../../components/SubteamPage";
import React from "react";

export default function Sportsman() {

    //array for subsystem with key-value pairs
    //same as kinetic???
    const subsystems = [
        { name: "Drivetrain", desc: "Encompasses the locomotion system of the robot. Sportsman meticulously selects the drive systems to ensure our robots are agile, responsive, and formidable on the battlefield." },
        { name: "Weapon", desc: "Encompasses the attacking method of the robot. Sportsman's arsenal is optimized for maximum impact and high energy spinning to destroy our opponents." },
        { name: "Chassis", desc: "Generates revenue, maintains corporate relations, delivers pitches, and identifies opportunities for members and the team.\n\nThis subsystem strives to expand our network and secure the resources necessary for CRC's growth." },
        { name: "Electronics", desc: "Encompasses the motors, ESCs, batteries, power switches, and wires of the robot for RC control. Sportsman ensures that all electronics are built to last through 3-minute matches." }
    ];

    return (
        <SubteamPage
            name="Sportsman"
            desc="Within the Sportsman Subteam, we specialize in the construction of 12lb low kinetic energy combat robots, including flippers, hammers, and other non-spinning innovations. Our mission is to design and build highly efficient robots with the capacity to dominate competitions."
            optionalDesc="Our designs emphasize strategic control, structural durability, and innovative adaptations to our opponents' tactical advancements. Sportsman is devoted to maintaining a collaboratively inclusive environment where applied engineering can flourish."
            subsystemIntro="Our approach to robot design revolves around four critical subsystems:" //TODO: make bold
            subsystems={subsystems}
            otherInterest={[
                "• Efficient and destructive robots, our Kinetic Subteam may be a better fit",
                "• Circuitry/autonomous robots, our Autonomous Subteam may be a better fit",
                "• Front-end or game programming, business, art/design, our Marketing Subteam may be a better fit"
            ]}
        />
    );
}