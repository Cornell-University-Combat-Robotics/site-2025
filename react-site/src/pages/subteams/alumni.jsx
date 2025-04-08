import SubteamPage from "../../components/SubteamPage";
import React from "react";

/* Alumni subteam page within Team Page */
export default function Alumni() {

  //array for subsystem with key-value pairs
  const subsystems = [];

  return (
      <SubteamPage
        name="Alumni"
        desc="Once you're on CRC, you're a CRC member for life. Our team has a vibrant alumni community, and we love staying connected post-graduation!"
        optionalDesc=""
        subsystemIntro=""
        subsystems={subsystems}
        otherInterest={[]}
      />
  );
}
