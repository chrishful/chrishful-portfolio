import pottery from "../assets/pottery.png";
import kafkaVisualizer from "../assets/kafka-visualizer.png";
import urlShortener from "../assets/url-shortener.png";
import roleTrackr from "../assets/roletrackr.png";

const projects = [
    {
      title: "RoleTrackr",
      tagline: "A job application pipeline tracker powered by AI.",
      description:
        "A full-stack job search management tool that ingests application confirmation emails via Postmark, extracts structured data using a multi-agent AI pipeline, and tracks the full application lifecycle in a clean dashboard. Features real-time updates via Supabase, status filtering, and a chat interface for querying your pipeline.",
      image: roleTrackr,
      link: null,
      github: "https://github.com/chrishful/career-builder",
      tech: [
        { label: "Gemini", category: "AI" },
        { label: "A2A", category: "AI" },
        { label: "Java", category: "Backend" },
        { label: "Spring Boot", category: "Backend" },
        { label: "Supabase", category: "Backend" },
        { label: "Cloudmailin", category: "Backend" },
        { label: "React", category: "Frontend" },
        { label: "CSS", category: "Frontend" },
        { label: "Render", category: "DevOps" },
        { label: "Vercel", category: "DevOps" },
      ],
    },
  {
    title: "Kafka Event Visualizer",
    tagline: "An observability tool for AI feedback pipelines.",
    description:
      "A full-stack debugging tool built around Apache Kafka. It consumes AI feedback events in real time, displays them with TTL countdowns and feedback metadata, and supports replaying individual events back into the topic for reprocessing. Built to mirror the kind of event infrastructure used in production AI systems.",
    image: kafkaVisualizer,
    link: null,
    github: "https://github.com/chrishful/kafka-visualizer",
    tech: [
      { label: "Java", category: "Backend" },
      { label: "Spring Boot", category: "Backend" },
      { label: "Apache Kafka", category: "Backend" },
      { label: "React", category: "Frontend" },
      { label: "CSS", category: "Frontend" },
      { label: "Docker", category: "DevOps" },
    ],
  },
  {
    title: "URL Shortener",
    tagline: "A distributed ID approach to link shortening.",
    description:
      "A full-stack URL shortener using Snowflake ID generation and base-62 encoding. Includes in-memory caching, per-IP rate limiting via token bucket, and a visit analytics dashboard with time-bucketed charting. Built to practice distributed systems concepts like ID generation strategies and cache invalidation tradeoffs.",
    image: urlShortener,
    link: null,
    github: "https://github.com/chrishful/url-shortener",
    tech: [
      { label: "Java", category: "Backend" },
      { label: "Spring Boot", category: "Backend" },
      { label: "Spring Cache", category: "Backend" },
      { label: "Bucket4j", category: "Backend" },
      { label: "React", category: "Frontend" },
      { label: "Recharts", category: "Frontend" },
    ],
  },
  {
    title: "Pottery Hub",
    tagline: "A social platform for pottery artists.",
    description:
      "Pottery Hub is a full-stack social media app built for the pottery community. Artists can create profiles, share their work, browse a live feed of creations, and connect with other makers. I built it end-to-end — from the React frontend to the Supabase backend with row-level security.",
    image: pottery,
    link: null,
    github: "https://github.com/chrishful/pottery-hub",
    tech: [
      { label: "React", category: "Frontend" },
      { label: "JavaScript", category: "Frontend" },
      { label: "CSS", category: "Frontend" },
      { label: "Supabase", category: "Backend" },
      { label: "PostgreSQL", category: "Backend" },
      { label: "RLS", category: "Backend" },
      { label: "Vercel", category: "DevOps" },
    ],
  },
];

export default projects;
