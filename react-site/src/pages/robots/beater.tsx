import React from "react";
import IndividualRobot from "../../components/IndividualRobot";

export default function Beater() {
  return (
    <IndividualRobot
      name="Beater B. Barker"
      makers={["Anna Boese", "Isaac Newcomb", "Stella Taglich", "Zander Knight", "James LaSalle", "Ethan Hernandez", "Kevin Sturm", "Mattew Anazco", "Mohammed Chowdhury"]}
      description="Beater B. Barker? I hardly know her! With his big 🅱 energy and his quick footwork on the arena floor, Beater absolutely dominates the competition. However, his one fatal flaw is the hubris of having a flywheel: he thinks he can turn on a dime, but he has to lean on the wall for 10 seconds if he's overzealous. This can (and has) cost him the match. He weeps when he remembers that day, but he knows there are more Beater Barkers out there in the S🅱iderverse, and one of them will win the championship when the time comes."
      image="/src/assets/nardo-whole.png"
      stats={{
        vintage: "2024",
        height: "1.5 ft",
        weight: "30 lbs",
        fights: "3",
        wins: "2",
        top_speed: "11 mph",
        weapon_speed: "1000 rpm",
        most_damaged_part: "Weapon",
        favorite_movie: "The Bee Movie"
      }}
      featured_fight="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
      design="A counter-rotating brass flywheel sits in the center of Beater's bright red beater bar. Powered separately, the flywheel and weapon counteract each other's angular momentum to reduce the gyro effect when Beater turns in place. This means he can pack the punch of a heavy hitter without getting bogged down by maneuverability problems.
      Speaking of maneuverability, Beater maximizes grip and speed with its titanium-cleated 4-wheel indirect drivetrain. With a top speed of 11 mph and an acceleration to full speed in a fraction of a second, there's no outrunning this bot. UHMW wheel guards keep the belts and pulleys protected, and 1/2 inch aluminum standoffs allow for quick, easy service.
      Also highly serviceable is the electronics compartment, housed in a UHMW billet frame and extending upward into a 3D - printed carbon - fiber nylon shell.The weapon uprights sandwich the electronics, held together by titanium rings that bolt in from the top and bottom."
      trivia={["Trivia 1", "Trivia 2"]}
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