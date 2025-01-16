import React from "react";
import IndividualRobot from "../../components/IndividualRobot";

export default function Batbot() {
  return (
    <IndividualRobot
      name="Fangular Momentum"
      makers={["Ruslan Black", "Gurjot Gill", "Sophie Cheng", "Ruihan Chu"]}
      description="Growing up in Gotham City’s hardware store Fangular Momentum had a tough upbringing. He decided to turn his dark past into a force for good and take on his alter ego, BatBot. Everyday he protects the aisles of Gotham City’s Home Depot from fierce foes like JokerBot and BaneBot."
      image={"/src/assets/3lb/batbot.png"}
      stats={{
        vintage: "2024",
        height: "10 inches",
        weight: "3 lbs",
        fights: "JokerBot",
        wins: "RiddlerBot, BaneBot",
        top_speed: "As fast as the batmobile",
        weapon_speed: "1000 rpm",
        most_damaged_part: "Ears",
        favorite_movie: "Real Steel"
      }}
      featured_fight="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
      design="Fangular Momentum has vertical spinner in the shape of a batarang."
      trivia={["Fangular Momentum refuses to KO JokerBot"]}
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
      gallery={["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.instagram.com/p/DCX2RjuOpGA/", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]}
    />
  );
}