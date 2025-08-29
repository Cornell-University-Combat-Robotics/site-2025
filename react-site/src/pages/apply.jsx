import { Typography, Box, Stack, Button } from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";
import FAQ from "../components/FAQ.tsx";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import RedBox from "../components/RedBox.tsx";
import join01 from "../assets/background-pictures/join-01-background.png";
import join02 from "../assets/background-pictures/join-02-background.png";
import join03 from "../assets/background-pictures/join-03-background.png";
import join04 from "../assets/background-pictures/join-04-background.png";
import slugma from "../assets/3lb/slugma_profile.jpg";
import photo1 from "../assets/apply-timeline/photo-1.jpg";
import photo2 from "../assets/apply-timeline/photo-2.jpg";
import photo3 from "../assets/apply-timeline/photo-3.png";
import photo4 from "../assets/apply-timeline/photo-4.jpg";
import photo5 from "../assets/apply-timeline/photo-5.jpg";
import { Link } from "react-router-dom";
import robot_scroll from "../assets/robot_scroll.png";
import arrow_img from "../assets/arrow.png";
import { LinkToPage } from "../components/FAQ.tsx";
import RobotCardList from '../components/RobotCardList';
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import { useTheme } from '@mui/material/styles';
import { Desk } from "@mui/icons-material";

