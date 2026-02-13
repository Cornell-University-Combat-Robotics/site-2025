import SubteamPage from "../../components/SubteamPage";
import React from "react";
import { LinkToOtherSubteams } from "../../components/SubteamPage";

export default function Infinity() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Drivetrain", desc: "The locomotion system of the robot. Infinity meticulously selects the drive systems to ensure our robots are agile, responsive, and formidable on the battlefield." },
        { name: "Weapon", desc: "The attacking method of the robot. Each Infinity team designs their own sportsman or kinetic weapon." },
        { name: "Chassis", desc: "The shell, armor, and internal structure of the robot. Infinity engineers these elements to withstand the rigors of intense battles and outlast the competition." },
        { name: "Electronics", desc: "The motors, ESCs, batteries, power switches, and wires of the robot for RC control." }
    ];

    return (
        <SubteamPage
            name="Infinity"
            desc="Within the Infinity Subteam, new MechE members work in small groups to design and build 1lb combat robots, including vertical spinners, horizontal spinners, full-body spinners, and drums. These 1lb robots then compete in an internal CRC competition during our annual showcase."
            optionalDesc=""
            subsystemIntro="Our approach to robot design revolves around four critical subsystems:" //TODO: make bold
            subsystems={subsystems}
            otherInterest={[
                <p>
                    • Other efficient and destructive robots, our {LinkToOtherSubteams({ url: "/team/kinetic", text: "Kinetic" })} Subteam or the {LinkToOtherSubteams({ url: "/team/sportsman", text: "Sportsman" })} Subteam may be a better fit
                </p>,
                <p>
                    • Circuitry/autonomous robots, our {LinkToOtherSubteams({ url: "/team/autonomous", text: "Autonomous" })} Subteam may be a better fit
                </p>
            ]}
        />
    );
}