import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close overlay on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: #282c34;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s, box-shadow 0.3s;
          font-family: 'Syne', sans-serif;
        }

        .nav-root.scrolled {
          border-bottom-color: rgba(255,255,255,0.12);
          box-shadow: 0 4px 32px rgba(0,0,0,0.3);
        }

        .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LEFT — name */
        .nav-brand {
          display: flex;
          flex-direction: column;
          gap: 1px;
          text-decoration: none;
        }

        .nav-brand-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .nav-brand-sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          color: rgba(180, 200, 255, 0.45);
          text-transform: uppercase;
        }

        /* RIGHT — desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-link {
          position: relative;
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          padding: 0.4rem 0.75rem;
          border-radius: 3px;
          transition: color 0.2s, background 0.2s;
        }

        .nav-link:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.05);
        }

        .nav-link.active {
          color: #fff;
        }

        /* Active underline dot */
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(180, 200, 255, 0.8);
        }

        /* HAMBURGER */
        .nav-hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 3px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          padding: 0.4rem 0.6rem;
          font-size: 1.1rem;
          line-height: 1;
          transition: border-color 0.2s, color 0.2s;
        }

        .nav-hamburger:hover {
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
        }

        /* MOBILE OVERLAY */
        .nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(28, 31, 38, 0.97);
          backdrop-filter: blur(12px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          animation: overlay-in 0.2s ease both;
        }

        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .nav-overlay-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 3px;
          color: rgba(255,255,255,0.5);
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0.4rem 0.6rem;
          line-height: 1;
          transition: border-color 0.2s, color 0.2s;
        }

        .nav-overlay-close:hover {
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }

        .nav-overlay-link {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 8vw, 3rem);
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: -0.02em;
          transition: color 0.2s;
          line-height: 1.2;
        }

        .nav-overlay-link:hover,
        .nav-overlay-link.active {
          color: #fff;
        }

        .nav-overlay-footer {
          position: absolute;
          bottom: 2rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Brand */}
          <Link to="/" className="nav-brand">
            <span className="nav-brand-name">Chris Hickman</span>
            <span className="nav-brand-sub">Software Engineer</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link${location.pathname === to ? " active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="nav-overlay">
          <button
            className="nav-overlay-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-overlay-link${location.pathname === to ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}

          <span className="nav-overlay-footer">chrishful.dev</span>
        </div>
      )}
    </>
  );
}
