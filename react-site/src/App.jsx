import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar';
import GradientNavBar from './components/GradientNavBar';
import ScrollToTop from './components/ScrollToTop';
import About from "./pages/about";
import Team from './pages/team';
import Marketing from './pages/marketing';
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
            <Route path="/robots" element={<><ScrollToTop /><GradientNavBar /><Robots /></>} />
            <Route path="/robots/beater" element={<><ScrollToTop /><NavBar /><Beater /></>} />
            <Route path="/robots/slugma" element={<><ScrollToTop /><NavBar /><Slugma /></>} />
            <Route path="/robots/batbot" element={<><ScrollToTop /><NavBar /><Batbot /></>} />
            <Route path="/robots/swiss" element={<><ScrollToTop /><NavBar /><Swiss /></>} />
            <Route path="/robots/hestr" element={<><ScrollToTop /><NavBar /><Hestr /></>} />
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