/** Apply creates the Apply page for the website. */
export default function Apply() {
  // ================================= JAVASCRIPT COMMANDS: SCROLL DOWN FOR WEBSITE ======================================================
  const isMobile = useContext(MobileContext);

  const theme = useTheme();

  /** list of all events in the recruitment timeline */
  const event = [
    { name: 'Project Team Fest', date: '9/4/25' },
    { name: 'Clubfest', date: '9/13/25' },
    { name: 'Info Session 1', date: 'TBD' },
    { name: 'Info Session 2', date: 'TBD' },
    { name: 'Info Session 3', date: 'TBD' },
    { name: 'Applications Due', date: '10/16/25' }
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
          variant={isMobile ? "mobileH1" : "desktopH1"}
          sx={{
            textAlign: 'center',
            transform: 'translate(0,15%)',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
          }}>
          JOIN US!
        </Typography>
      </Box>

      {/* Page contents */}
      {/* apparently, width is not controlled based on padding/margin within a single component, meaning if padding is set to */}
      <Box mx={isMobile ? "7%" : "15%"} alignItems={"center"}>


        <RedBox
          title="Our applications for Fall 2025 open August 25th!"
          text="All applications are due October 16th, 11:59pm."
          word="Apply"
          link="https://forms.gle/EGwrHn7QumkidiXVA"
          mT="64px"
        />

        {/* Alternative text for when applications are closed */}
        {/* <Stack py={"64px"}>
          <Typography
            // Our applications...h3 writing
            variant="desktopBody"
            sx={{
              mb: '2%'
            }}>
            Our applications for Fall 2025 are not yet open.
          </Typography>

          <Typography
            // Our applications...h3 writing
            variant="desktopBody"
            sx={{
              fontWeight: 'bold'
            }}>
            Check back in the fall for more application info!
          </Typography>
        </Stack> */}

        <Typography
          // Recruitment Timeline
          variant={isMobile ? "mobileH2" : "desktopH2"}
          sx={{
            textAlign: 'center',
            mt: "8vw",
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
            width: '100%',
            height: {
              xs: '5vh',
              lg: '50%'
            }
          }}
        >
          {/*Must wrap line component in SVG (Scalable Vector Graphics): good for geometric elements like lines and shapes*/}
          <svg width="100%" height="100%">
            <line
              x1="10%" //coordinates of the line: 10% from the left
              x2="90%" //TODO: change, last element is slightly off
              y1="20%" //set 10% from top of svg component
              y2="20%"
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
                    cy="20%" //same as line -> falls on line
                    r={isMobile ? 6 : 15} //radius
                    fill="#820002" //color
                  >
                  </circle>

                  {/*Note: svg components don't support attributes that Material-UI components usually use (e.g. variant, color)*/}
                  <text key={index} fill="white" fontFamily={theme.typography.mobileH1.fontFamily}
                    fontSize={
                      isMobile ? theme.typography.mobileBody3.fontSize : theme.typography.desktopBody2.fontSize
                    }
                    y={isMobile ? "70%" : "70%"}
                    textAnchor="middle" //horizontally centered
                  >
                    {/*use tspan to separate texts, since svg does not support new-line*/}
                    <tspan x={xPos} >
                      {name}
                    </tspan>
                    <tspan x={xPos}
                      dy="2vw" //changes y position of this tspan relative to tspan above
                    >
                      {date}
                    </tspan>
                  </text>
                </g>
              );
            })}

          </svg>


        </Box>


        <Box width="100%" height="100%" mb={'15%'} mt={isMobile ? '0%' : '10%'}
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
            <ApplicationSteplist name="APPLICATIONS DUE" desc="All applications (Freshman, Upperclassmen, and Transfer) are due October 16th, 11:59pm" img={`url(${join02})`} />
            <ApplicationSteplist name="GROUP INTERVIEW" desc="Work with other applicants (and more importantly, have fun!) in our group interview" img={`url(${join03})`} />
            <ApplicationSteplist name="INDIVIDUAL INTERVIEW" desc="We want to see your interest and fit for your chosen subteam, but no prior experience is necessary." img={`url(${join04})`} />
          </Box>
        </Box>


        <Typography variant={isMobile ? "mobileH2" : "desktopH2"} mb={10} id="newbie-ex">
          NEW MEMBER EXPERIENCE
        </Typography>


        <Stack direction="row" gap={10} ref={arrowBar} position="relative" width="100%" >

          {!isMobile &&
            /*arrow*/
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
                    width: "50%",
                    height: "100%"
                  }}
                  ref={arrow}
                />
              </foreignObject>

              {/** TODO: uncomment when robot scroll fixed
              // static robot image at the top of the rectangular part of arrow -> absolute in terms of the stack component
              {!isVisible && !isBottomCrossed &&
                <foreignObject height="6.5%" width="100%" x="0%" y="3%" >
                  <img
                    src={robot_scroll}
                    style={{
                      zIndex: "100",
                      width: "35%",
                      height: "70%"
                    }}
                  />
                </foreignObject>
              }

              // static robot image at the bottom of the triangular part of arrow
              {isBottomCrossed &&
                <foreignObject height="6.5%" width="100%" x="0%" y="89%" >
                  <img
                    src={robot_scroll}
                    style={{
                      zIndex: "100",
                      width: "35%",
                      height: "70%"
                    }}
                  />
                </foreignObject>
              }
       */}

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
          }


          {/*


        Scenarios:
        1) above arrow: isVisible = false && isBottomCrossed = false -> DON'T render
        3) within arrow: isVisible = true && isBottomCrossed = false -> RENDER
        2) below arrow: isVisible = false (depends on threshold) && isBottomCrossed = true -> DON'T render
        */}

          {/*scrolling robot image -> fixed at middle of screen (idk why middle equals top = 20%)            */}

          {/** TODO: uncomment when robot scroll fixed
          {isVisible && !isBottomCrossed && !isMobile &&
            <RobotImage pos={"fixed"} top={"20%"} lft={"16.5%"} ref={robot} />
          }
             */}


          {!isMobile &&
            <Stack direction="column" alignItems="center" rowGap={10} height="100%" mt={7} mb={20} width="100%">
              <MemberExperienceComponentDesktop bgcolor={"#242121"} img={photo1} title={"NEWBIE ONBOARDING"} subtitle={"Early November"} desc={"During onboarding, new members into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams!"} />
              <MemberExperienceComponentDesktop bgcolor={"#292626"} img={photo2} title={"FIRST GBODY MEETING"} subtitle={"Early November"} desc={"New members experience their first GBody meeting and meet the full team! They will catch up on all the new developments of each subteam in fun and lively weekly meetings."} />
              <MemberExperienceComponentDesktop bgcolor={"#542D2D"} img={photo3} title={"NEWBIE DESIGN REVIEW"} subtitle={"Late November"} desc={"Newbies launch their 3lb projects, with CRC trainers guiding them through the ideation process and explaining all the steps to creating competitive combat robotcs and effective marketing."} />
              <MemberExperienceComponentDesktop bgcolor={"#762627"} img={photo4} title={"FINAL DESIGN REVIEW"} subtitle={"Early December"} desc={"After finalizing 3lb projects, new members will create a presentation to showcase to the rest of the team and show off all their hard work creating a 3lb robot from scratch!"} />
              <MemberExperienceComponentDesktop bgcolor={"#741112"} img={photo5} title={"NEWBIE GRADUATION"} subtitle={"January"} desc={"Newbies are officially welcomed as full-fledged members of their respective subteams."} />
            </Stack>
          }


          {isMobile &&
            <Stack direction="column" alignItems="center" rowGap={10} height="100%" mt={5} mb={20} width="100%">
              <MemberExperienceComponentMobile bgcolor={"#242121"} img={photo1} title={"NEWBIE ONBOARDING"} subtitle={"Early November"} desc={"During onboarding, new members into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams!"} />
              <MemberExperienceComponentMobile bgcolor={"#292626"} img={photo2} title={"FIRST GBODY MEETING"} subtitle={"Early November"} desc={"New members experience their first GBody meeting and meet the full team! They will catch up on all the new developments of each subteam in fun and lively weekly meetings."} />
              <MemberExperienceComponentMobile bgcolor={"#542D2D"} img={photo3} title={"NEWBIE DESIGN REVIEW"} subtitle={"Late November"} desc={"Newbies launch their 3lb projects, with CRC trainers guiding them through the ideation process and explaining all the steps to creating competitive combat robotcs and effective marketing."} />
              <MemberExperienceComponentMobile bgcolor={"#762627"} img={photo4} title={"FINAL DESIGN REVIEW"} subtitle={"Early December"} desc={"After finalizing 3lb projects, new members will create a presentation to showcase to the rest of the team and show off all their hard work creating a 3lb robot from scratch!"} />
              <MemberExperienceComponentMobile bgcolor={"#741112"} img={photo5} title={"NEWBIE GRADUATION"} subtitle={"January"} desc={"Newbies are officially welcomed as full-fledged members of their respective subteams."} />
            </Stack>
          }

        </Stack>
      </Box>

      {/* Box for 3lb robot cards & info */}
      <Box width="100%" height="auto" justifyContent={"center"} alignItems={"center"} >
        <Typography variant={isMobile ? "mobileH3" : "desktopH3"}>{"A few of our past 3lb robots..."}</Typography>

        <RobotCardList type='Shortened_Three_lb' capacity={3} />

        <Button
          component={Link}  // Make the Button act like a Link
          to="/robots#3lb_apply_link"
          sx={{
            border: "2px solid white",
            borderRadius: 100,
            paddingY: 1,
            paddingX: 3,
            mb: 15
          }}
        >
          <Typography variant="desktopBody" fontSize={20} color="white">
            {"Click to see more!"}
          </Typography>
        </Button>

      </Box>

      <FAQ qn={questions} ans={answers} />
    </Box >
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

