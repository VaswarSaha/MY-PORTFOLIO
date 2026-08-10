import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // TODO: replace these with your real, shipped projects before publishing.
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task management app with AI-powered suggestions and natural language processing for task creation.",
      tags: ["React", "OpenAI", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Modern messaging application with real-time updates, file sharing, and group conversations.",
      tags: ["Socket.io", "React", "Express", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking app with workout plans, progress visualization, and social features.",
      tags: ["React Native", "Firebase", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Portfolio Generator",
      description:
        "SaaS platform that helps developers create stunning portfolio websites using customizable templates.",
      tags: ["Next.js", "Prisma", "Stripe", "Vercel"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with detailed forecasts, interactive maps, and location-based alerts.",
      tags: ["Vue.js", "Weather API", "Mapbox"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="projects" ref={ref} className="px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-400 md:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass glass-edge group relative overflow-hidden rounded-2xl"
              whileHover={{ y: -8 }}
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/15 to-purple-500/15">
                <svg className="h-14 w-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-100/70 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;