import React from "react";
import IndividualRobot from "../../components/IndividualRobot";

export default function Swiss() {
  return (
    <IndividualRobot
      name="The Swiss Slinger"
      makers={["Sarah Bulkley", "Spencer Humes", "Riddhi Lamba"]}
      description="The Swiss Slinger sports a novel weapon system conforming to its wedge shaped body. 
      The Slinger throws its prey across the arena: crushing them under the impact of their own weight."
      image="/src/assets/3lb/swiss_slinger_profile.png"
      stats={{
        vintage: "2024", 
        height: "4.811 inches",
        weight: "2.765 lbs",
        fights: "100",
        wins: "100",
        top_speed: "15 mph",
        weapon_speed: "20 lb-ft",
        most_damaged_part: "Belt",
        favorite_movie: "Chessy Rom-coms and Ratatouille"
      }}
      featured_fight="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
      design="Shaped like a wedge with a rapidly spinning belt over its top plate, 
      the Swiss Slinger is designed to easily snatch its enemies and fling them away. 
      It has two floors to organize circuitry by keeping motors and the battery on the bottom with the wheels and placing ESCs on the top. 
      The internal structure also consists of walls for separational and organizational purposes. 
      There is also a top and bottom plate and the wedge is designed to allow the belt to wrap slightly around both ends before returning inside the chassis."
      trivia={["Slugma was originally named Venus Fly Trap, following the team’s original idea of making vertical clampers. But having hot TPU drip down onto the top of our robot would unfortunately be fatal, and so we changed the clampers to vertical lifters instead!", 
        "Trivia 2"]}
      fights={[
        {
          event: "Event 1",
          opponent: "Opponent 1",
          result: "Win",
          by: "KO",
          video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          length: "2:30"
        },
        {
          event: "Event 2",
          opponent: "Opponent 2",
          result: "Loss",
          by: "KO",
          video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          length: "3:00"
        },
        {
          event: "Event 3",
          opponent: "Opponent 3",
          result: "Win",
          by: "Decision",
          video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          length: "3:30"
        }
      ]}
      gallery={["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]}
    />
  );
}