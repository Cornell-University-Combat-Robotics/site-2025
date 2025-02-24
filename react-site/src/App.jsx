import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GradientNavBar from './components/GradientNavBar';
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
import Footer from './components/footer';
import Accessibility from './pages/accessibility';
import Beater from './pages/robots/beater';
import Slugma from './pages/robots/slugma';
import Batbot from './pages/robots/batbot';
import Swiss from './pages/robots/swiss';
import Hestr from './pages/robots/hestr';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Leads from './pages/subteams/leads';
import Alumni from './pages/subteams/alumni';

const theme = createTheme();

theme.typography.h1 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '6rem',
  fontWeight: 'normal',
};

theme.typography.h2 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '2.8rem',
  fontWeight: 'normal',
};

theme.typography.h3 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '2rem',
  fontWeight: 'normal',
};

theme.typography.body1 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '1rem',
  fontWeight: 'normal',
};

theme.palette.primary = {
  main: '#3D0E0E'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Router>
          <Routes>
            {/* <NavBar/> */}
            <Route path="/" element={<><ScrollToTop /><GradientNavBar /><About /></>} />
            <Route path="/team" element={<><ScrollToTop /><GradientNavBar /><Team /></>} />
            <Route path="/team/marketing" element={<><ScrollToTop /><GradientNavBar /><Marketing /></>} />
            <Route path="/team/autonomous" element={<><ScrollToTop /><GradientNavBar /><Autonomous /></>} />
            <Route path="/team/kinetic" element={<><ScrollToTop /><GradientNavBar /><Kinetic /></>} />
            <Route path="/team/sportsman" element={<><ScrollToTop /><GradientNavBar /><Sportsman /></>} />
            <Route path="/team/leads" element={<><ScrollToTop /><GradientNavBar /><Leads /></>} />
            <Route path="/team/alumni" element={<><ScrollToTop /><GradientNavBar /><Alumni /></>} />
            <Route path="/robots" element={<><ScrollToTop /><GradientNavBar /><Robots /></>} />
            <Route path="/robots/beater" element={<><ScrollToTop /><GradientNavBar /><Beater /></>} />
            <Route path="/robots/slugma" element={<><ScrollToTop /><GradientNavBar /><Slugma /></>} />
            <Route path="/robots/batbot" element={<><ScrollToTop /><GradientNavBar /><Batbot /></>} />
            <Route path="/robots/swiss" element={<><ScrollToTop /><GradientNavBar /><Swiss /></>} />
            <Route path="/robots/hestr" element={<><ScrollToTop /><GradientNavBar /><Hestr /></>} />
            <Route path="/sponsors" element={<><ScrollToTop /><GradientNavBar /><Sponsors /></>} />
            <Route path="/game" element={<><ScrollToTop /><GradientNavBar /><Game /></>} />
            <Route path="/apply" element={<><ScrollToTop /><GradientNavBar /><Apply /></>} />
            <Route path="/accessibility" element={<><ScrollToTop /><GradientNavBar /><Accessibility /></>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App