function MemberExperienceComponentDesktop({ bgcolor, img, title, subtitle, desc }) {

  const isMobile = useContext(MobileContext);

  return (
    <Box bgcolor={bgcolor}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '130%',
        alignItems: 'left',
        overflow: 'hidden'
      }}>
      {/* box with image */}
      {/* <Box width="50%" height="150%" backgroundColor="white"> */}
      <img
        src={img}
        style={{
          objectPosition: "center",
          objectFit: "cover",
          width: "50%",
          // height: "100%"
        }}
      />
      {/* </Box> */}

      {/*descriptions */}
      <Box textAlign={"left"} width="60%" height="100%"
        bgcolor={bgcolor} //bgcolors arent inherited
        py='4%'
        px="4%"
      >
        <Typography variant="desktopH3" display="block" sx={{ textShadow: '2px 6px 4px rgba(0, 0, 0, 0.5)' }}>
          {title}
        </Typography>

        <Typography variant="desktopBody" display="block" sx={{
          textShadow: '2px 6px 4px rgba(0, 0, 0, 0.5)', fontStyle: 'italic',
          mb: { xs: 2, lg: 5 }
        }}>
          {subtitle}
        </Typography>

        <Typography variant="desktopBody2" >
          {desc}
        </Typography>
      </Box>

    </Box >
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
        // filter: 'blur(0.4px)', blur is here to make text more legible on top of red, but it also blurs the text rn
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


function MemberExperienceComponentMobile({ bgcolor, img, title, subtitle, desc }) {

  const isMobile = useContext(MobileContext);

  return (

    <Stack direction="column" alignItems="center" justifyContent="center" bgcolor={bgcolor} width="80%" padding={4}>

      <Box textAlign={"center"} width="100%"
        bgcolor={bgcolor} //bgcolors arent inherited 
      >
        <Typography variant="mobileH3" display="block" sx={{ textShadow: '2px 6px 4px rgba(0, 0, 0, 0.5)' }}>
          {title}
        </Typography>
      </Box>

      <Box width="100%" bgcolor={bgcolor} pt={3} pb={3}>
        <img
          src={img}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "70%"
          }}
        />
      </Box>

      {/*descriptions */}
      <Box textAlign={"left"} width="100%"
        bgcolor={bgcolor} //bgcolors arent inherited
      >

        <Typography variant="mobileBody" display="block" sx={{
          textShadow: '2px 6px 4px rgba(0, 0, 0, 0.5)', fontStyle: 'italic',
          mb: { xs: 2, lg: 5 }
        }}>
          {subtitle}
        </Typography>

        <Typography variant="mobileBody" >
          {desc}
        </Typography>
      </Box>


    </Stack>
  );
}