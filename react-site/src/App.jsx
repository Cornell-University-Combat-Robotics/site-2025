import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar';
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

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<><NavBar/><About /></>} />
            <Route path="/teams" element={<><Teams/></>} />
            <Route path="/robots" element={<><NavBar /><Robots /></>} />
            <Route path="/robots/beater" element={<><NavBar /><Beater /></>} />
            <Route path="/sponsors" element={<><NavBar /><Sponsors /></>} />
            <Route path="/game" element={<><NavBar /><Game /></>} />
            <Route path="/apply" element={<><NavBar /><Apply /></>} />
            <Route path="/accessibility" element={<><NavBar /><Accessibility /></>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App