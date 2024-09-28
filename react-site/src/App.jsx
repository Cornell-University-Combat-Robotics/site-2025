import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Layout from "./components/layout";
import About from "./pages/about";
import Teams from './pages/teams';
import Robots from './pages/robots';
import Sponsors from './pages/sponsors';
import Game from './pages/game';
import Apply from './pages/apply';

function App() {
  return (
    <>
      <main>
        <Router>
          {/*<NavBar />*/}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/game" element={<Game />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
          {/*<Footer />*/}
        </Router>
      </main>
    </>
  );
}

export default App
