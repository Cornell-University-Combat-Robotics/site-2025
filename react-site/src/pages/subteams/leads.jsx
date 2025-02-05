import SubteamPage from "../../components/SubteamPage";
import React from "react";

/* Leads subteam page within Team Page */
export default function Leads() {

  //array for subsystem with key-value pairs
  const subsystems = [];

  return (
    <SubteamPage
      name="Leads"
      desc="Our full team and subteam leads keep CRC running smoothly. From weekly meetings to our tight-knit culture, they help ensure our team functions efficiently as a unified whole."
      optionalDesc=""
      subsystemIntro=""
      subsystems={subsystems}
      otherInterest={[]}
    />
  );
}
