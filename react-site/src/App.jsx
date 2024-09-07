import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import About from "./pages/about";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
