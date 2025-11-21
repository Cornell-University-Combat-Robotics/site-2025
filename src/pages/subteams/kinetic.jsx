import SubteamPage from "../../components/SubteamPage";
import React from "react";
import { LinkToOtherSubteams } from "../../components/SubteamPage";

export default function Kinetic() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Drivetrain", desc: "The locomotion system of the robot. Kinetic meticulously selects the drive systems to ensure our robots are agile, responsive, and formidable on the battlefield." },
        { name: "Weapon", desc: "The attacking method of the robot. Kinetic's arsenal is optimized for maximum impact and high energy spinning to destroy our opponents." },
        { name: "Chassis", desc: "The shell, armor, and internal structure of the robot. Kinetic engineers these elements to withstand the rigors of intense battles and outlast the competition." },
        { name: "Electronics", desc: "The motors, ESCs, batteries, power switches, and wires of the robot for RC control. Kinetic ensures that all electronics are built to last through 3-minute matches." }
    ];

    return (
        <SubteamPage
            name="Kinetic"
            desc="Within the Kinetic Subteam, we specialize in the construction of 12lb high kinetic energy combat robots, including vertical spinners, horizontal spinners, full-body spinners, and drums. Our mission is to design and build highly efficient robots that excel in competitions."
            optionalDesc="We prioritize three key elements: damage-dealing capability, durability, and adaptability. Kinetic is dedicated to maintaining a competitive edge in the world of robotic warfare."
            subsystemIntro="Our approach to robot design revolves around four critical subsystems:" //TODO: make bold
            subsystems={subsystems}
            otherInterest={[
                <p>
                    • See our {LinkToOtherSubteams({ url: "/team/sportsman", text: "Sportsman" })} Subteam for other efficient and destructive robots!
                </p>,
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