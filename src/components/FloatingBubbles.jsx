import { useState, useEffect, useRef } from "react";

const phrases = [
                  "Full-Stack Developer",
                  "React & TypeScript Pro",
                  "Kubernetes Enthusiast",
                  "Backend Problem Solver",
                  "Software Architect",
                  "UI/UX Innovator",
                  "Creative Coder",
                  "Digital Craftsman",
                  "Graphic Design Specialist",
                  "Visual Storyteller",
                  "Pottery Artist",
                  "Motorcycle Rider",
                  "Photographer & Coder",
                  "Workout Tech Builder",
                  "Data Pipeline Engineer",
                  "Frontend Visionary",
                  "Interactive Developer",
                  "Mobile-First Designer",
                  "Portfolio Innovator",
                  "Hands-On Programmer",
                  "Algorithm Tinkerer",
                  "Creative Technologist",
                  "Startup-Oriented Engineer",
                  "Coding Craftsman",
                  "Full-Stack Visionary",
                  "Software Problem Solver",
                  "Code & Canvas",
                  "Design-Oriented Engineer",
                  "Tech-Driven Creator"
                ];

// Center box (50% in middle)
const CENTER_BOX = { xMin: 25, xMax: 75, yMin: 25, yMax: 100 };

// Outer margin box (10% from edges)
const OUTER_MARGIN = { xMin: 10, xMax: 90, yMin: 10, yMax: 90 };

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    // Initialize bubbles outside center
    const initial = phrases.map((text) => {
      let x = Math.random() * (OUTER_MARGIN.xMax - OUTER_MARGIN.xMin) + OUTER_MARGIN.xMin;
      let y = Math.random() * (OUTER_MARGIN.yMax - OUTER_MARGIN.yMin) + OUTER_MARGIN.yMin;

      // Ensure initial position is outside center
      while (x > CENTER_BOX.xMin && x < CENTER_BOX.xMax && y > CENTER_BOX.yMin && y < CENTER_BOX.yMax) {
        x = Math.random() * (OUTER_MARGIN.xMax - OUTER_MARGIN.xMin) + OUTER_MARGIN.xMin;
        y = Math.random() * (OUTER_MARGIN.yMax - OUTER_MARGIN.yMin) + OUTER_MARGIN.yMin;
      }

      const vx = (Math.random() * 0.1 + 0.01) * (Math.random() < 0.5 ? 1 : -1);
      const vy = (Math.random() * 0.1 + 0.01) * (Math.random() < 0.5 ? 1 : -1);

      return { text, x, y, vx, vy };
    });

    setBubbles(initial);
  }, []);

  useEffect(() => {
    const animate = () => {
      setBubbles((prev) =>
        prev.map((b) => {
          let nx = b.x + b.vx;
          let ny = b.y + b.vy;
          let nvx = b.vx;
          let nvy = b.vy;

          // Bounce off outer margin edges
          if (nx <= OUTER_MARGIN.xMin || nx >= OUTER_MARGIN.xMax) nvx *= -1;
          if (ny <= OUTER_MARGIN.yMin || ny >= OUTER_MARGIN.yMax) nvy *= -1;

          // Center box collision logic
          const inX = nx > CENTER_BOX.xMin && nx < CENTER_BOX.xMax;
          const inY = ny > CENTER_BOX.yMin && ny < CENTER_BOX.yMax;

          if (inX && inY) {
            // Reverse velocity only on axes causing collision
            if (b.x < CENTER_BOX.xMin) nvx *= -1;
            else if (b.x > CENTER_BOX.xMax) nvx *= -1;

            if (b.y < CENTER_BOX.yMin) nvy *= -1;
            else if (b.y > CENTER_BOX.yMax) nvy *= -1;

            nx = b.x + nvx;
            ny = b.y + nvy;
          }

          return { ...b, x: nx, y: ny, vx: nvx, vy: nvy };
        })
      );

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= bubbles.length) return;

    const timeout = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [visibleCount, bubbles.length]);


  return (
    <div className="floating-bubbles-container">
      {bubbles.slice(0, visibleCount).map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
            color: "white",
            textShadow: "0 0 10px rgba(0,0,0,0.5)",
            whiteSpace: "nowrap",
            animation: `fadeScale 20s ease-in-out infinite`,
            "--scale-amp": b.scaleAmp,
          }}
        >
          {b.text}
        </span>
      ))}
    </div>
  );
}