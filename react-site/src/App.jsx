import './App.css'
import { createContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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


// mobile context
export const MobileContext = createContext();

// mobile font sizes: body3 for paragraphs,
// h1 for header
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '8vw',
      fontWeight: 'normal',
    },
    h2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2.8rem',
      fontWeight: 'normal',
    },
    h3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2rem',
      fontWeight: 'normal',
    },
    h4: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '5vw',
    },
    h5: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2.6vw',
    },
    body1: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '2.0vw',
      fontWeight: 'normal',
    },
    body2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '1.1rem',
      fontWeight: 'normal',
    },
    body3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontSize: '3.0vw',
    }
  },
  palette: {
    primary: {
      main: '#3D0E0E'
    }
  }
});

theme.typography.body3 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '3.0vw',
  fontWeight: 'normal',
};

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
            </Routes>
          </main>
          {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </Router>
      </MobileContext.Provider>
    </ThemeProvider>

  );
}

export default App