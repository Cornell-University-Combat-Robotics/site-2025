import SubteamPage from "../../components/SubteamPage";
import React from "react";
import { LinkToOtherSubteams } from "../../components/SubteamPage";

export default function Mechanical() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Drivetrain", desc: "The locomotion system of the robot. Mechanical meticulously selects the drive systems to ensure our robots are agile, responsive, and formidable on the battlefield." },
        { name: "Weapon", desc: "The attacking method of the robot. Mechanical's arsenal is optimized for maximum impact and high energy spinning to destroy our opponents." },
        { name: "Chassis", desc: "The shell, armor, and internal structure of the robot. Mechanical engineers these elements to withstand the rigors of intense battles and outlast the competition." },
        { name: "Electronics", desc: "The motors, ESCs, batteries, power switches, and wires of the robot for RC control. Mechanical ensures that all electronics are built to last through 3-minute matches." }
    ];

    return (
        <SubteamPage
            name="Mechanical"
            desc="Within the Mechanical Subteam, we design and build 12lb high kinetic energy combat robots, including vertical spinners, horizontal spinners, full-body spinners, and drums. As our team has grown, we expanded from two to three Mechanical subteams, allowing each subteam to take ownership of a new robot design."
            optionalDesc="Each of our three subteams develops its own 12lb robot, focusing on three key elements: damage-dealing capability, durability, and adaptability. This structure allows us to bring three new designs to competition each year while continuing to revamp and improve previous robots."
            subsystemIntro="Our approach to robot design revolves around four critical subsystems:"
            subsystems={subsystems}
            otherInterest={[
                
                <p>
                    • Circuitry/autonomous robots, our {LinkToOtherSubteams({ url: "/team/autonomous", text: "Autonomous" })} Subteam may be a better fit
                </p>
                ,
                <p>
                    • Front-end or game programming, business, art/design, our {LinkToOtherSubteams({ url: "/team/marketing", text: "Marketing" })} Subteam may be a better fit
                </p>
            ]}
        />
    );
}