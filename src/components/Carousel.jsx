import { useState, useRef } from "react";
import "../carousel.css";
import pottery from "../resources/pottery.jpg";

const projects = [
  {
    id: 1,
    title: "Pottery Hub",
    image: pottery,
    description:
      "A social media platform for pottery artists. Features include user profiles, post creation, and a feed to showcase pottery creations.",
    link: "https://pottery-hub-alpha.vercel.app/",
    tech: [
      "Built in React",
      "Database on Supabase",
      "JavaScript and CSS",
      "Deployed on Vercel",
      "PostgreSQL",
      "RLS",
    ],
  },
  {
    id: 2,
    title: "Pottery Hub",
    image: pottery,
    description:
      "A social media platform for pottery artists. Features include user profiles, post creation, and a feed to showcase pottery creations.",
    link: "https://pottery-hub-alpha.vercel.app/",
    tech: [
      "Built in React",
      "Database on Supabase",
      "JavaScript and CSS",
      "Deployed on Vercel",
      "PostgreSQL",
      "RLS",
    ],
  },
  {
    id: 3,
    title: "Pottery Hub",
    image: pottery,
    description:
      "A social media platform for pottery artists. Features include user profiles, post creation, and a feed to showcase pottery creations.",
    link: "https://pottery-hub-alpha.vercel.app/",
    tech: [
      "Built in React",
      "Database on Supabase",
      "JavaScript and CSS",
      "Deployed on Vercel",
      "PostgreSQL",
      "RLS",
    ],
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [activeTech, setActiveTech] = useState(null);
  const startX = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current === null) return;

    const diff = e.clientX - startX.current;

    if (diff > 50) prev();
    if (diff < -50) next();

    startX.current = null;
  };

  function getClass(index, current) {
    if (projects.length === 1) return "project-card-center";
    if (projects.length === 2) {
      if (index === current) return "project-card-right";
      if (index === (current + 1) % projects.length)
        return "project-card-center";
      return "hidden";
    }
    if (index === current) return "project-card-left";
    if (index === (current - 1 + projects.length) % projects.length)
      return "project-card-right";
    if (index === (current + 1) % projects.length) return "project-card-center";
    return "hidden";
  }

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {projects.map((project, index) => (
          <div
            className={`carousel-slide ${getClass(index, current)}`}
            key={project.id}
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} />

              <div className="project-bottom">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    Visit
                  </a>

                  <button
                    className="info-btn"
                    onClick={() =>
                      setActiveTech(
                        activeTech === project.id ? null : project.id,
                      )
                    }
                  >
                    ⓘ
                  </button>
                </div>
              </div>

              {activeTech === project.id && (
                <div className="tech-overlay">
                  <h4>Tech Stack</h4>
                  <ul>
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className="tech-overlay-x"
                    onClick={() => setActiveTech(null)}
                  >
                    {" "}
                    X{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="nav left" onClick={prev}>
        ‹
      </button>
      <button className="nav right" onClick={next}>
        ›
      </button>
    </div>
  );
}
