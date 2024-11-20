import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar';
import GradientNavBar from './components/GradientNavBar';
import About from "./pages/about";
import Teams from './pages/teams';
import Robots from './pages/robots';
import Sponsors from './pages/sponsors';
import Game from './pages/game';
import Apply from './pages/apply';
import Footer from './components/footer';
import Accessibility from './pages/accessibility';
import GradientNavBar from './components/GradientNavBar';
import Beater from './pages/robots/beater';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

theme.typography.body1 = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontSize: '1.2rem',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<><NavBar/><About /></>} />
            <Route path="/teams" element={<><GradientNavBar/><Teams/></>} />
            <Route path="/robots" element={<><GradientNavBar /><Robots /></>} />
            <Route path="/robots/beater" element={<><NavBar /><Beater /></>} />
            <Route path="/sponsors" element={<><GradientNavBar/><Sponsors /></>} />
            <Route path="/game" element={<><NavBar/><Game /></>} />
            <Route path="/apply" element={<><GradientNavBar/><Apply /></>} />
            <Route path="/accessibility" element={<><GradientNavBar/><Accessibility /></>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App