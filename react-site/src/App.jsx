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

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<><NavBar/><About /></>} />
            <Route path="/teams" element={<><GradientNavBar/><Teams/></>} />
            <Route path="/robots" element={<><GradientNavBar /><Robots /></>} />
            <Route path="/sponsors" element={<><GradientNavBar/><Sponsors /></>} />
            <Route path="/game" element={<><NavBar/><Game /></>} />
            <Route path="/apply" element={<><GradientNavBar/><Apply /></>} />
            <Route path="/accessibility" element={<><GradientNavBar/><Accessibility /></>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App