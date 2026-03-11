import "../styles/about.css";

export default function About() {
  return (
    <>
      <div className="about-root">
        <div className="about-glow" />
        <div className="about-corner tl" />
        <div className="about-corner br" />

        <div className="about-inner">
          {/* LEFT COLUMN */}
          <div className="about-left">
            <div className="about-photo-wrap">
              <img
                className="about-photo"
                src="/img/about-photo.jpg"
                alt="Chris Hickman"
              />
            </div>
            <p className="about-photo-caption">Chris & his son, upstate NY</p>

            <div className="about-status">
              <span className="about-status-dot" />
              <span className="about-status-text">Open to new roles</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-right">
            <div>
              <p className="about-eyebrow">About me</p>
              <h1 className="about-heading">
                Engineer.
                <br />
                Designer.
                <br />
                Builder.
              </h1>

              <div className="about-body">
                <p>
                  I'm a backend software engineer with{" "}
                  <strong>3+ years of production experience</strong> building
                  high-scale systems in Java and Spring Boot. Most recently I
                  was at
                  <strong> Walmart Emerging Tech</strong>, shipping features for
                  Sparky — an AI-powered shopping assistant serving over a
                  million customers a month.
                </p>
                <p>
                  What makes me a little different: before I wrote my first line
                  of Java, I was studying <strong>Graphic Art & Design</strong>.
                  I care about how things look and feel, not just how they run.
                  That instinct shows up in everything from how I structure an
                  API to how I think about developer experience.
                </p>
                <p>
                  I'm drawn to teams building something genuinely new —
                  especially in the AI space. I want to work somewhere where the
                  problems are hard, the people are sharp, and the work actually
                  matters.
                </p>
                <p>
                  Outside of work I'm a <strong>motorcycle rider</strong>, a{" "}
                  <strong>pottery artist</strong>, a dad, and someone who thinks
                  the best ideas usually happen away from a screen.
                </p>
              </div>
            </div>

            <div className="about-divider" />

            {/* Timeline */}
            <div>
              <p className="about-section-label">Experience & Education</p>
              <div className="about-timeline">
                <div className="about-timeline-item">
                  <span className="about-timeline-year">2025 – now</span>
                  <div>
                    <p className="about-timeline-title">
                      Software Engineer — Sparky AI
                    </p>
                    <p className="about-timeline-sub">
                      Walmart Emerging Tech · Hoboken, NJ
                    </p>
                  </div>
                </div>
                <div className="about-timeline-item">
                  <span className="about-timeline-year">2023 – 2025</span>
                  <div>
                    <p className="about-timeline-title">
                      Software Engineer — Catalog
                    </p>
                    <p className="about-timeline-sub">
                      Walmart Global Tech · Hoboken, NJ
                    </p>
                  </div>
                </div>
                <div className="about-timeline-item">
                  <span className="about-timeline-year">2021 – 2022</span>
                  <div>
                    <p className="about-timeline-title">
                      Research Intern — HCI & Unity
                    </p>
                    <p className="about-timeline-sub">
                      TARS Studio · Clarkson University
                    </p>
                  </div>
                </div>
                <div className="about-timeline-item">
                  <span className="about-timeline-year">2021 – 2022</span>
                  <div>
                    <p className="about-timeline-title">BS Computer Science</p>
                    <p className="about-timeline-sub">
                      Clarkson University · GPA 3.86, Graduated with Great
                      Distinction
                    </p>
                  </div>
                </div>
                <div className="about-timeline-item">
                  <span className="about-timeline-year">Prior</span>
                  <div>
                    <p className="about-timeline-title">
                      AAS Graphic Art & Design
                    </p>
                    <p className="about-timeline-sub">NCCC · GPA 3.944</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-divider" />

            {/* Outside work */}
            <div>
              <p className="about-section-label">Outside of work</p>
              <div className="about-tags">
                {[
                  "🏍️ Motorcycles",
                  "🏺 Pottery",
                  "👨‍👧 Dad of two",
                  "🎮 Game Dev",
                  "🎨 Graphic Design",
                  "📚 Reading",
                  "🏋️ Lifting",
                ].map((tag) => (
                  <span key={tag} className="about-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
