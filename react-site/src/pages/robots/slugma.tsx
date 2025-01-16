import React from "react";
import IndividualRobot from "../../components/IndividualRobot";

export default function Slugma() {
  return (
    <IndividualRobot
      name="Slugma"
      makers={["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"]}
      description="FLAMETHROWERS!! Who doesn’t love flamethrowers?"
      image="/src/assets/3lb/slugma_profile.jpg"
      stats={{
        vintage: "2024", 
        height: "0 ft",
        weight: "0 lbs",
        fights: "None, yet...",
        wins: "∞",
        top_speed: "So much faster than a slug",
        weapon_speed: "5 rpm",
        most_damaged_part: "Lifter",
        favorite_movie: "Pokemon: Destiny Deoxys"
      }}
      featured_fight="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
      design="Slugma is an all-rounder battle-bot, with not one, but two weapons in its arsenal: 
      a vertical lifter and a flamethrower. By firstly lifting its opponent off the ground, 
      Slugma activates its secret move: paralysis. Then, Slugma activates its fire breathing ability 
      to deal fatal damage, ending the battle once-and-for-all."
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