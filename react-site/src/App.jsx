import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NavBar from './components/NavBar';
import GradientNavBar from './components/GradientNavBar';
import About from "./pages/about";
import Teams from './pages/teams';
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
  fontSize: '4rem',
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
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<><NavBar/><About /></>} />
            <Route path="/teams" element={<><GradientNavBar/><Teams/></>} />
            <Route path="/robots" element={<><GradientNavBar /><Robots /></>} />
            <Route path="/robots/beater" element={<><NavBar /><Beater /></>} />
            <Route path="/robots/slugma" element={<><NavBar /><Slugma /></>} />
            <Route path="/robots/batbot" element={<><NavBar /><Batbot /></>} />
            <Route path="/robots/swiss" element={<><NavBar /><Swiss /></>}/>
            <Route path="/robots/hestr" element={<><NavBar /><Hestr /></>}/>
            <Route path="/sponsors" element={<><GradientNavBar/><Sponsors /></>} />
            <Route path="/game" element={<><NavBar/><Game /></>} />
            <Route path="/apply" element={<><GradientNavBar/><Apply /></>} />
            <Route path="/accessibility" element={<><GradientNavBar/><Accessibility /></>} />
          </Routes>
          <Footer setHeight={setFooterHeight} />
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App