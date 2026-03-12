import pottery from "../assets/pottery.png";
import kafkaVisualizer from "../assets/kafka-visualizer.png";

const projects = [
  {
    title: "Kafka Event Visualizer",
    tagline: "An observability tool for AI feedback pipelines.",
    description:
      "A full-stack debugging tool built around Apache Kafka. It consumes AI feedback events in real time, displays them with TTL countdowns and feedback metadata, and supports replaying individual events back into the topic for reprocessing. Built to mirror the kind of event infrastructure used in production AI systems.",
    image: kafkaVisualizer,
    link: null,
    github: "https://github.com/chrishful/kafka-visualizer", // update with actual URL
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
    title: "Pottery Hub",
    tagline: "A social platform for pottery artists.",
    description:
      "Pottery Hub is a full-stack social media app built for the pottery community. Artists can create profiles, share their work, browse a live feed of creations, and connect with other makers. I built it end-to-end — from the React frontend to the Supabase backend with row-level security.",
    image: pottery,
    link: "https://pottery-hub-alpha.vercel.app/",
    github: null,
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
