import { useState } from "react";
import "../styles/contact.css";

const socials = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/chrishful",
    href: "https://linkedin.com/in/chrishful",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9h3.102v1.561h.044c.432-.817 1.487-1.679 3.061-1.679 3.271 0 3.875 2.152 3.875 4.951v6.619zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.554 13.019H3.783V9h3.108v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "github.com/chrishful",
    href: "https://github.com/chrishful",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "chrisHickman.dev@gmail.com",
    href: "mailto:chrisHickman.dev@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width="20"
        height="20"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Discord",
    handle: "273197891957555212",
    href: "https://discord.com/users/273197891957555212",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.014.043.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default mail client with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:chrisHickman.dev@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  const allFilled = form.name && form.email && form.message;

  return (
    <>
      <div className="contact-root">
        <div className="contact-glow" />
        <div className="contact-corner tl" />
        <div className="contact-corner br" />

        <div className="contact-inner">
          {/* LEFT */}
          <div className="contact-left">
            <p className="contact-eyebrow">Let's connect</p>
            <h1 className="contact-heading">
              Get In
              <br />
              Touch
            </h1>
            <p className="contact-subtext">
              Open to backend and full-stack roles — especially AI-adjacent
              teams.
              <br />
              Response time: fast.
            </p>

            <a
              href="/Chris_Hickman_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-resume-btn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
              >
                <path d="M12 16V4M12 16l-4-4M12 16l4-4M4 20h16" />
              </svg>
              Download Resume
            </a>

            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <span className="contact-social-icon">{s.icon}</span>
                  <span>{s.handle}</span>
                  <span className="contact-social-label">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label className="contact-label">Name</label>
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label">Email</label>
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label">Message</label>
              <textarea
                className="contact-textarea"
                name="message"
                placeholder="Hi Chris, I'd love to chat about..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
              disabled={!allFilled}
            >
              Send Message ↗
            </button>

            {status === "sent" && (
              <p className="contact-success">✓ Opening your mail client...</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
