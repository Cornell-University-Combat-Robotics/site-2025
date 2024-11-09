import React from "react";
import IndividualRobot from "../../components/IndividualRobot";

export default function Beater() {
  return (
    <IndividualRobot
      name="Beater B. Barker"
      makers={["John Doe", "Jane Doe"]}
      desc="Beater desc"
      image="/src/assets/nardo-whole.png"
      stats={["Wins: 3", "Losses: 1", "KOs: 2"]}
      featured_fight="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      design="Beater desc"
      trivia={["Trivia 1", "Trivia 2"]}
      fights={["Fight 1", "Fight 2"]}
      gallery_imgs={["https://i.imgur.com/7Vz9JZ2.png", "https://i.imgur.com/7Vz9JZ2.png"]}
      gallery_vids={["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]}
    />
  );
}