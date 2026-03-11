import pottery from "../resources/pottery.png";
import "../styles/projects.css";

const project = {
  title: "Pottery Hub",
  tagline: "A social platform for pottery artists.",
  description:
    "Pottery Hub is a full-stack social media app built for the pottery community. Artists can create profiles, share their work, browse a live feed of creations, and connect with other makers. I built it end-to-end — from the React frontend to the Supabase backend with row-level security.",
  image: pottery,
  link: "https://pottery-hub-alpha.vercel.app/",
  github: null, // add if public
  tech: [
    { label: "React", category: "Frontend" },
    { label: "JavaScript", category: "Frontend" },
    { label: "CSS", category: "Frontend" },
    { label: "Supabase", category: "Backend" },
    { label: "PostgreSQL", category: "Backend" },
    { label: "RLS", category: "Backend" },
    { label: "Vercel", category: "DevOps" },
  ],
};

export default function Projects() {
  return (
    <>
      <style>{`

      `}</style>

      <div className="projects-root">
        <div className="projects-glow" />
        <div className="projects-corner tl" />
        <div className="projects-corner br" />

        <div className="projects-inner">
          <div className="projects-header">
            <p className="projects-eyebrow">Selected work</p>
            <h1 className="projects-heading">Projects</h1>
            <p className="projects-subtext">
              Things I've built outside of work — personal projects,
              experiments, and ideas I wanted to exist.
            </p>
          </div>

          {/* Feature card */}
          <div className="project-card">
            <img
              className="project-screenshot"
              src={project.image}
              alt={project.title}
            />

            <div className="project-body">
              <div className="project-left">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-right">
                <div>
                  <p className="project-tech-label">Tech Stack</p>
                  <div className="project-tech-list">
                    {project.tech.map((t) => (
                      <div key={t.label} className="project-tech-item">
                        <span>{t.label}</span>
                        <span className="project-tech-category">
                          {t.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-primary"
                  >
                    Visit Live ↗
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-secondary"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="projects-footer">
            <div className="projects-footer-line" />
            <span className="projects-footer-text">
              More projects in progress
            </span>
            <div className="projects-footer-line" />
          </div>
        </div>
      </div>
    </>
  );
}
