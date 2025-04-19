import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider, Stack, setRef, Button } from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";
import FAQ from "../components/FAQ.tsx";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import RedBox from "../components/RedBox.tsx";
import join01 from "../assets/background-pictures/join-01-background.png";
import join02 from "../assets/background-pictures/join-02-background.png";
import join03 from "../assets/background-pictures/join-03-background.png";
import join04 from "../assets/background-pictures/join-04-background.png";
import slugma from "../assets/3lb/slugma_profile.jpg";
import robot_scroll from "../assets/robot_scroll.png";
import arrow_img from "../assets/arrow.png";
import { LinkToPage } from "../components/FAQ.tsx";
import RobotCardList from '../components/RobotCardList';

/** Apply creates the Apply page for the website. */
export default function Apply() {
  // ================================= JAVASCRIPT COMMANDS: SCROLL DOWN FOR WEBSITE ======================================================

  /** list of all events in the recruitment timeline */
  const event = [
    { name: 'Project Team Fest', date: '6/9/25' },
    { name: 'Clubfest', date: '6/10/25' },
    { name: 'Info Session 1', date: '6/11/25' },
    { name: 'Info Session 2', date: '6/12/25' },
    { name: 'Info Session 3', date: '6/13/25' },
    { name: 'Applications Due', date: '11:59PM  7/1/25' }
  ];

  /** boolean value for when user's viewport successfully intersects with arrow */
  const [isVisible, setIsVisible] = useState(false);

  /** boolean value for when the user has scrolled past the maximum allowed distance for the robot scrolling animation */
  const [isBottomCrossed, setIsBottomCrossed] = useState(false);

  /** scrolling robot's distance from the bottom of user's viewport */
  const [robotFromBottom, setRobotFromBottom] = useState(0);

  /*attach these references to components that you want to listen to in user's viewport */

  /** referencing the rectangular body of the arrow */
  const arrowBar = useRef(null);

  /** referencing the triangle of the arrow */
  const arrow = useRef(null);

  /** referencing the SCROLLING robot image */
  const robot = useRef(null);

  /** bottom of user's viewport based on window's height and how much user has scrolled */
  const [userBottom, setUserBottom] = useState(window.innerHeight + window.scrollY);

  /** bottom of the triangular arrow component */
  const [arrowBottom, setArrowBottom] = useState(0);

  //no dependency array: runs ONLY at the FIRST render of the window
  useEffect(() => {
    //doesn't seem to be working fully -> still weird when resizing TODO
    const updateArrowBottom = () => {
      const refArrow = arrow.current.getBoundingClientRect();
      setArrowBottom(refArrow.bottom + window.scrollY);
    };
    window.addEventListener("resize", updateArrowBottom)

    /* Reference will already be attached to arrow component by the first render
    We only want to run this code once, because at the first render, the user is at the top of the screen (NOTE: NOT ALWAYS THOOOOO), 
    so window.scrollY = 0, and we're just getting the bottom of the arrow in the ENTIRE webpage
    */
    if (arrow.current) {
      //getBoundingClientRect(): provides information about the element’s size and position relative to the viewport
      const refArrow = arrow.current.getBoundingClientRect();
      setArrowBottom(refArrow.bottom + window.scrollY);
    }

  }, []);


  useEffect(() => {

    /* [entry]: an IntersectionObserverEntry object -> contains details about observed element (arrowBar.current) 
    and how it intersects with the viewport or another container.

    IntersectionObserver effect: allows you to detect when an element enters or leaves the viewport
    - stays attached and keeps detecting visibility changes automatically, even tho this useEffect only runs once */
    const observer = new IntersectionObserver(([entry]) => {
      //entry.isIntersecting is TRUE when element is visible in user's viewport & FALSE when scrolled out of view
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
      { threshold: 0.2 } //controls how much of the element must be visible before [entry.isIntersecting] becomes true
    );

    //only runs when arrowBar is not null -> meaning arrowBar must be successfully attached to an object
    if (arrowBar.current) {
      observer.observe(arrowBar.current) //attaches the observer -> starts tracking visibility changes for this component
    }

    const handleScroll = () => {
      setUserBottom(window.innerHeight + window.scrollY);
    };

    //listens for user scrolling
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []); //no dependencies: meaning the useEffect only runs ONCE on the first render => prevents observer from being created every render (inefficient)

  /** Runs every time the reference for [robot] is updated (aka. when ref attached to scrolling robot component)
   * Effect: sets value of robot's distance from bottom of user's viewport */
  useEffect(() => {
    if (robot.current) {
      const refRobot = robot.current.getBoundingClientRect();
      setRobotFromBottom(refRobot.bottom);
    }
  }, [robot.current]);

  /** Runs every time [userBottom] is updated (aka. when user scrolls) */
  useEffect(() => {
    /* MUST include value of [robotFromBottom]. 
    Else, will be true as soon as user's viewport scrolls past the triangular arrow -> if robot image is not placed at the bottom
    of the viewport, then there will be a sudden jump from the scrolling robot to the static robot at the bottom of the arrow.
    */
    if (userBottom >= (arrowBottom + robotFromBottom)) {
      setIsBottomCrossed(true);
    } else {
      setIsBottomCrossed(false);
    }
  }, [userBottom]);

  // =========================================== WEBSITE CONTENTS START HERE ======================================================
  /** list of all FAQ questions & answers */
  const questions = [
    "Does CRC offer class credits?",
    "What is the time commitment for this team?",
    "Do I need technical experience? ",
    "Can I join multiple subteams?"
  ];


  //To add hyperlink in middle of text by using <Link> component, must wrap in <p>
  const answers =
    [
      <p>
        Yes! All new members will enroll in ENGRG 1400 (Engineering Project Team Onboarding) for 1 credit (S/U) during their first full semester on the team. After this, members will enroll in ENGRG 3400 (Engineering Student Project Teams) for 3 credits (S/U) each semester. This credit can be applied to a number of degree requirements, such as Advisor-Approved and Technical electives.
      </p>,
      <p>
        Members are expected to spend 9 hours per week on CRC-related projects, in line with the team being a 3-credit course. This time is broken down into a 1-hour General Body meeting, three 2-hour subteam meetings, and 2 hours of involvement in projects or extra work sessions. We schedule our meetings around the availability of our members so that everyone can attend every meeting!
      </p>,
      <p>
        No! Upon joining the team, new members will have the opportunity to experience our {LinkToID({ id: "newbie-ex", text: "customized training program" })} to prepare them to join their respective subteams. We will teach you everything you need to know, no experience necessary!
      </p>
      ,
      <p>
        Applicants are encouraged to apply to as many {LinkToPage
          ({ id: "/team", text: "subteams" })} as they are interested in joining. However, new members will only join one subteam upon being accepted to the team.
      </p>
    ]

  return (

    <Box>
      {/* header */}
      <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${apply})`,  // Your image URL
        backgroundSize: 'cover',      // Ensure the image covers the area
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
        <Typography
          variant="desktopH1"
          sx={{
            textAlign: 'center',
            transform: 'translate(0,15%)',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
          }}>
          JOIN US!
        </Typography>
      </Box>

      {/* Page contents */}
      <Box sx={{ mx: '15%' }}>
        <RedBox
          title="Our applications for Fall 2024 are open!"
          text="All applications are due October 17th, 11:59pm."
          word="Apply Now!"
          link="/sponsors"
          mTop="5%"
        />

        {/* Alternative text for when applications are closed */}
        {/* <Box padding={10} textAlign={"center"}>
        <Typography
          // Our applications...h3 writing
          variant="h2"
          sx={{
            mb: '2%'
          }}>
          Our applications for Fall 2024 are closed.
        </Typography>

        <Typography
          // Our applications...h3 writing
          variant="h2"
          sx={{
            fontWeight: 'bold'
          }}>
          Check back next fall for more application info!
        </Typography>
      </Box> */}

        <Typography
          // Recruitment Timeline
          variant="desktopH2"
          sx={{
            textAlign: 'center',
            mt: "7%",
            mb: '5%'
            // add margins when text size smaller
          }}>
          RECRUITMENT TIMELINE
        </Typography>


        {/*Contains geometric timeline*/}
        <Box
          sx={{
            position: 'relative',
            //justifyContent: 'center',
            //alignItems: 'center',
            width: '130%',
            left: '-15%',
            height: '100%',
            overflow: 'visible'
          }}
        >
          {/*Must wrap line component in SVG (Scalable Vector Graphics): good for geometric elements like lines and shapes*/}
          <svg width="100%" height="20%">
            <line
              x1="10%" //coordinates of the line: 10% from the left
              x2="90%" //TODO: change, last element is slightly off
              y1="10%" //set 10% from top of svg component
              y2="10%"
              stroke={"#820002"}
              strokeWidth="5"
            >
            </line>

            {event.map(({ name, date }, index) => {
              const xPos = [`${10 + (index * (80 / (event.length - 1)))}%`]; //increments x position to the right according to index

              return (
                <g key={index}> {/*groups shapes tgt, since all returned elements within a map must be wrapped in a single element*/}
                  <circle
                    cx={xPos}
                    cy="10%" //same as line -> falls on line
                    r={10} //radius
                    fill="#820002" //color
                  >
                  </circle>

                  {/*Note: svg components don't support attributes that Material-UI components usually use (e.g. variant, color)*/}
                  <text key={index} fill="white" fontFamily='Josefin Sans, sans-serif' fontSize={24} y="50%"
                    textAnchor="middle" //horizontally centered
                  >
                    {/*use tspan to separate texts, since svg does not support new-line*/}
                    <tspan x={xPos} >
                      {name}
                    </tspan>
                    <tspan x={xPos}
                      dy="2rem" //changes y position of this tspan relative to tspan above
                    >
                      {date}
                    </tspan>
                  </text>
                </g>
              );
            })}

          </svg>


        </Box>


        <Box width="100%" height="100%" mt={'10%'} mb={'15%'}
          sx={{
            display: 'grid', placeItems: "center" //alignment parameter when using grids (not justifycontent)
          }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '4% 4%',
            height: '100%',
          }}>
            <ApplicationSteplist name="INFO SESSIONS" desc="We highly encourage you to meet our team at an info session! Learn more about us and ask your burning questions." img={`url(${join01})`} />
            <ApplicationSteplist name="APPLICATIONS DUE" desc="All applications (Freshman, Upperclassmen, and Transfer) are due October 17th, 11:59pm" img={`url(${join02})`} />
            <ApplicationSteplist name="GROUP INTERVIEW" desc="Work with other applicants (and more importantly, have fun!) in our group interview" img={`url(${join03})`} />
            <ApplicationSteplist name="INDIVIDUAL INTERVIEW" desc="We want to see your interest and fit for your chosen subteam, but no prior experience is necessary." img={`url(${join04})`} />
          </Box>
        </Box>

        <Typography variant="desktopH2" mb={5} id="newbie-ex">
          NEW MEMBER EXPERIENCE
        </Typography>

        <Stack direction="row" gap={10} ref={arrowBar} position="relative" >
          {/*arrow*/}
          <svg width="30%" //svg component takes up 10% of stack & full height of stack 
          >
            <line
              x1="50%" //coordinates of the line: 50% from the left of svg component
              x2="50%"
              y1="5%" //set 5% from top of svg component
              y2="90%"
              stroke={"#820002"}
              strokeWidth="25"
            >
            </line>

            {/*Must have foreign object tag to nest MUI component within svg*/}
            <foreignObject x="0%" y="90%" width="100%" height="3%" >
              <img
                src={arrow_img}
                style={{
                  zIndex: "100",
                  width: "100%",
                  height: "100%"
                }}
                ref={arrow}
              />
            </foreignObject>


            {/*static robot image at the top of the rectangular part of arrow -> absolute in terms of the stack component*/}
            {!isVisible && !isBottomCrossed &&
              <foreignObject height="6.5%" width="100%" x="0%" y="3%" >
                <img
                  src={robot_scroll}
                  style={{
                    zIndex: "100",
                    width: "95%",
                    height: "95%"
                  }}
                />
              </foreignObject>
            }

            {/*static robot image at the bottom of the triangular part of arrow*/}
            {isBottomCrossed &&
              <foreignObject height="6.5%" width="100%" x="0%" y="89%" >
                <img
                  src={robot_scroll}
                  style={{
                    zIndex: "100",
                    width: "95%",
                    height: "95%"
                  }}
                />
              </foreignObject>
            }

            {/** right idea, wrong math
           * 
            {isVisible && !isBottomCrossed &&
              <foreignObject height="6.5%" width="100%" x="0%" y={`${yPos / 60}%`} >
                {console.log("inner yPos", yPos / 150)};
                <img
                  src={robot_scroll}
                  style={{
                    zIndex: "100",
                    width: "95%",
                    height: "95%"
                  }}
                />
              </foreignObject>
            }
           * 
           */}

          </svg>



          {/*


        Scenarios:
        1) above arrow: isVisible = false && isBottomCrossed = false -> DON'T render
        3) within arrow: isVisible = true && isBottomCrossed = false -> RENDER
        2) below arrow: isVisible = false (depends on threshold) && isBottomCrossed = true -> DON'T render
        */}

          {/*scrolling robot image -> fixed at middle of screen (idk why middle equals top = 20%)            */}
          {isVisible && !isBottomCrossed &&
            <RobotImage pos={"fixed"} top={"20%"} lft={"10.6%"} ref={robot} />
          }


          <Stack direction="column" alignItems="center" rowGap={10} height="100%" mb={20}>
            <MemberExperienceComponent bgcolor={"#242121"} img={slugma} title={"NEWBIE ONBOARDING"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
            <MemberExperienceComponent bgcolor={"#292626"} img={slugma} title={"FIRST GBODY MEETING"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
            <MemberExperienceComponent bgcolor={"#3F3030"} img={slugma} title={"NEWBIE DESIGN REVIEW"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
            <MemberExperienceComponent bgcolor={"#542D2D"} img={slugma} title={"FINAL DESIGN REVIEW"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
            <MemberExperienceComponent bgcolor={"#762627"} img={slugma} title={"FINAL DESIGN REVIEW"} subtitle={"Early December"} desc={"After finalizing your 3lb Projects with the help of CRC mentors, you and your project teammates will have the opportunity to show all of your hard work from this past semester! Family and friends are welcome to join and share pizza with the team."} />
            <MemberExperienceComponent bgcolor={"#741112"} img={slugma} title={"NEWBIE GRADUATION"} subtitle={"January"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
          </Stack>
        </Stack>
      </Box>

      {/* Box for 3lb robot cards & info */}
      <Box width="100%" height="auto" justifyContent={"center"} alignItems={"center"} >
        <Typography variant="desktopH2" mb={5}>{"A few of our past 3lb robots..."}</Typography>

        <RobotCardList type='Shortened_Three_lb' capacity={3} />

        <Button
          sx={{
            border: "2px solid white",
            borderRadius: 100,
            paddingY: 1,
            paddingX: 3,
            mb: 15
          }}
          onClick={() => {
            window.open('/robots#3lb_apply_link', '_blank');
          }}
        >
          <Typography variant="desktopBody" fontSize={20} color="white">
            {"Click to see more!"}
          </Typography>
        </Button>

      </Box>

      <FAQ qn={questions} ans={answers} />
    </Box>
  );
}

{/** Component containing robot scrolling image:
  - Note: must use const & forwardRef cuz functional components (like function RobotImage = ...) can't accept refs directly 
  unless wrapped with React.forwardRef
  */ }
const RobotImage = forwardRef(({ pos, top, bottom, lft }, ref) => {
  return (
    <img
      src={robot_scroll}
      ref={ref} //attach ref only if passed
      style={{
        transform: "scale(0.4)", // scale the image down, maintaining aspect ratio
        zIndex: "100",
        position: pos,
        left: lft,
        ...(top ? { top } : {}), // optional argument: Apply top only if passed
        ...(bottom ? { bottom } : {}) // Apply bottom only if passed
      }}
    />
  );
});

function MemberExperienceComponent({ bgcolor, img, title, subtitle, desc }) {
  return (
    <Stack direction="row" width="100%" bgcolor={bgcolor} alignItems="center" >
      <img
        src={img}
        style={{
          objectPosition: "center",
          objectFit: "cover",
          maxHeight: 400,
          minWidth: 400
        }}
      />


      {/*descriptions */}
      <Box textAlign={"left"} padding={5}
        bgcolor={bgcolor} //bgcolors arent inherited
      >
        <Typography variant="desktopH3" sx={{ textShadow: '2px 6px 4px rgba(0, 0, 0, 0.5)' }}>
          {title}
        </Typography>

        <Typography fontSize={30} mb={5} sx={{ textShadow: '2px 6px 4px rgba(0, 0, 0, 0.5)', fontStyle: 'italic' }}>
          {subtitle}
        </Typography>

        <Typography fontSize={20} fontFamily='Josefin Sans, sans-serif'>
          {desc}
        </Typography>
      </Box>

    </Stack>
  );
}

{/*For the big red numbers*/ }
function ApplicationSteplist({ name, desc, img }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: img,
        backgroundSize: "100%",
        filter: 'blur(0.4px)',
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Typography variant="desktopH3" //figure out
        sx={{
          textAlign: "right",
          mt: 10,
          mb: 5,
          marginRight: 3,
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)',
          display: "block"
        }}
      >
        {name}
      </Typography>

      <Typography variant="desktopBody"
        sx={{
          textAlign: "left",
          mb: "10px",
          mx: '2%',
          mt: 5,
          lineHeight: 1.5,
          display: "block", // necessary to align text to the left
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

function LinkToID({ id, text }) {

  const [isHover, setHover] = useState(false);

  return (
    <a href={`#${id}`}
      style={{
        color: isHover ? "red" : "white",
        textDecoration: "underline"
      }}


      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </ a>
  );
}

