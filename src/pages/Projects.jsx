import "../styles/projects.css";
import projects from "../resources/projects";

export default function Projects() {
  return (
    <>
      <div className="projects-root">
        <div className="projects-glow" />
        <div className="projects-corner tl" />
        <div className="projects-corner br" />

        <div className="projects-inner">
          <div className="projects-header">
            <p className="projects-eyebrow">Selected work</p>
            <h1 className="projects-heading">Projects</h1>
            <p className="projects-subtext">
              Things I've built outside of work - personal projects,
              experiments, and ideas I wanted to exist.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
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
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn-primary"
                        >
                          Visit Live ↗
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            project.link
                              ? "project-btn-secondary"
                              : "project-btn-primary"
                          }
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
