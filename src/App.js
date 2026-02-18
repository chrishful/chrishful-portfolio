import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import SocialMedia from './components/SocialMedia';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {

  return (
    <Router>
      <div className="App">
       <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <SocialMedia />
      </div>
    </Router>
  );
}

export default App;
