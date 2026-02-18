import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="Navigation">

        {/* Desktop Links */}
        <div className="desktop-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div className="overlay">
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <div className="overlay-links">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
