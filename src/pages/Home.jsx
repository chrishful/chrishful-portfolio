import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import "../styles/home.css";

const roles = [
  "Backend Engineer",
  "Spring Boot Developer",
  "Systems Architect",
  "AI-Adjacent Builder",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <>
      <style>{`

      `}</style>

      <div className="home-root">
        <div className="home-glow" />
        <div className="home-corner tl" />
        <div className="home-corner br" />

        <div className="home-content">
          <div className="home-logo-wrap">
            <Logo />
          </div>

          <p className="home-label">Software Engineer</p>

          <h1 className="home-name">Chris Hickman</h1>

          <div className="home-role-line">
            <span className="home-role-prefix">~/</span>
            <span>{displayed}</span>
            <span className="home-cursor" />
          </div>

          <div className="home-divider" />

          <p className="home-bio">
            I build <strong>production-grade backend systems</strong> in Java
            &amp; SpringBoot - most recently on an{" "}
            <strong>AI-powered shopping assistant at Walmart</strong>. I bring a
            graphic design background to everything I ship, because good
            engineering should also be a pleasure to use.
          </p>

          <div className="home-pills">
            {[
              "Java",
              "Spring Boot",
              "Kafka",
              "React",
              "Kubernetes",
              "AI/ML Systems",
            ].map((t) => (
              <span key={t} className="home-pill">
                {t}
              </span>
            ))}
          </div>

          <div className="home-ctas">
            <a
              href="https://linkedin.com/in/chrishful"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View LinkedIn ↗
            </a>
            <a href="/contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
