import './App.css'
import { createContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

import GradientNavBar from './components/GradientNavBar';
import NavBarMobile from './components/mobile/NavBarMobile';
import ScrollToTop from './components/ScrollToTop';
import About from "./pages/about";
import Team from './pages/team';
import Marketing from './pages/subteams/marketing';
import Kinetic from './pages/subteams/kinetic';
import Autonomous from './pages/subteams/autonomous';
import Sportsman from './pages/subteams/sportsman';
import Robots from './pages/robots';
import Sponsors from './pages/sponsors';
import Game from './pages/game';
import Apply from './pages/apply';
import FooterDesktop from './components/FooterDesktop';
import FooterMobile from './components/mobile/FooterMobile';
import Accessibility from './pages/accessibility';
import IndividualRobot from './components/IndividualRobot';
import Leads from './pages/subteams/leads';
import Alumni from './pages/subteams/alumni';
import PageNotFound from './pages/PageNotFound.jsx';


// mobile context
export const MobileContext = createContext();

// mobile font sizes: body2 for paragraphs,
// headers are same as regular
const theme = createTheme({
  typography: {
    mobileH1: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '15vw',
      fontWeight: 'normal',
    },
    mobileH2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '8vw',
      fontWeight: 'normal',
    },
    mobileH3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '5.5vw',
      fontWeight: 'normal',
    },
    desktopH1: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '8vw',
      fontWeight: 'normal',
    },
    desktopH2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '4vw',
      fontWeight: 'normal',
    },
    desktopH3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2.6vw',
      fontWeight: 'normal',
    },
    mobileBody: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '3.5vw',
      fontWeight: 'normal',
    },
    mobileBody2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '3vw',
      fontWeight: 'normal',
    },
    mobileBody3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2.0vw',
      fontWeight: 'normal',
    },
    desktopBody: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2.0vw',
      fontWeight: 'normal',
    },
    desktopBody2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '1.5vw',
      fontWeight: 'normal',
    },
    desktopBody3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '1.25vw',
      fontWeight: 'normal',
    }
  },
  palette: {
    primary: {
      main: '#3D0E0E',
      grey: '#1C1C1C'
    }
  }
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const merch_url = "https://www.redbubble.com/people/CombatRobots/shop"

  return (
    <ThemeProvider theme={theme}>
      <MobileContext.Provider value={isMobile}>
        <Router>
          <ScrollToTop />
          {isMobile ? <NavBarMobile /> : <GradientNavBar />}
          <main>
            <Routes>
              <Route path="/" element={<><About /></>} />
              <Route path="/team" element={<><Team /></>} />
              <Route path="/team/marketing" element={<><Marketing /></>} />
              <Route path="/team/autonomous" element={<><Autonomous /></>} />
              <Route path="/team/kinetic" element={<><Kinetic /></>} />
              <Route path="/team/sportsman" element={<><Sportsman /></>} />
              <Route path="/team/leads" element={<><Leads /></>} />
              <Route path="/team/alumni" element={<><Alumni /></>} />
              <Route path="/robots" element={<><Robots /></>} />
              <Route path="/robots/:robotId" element={<><IndividualRobot /></>} />
              <Route path="/sponsors" element={<><Sponsors /></>} />
              <Route path="/game" element={<><Game /></>} />
              <Route path="/apply" element={<><Apply /></>} />
              <Route path="/accessibility" element={<><Accessibility /></>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </Router>
      </MobileContext.Provider>
    </ThemeProvider>

  );
}

export default App