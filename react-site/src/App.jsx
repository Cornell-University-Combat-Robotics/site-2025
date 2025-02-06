import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar';
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
import IndividualRobot from './components/IndividualRobot';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '6rem',
  fontWeight: 'normal',
};

theme.typography.h2 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '2.5rem',
  fontWeight: 'normal',
};

theme.typography.body1 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '1rem',
  fontWeight: 'normal',
};


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
            <Route path="/robots" element={<><ScrollToTop /><GradientNavBar /><Robots /></>} />
            <Route path="/robots/:robotId" element={<><ScrollToTop /><GradientNavBar /><IndividualRobot /></>} />
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