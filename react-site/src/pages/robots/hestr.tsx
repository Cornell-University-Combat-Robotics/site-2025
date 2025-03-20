import React from "react";
import IndividualRobot from "../../components/IndividualRobot";

export default function Hestr() {
  return (
    <IndividualRobot
      name="Dauður Hestr"
      makers={["Xia Yan Zhao", "Tyler Loverjoy", "Ethan Decamp", "Kaila Danielson"]}
      description="Dauður Hestr is themed around Nordic culture, specifically their strongest warrior’s hammer: mjolnir. 
      The gray color and lightning follow’s Thor’s specialities and strikes fear into the hearts of those around it."
      image="/src/assets/3lb/hestr_profile.png"
      stats={{
        vintage: "2024",
        height: "4.1 inches",
        weight: "2.99 lbs, yet inliftable",
        fights: "at least 3.2",
        wins: "100%, you can't beat a dead horse",
        top_speed: "Lightning fast",
        weapon_speed: "419 oz-in (30.20 kgf-cm)",
        most_damaged_part: "Our big Hammer 🔨",
        favorite_movie: "Thor: Ragnarok 🎬"
      }}
      featured_fight="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
      design="Dauður Hestr is a sportsman-type robot, with a large hammer that takes most of its weight. 
      The hammer is hollow aluminum, and is actuated by a series of gears. 
      With a strong weapon motor, the drive motors tried to balance speed and pushing force with an emphasis on pushing force."
      trivia={["Yeah, I'm gonna take my horse to the old town road……",
        "I'm gonna ride 'til I can't no more",
        "Dead Horse",
        "Dauður Hestr is a mix of old norse and icelandic so it sounds better.",
        "Dauður Hestr is a poker shark. "]}
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