import type { Timeline1Cell } from "../components/Timeline1Cell";

import panel1 from "../assets/home-timeline/panel-1.jpeg";
import panel2 from "../assets/home-timeline/panel-2.jpg";
import panel3 from "../assets/home-timeline/panel-3.jpg";
import panel4 from "../assets/home-timeline/panel-4.jpg";
import panel5 from "../assets/home-timeline/panel-5.jpg";
import panel6 from "../assets/home-timeline/panel-6.jpg";
import panel8 from "../assets/home-timeline/panel-8.jpg";
import panel9 from "../assets/home-timeline/panel-9.png";
import champs22_panel from "../assets/home-timeline/champs22_panel.jpeg";
import fullteam_panel from "../assets/home-timeline/fullteam_photo.jpeg";
import maycomp_panel from "../assets/home-timeline/may-comp-panel.JPG";
import febcomp_panel from "../assets/home-timeline/feb-comp-photo.JPG";


const TimelineData: Timeline1Cell[] = [
    {
        date: 'October 2019',
        description: 'The team was founded, and the journey began! Our founding members began researching battlebots and structuring the team.',
        image: panel1
    },
    {
        date: 'October 2021',
        description: 'We completed our first full robot, Manny! Manny was a sportsman bot that used a hammer and tusks to crush its foes.',
        image: panel2
    },
    {
        date: 'January 2022',
        description: 'We received project team status from Cornell, allowing us to set up shop in the Experiential Learning Lab (ELL) and provide higher standards of member education.',
        image: panel3
    },
    {
        date: 'April 2022',
        description: 'We attended our first competition at the National Havoc Robot League (NHRL). We brought our whole team along with our Sportsman robot, Lance, and our Kinetic robot, Richard! Lance won the 12lb Sportsman category!',
        image: panel4
    },
    {
        date: 'May 2022',
        description: 'We hosted our first Showcase for the Cornell community in Upson Lounge, where we showed off our robots, autonomous developments, merchandise, and hosted games.',
        image: panel5
    },
    {
        date: 'December 2022',
        description: 'We qualified for our first-ever NHRL World Championship event, traveling to the 2022 World Championships with our 12lb vertical spinner robot, Richard.',
        image: champs22_panel
    },
    {
        date: 'April 2023',
        description: 'We participated in the Bits of Our Mind (BOOM) event and showcased our Arcade Video Game, CRC VS.',
        image: panel6
    },
    {
        date: 'October 2023',
        description: 'We represented Cornell\'s College of Engineering at the Trustee-Council Annual Meeting!',
        image: panel8
    },
    {
        date: 'April 2024',
        description: 'We debuted our first autonomous robot (Louis XVII), becoming one of the first teams in NHRL history to compete with fully autonomous combat robotics.',
        image: panel9
    },
    {
        date: 'August 2025',
        description: 'Both our Sportsman and Kinetic subteams began developing kinetic-weapon robots, expanding our team\'s capabilities in high-energy combat robotics.',
        image: fullteam_panel
    },    
    {
        date: 'February 2026',
        description: 'We competed at our first-ever February NHRL event, making this our first season with two NHRL competitions.',
        image: febcomp_panel
    },
    {
        date: 'August 2026',
        description: 'Our Sportsman and Kinetic teams merged into one Mechanical Subteam.',
        image: maycomp_panel
    },
];
export default TimelineData;