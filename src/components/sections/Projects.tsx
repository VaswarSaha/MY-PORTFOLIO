"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Globe,
  ShoppingBag,
  Tv,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  github: string;
  demo: string;
  icon: React.ReactNode;
  technologies: string[];
  status: string;
}

const projects: Project[] = [
  {
    title: "Netflix Clone",
    description:
      "A modern Netflix-inspired streaming platform with movie browsing, search, categories, trailers and a responsive user interface.",
    github: "https://github.com/VaswarSaha/Netflix_Clone",
    demo: "https://vaswarsaha.github.io/Netflix_Clone/",
    icon: <Tv size={32} />,
    technologies: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    status: "Live",
  },
  {
    title: "E-Commerce Website",
    description:
      "A modern responsive clothing e-commerce website with product browsing, search, filters, cart functionality, dark mode and animations.",
    github: "https://github.com/vaswarsaha-dotcom/ecommerce",
    demo: "https://vaswarsaha-dotcom.github.io/ecommerce/",
    icon: <ShoppingBag size={32} />,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    status: "Live",
  },
];

/* GitHub icon without lucide-react */
function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.31 9.43 7.9 10.96.58.11.79-.25.79-.56v-2.17c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.74-1.55-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.42-5.29 5.71.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-white px-6 py-24 text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px] dark:bg-purple-600/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Code2 size={20} className="text-purple-600 dark:text-purple-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
              My Work
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            Here are some of the projects I have built using modern web
            technologies, focusing on responsive design, functionality and
            user experience.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 dark:border-white/10 dark:bg-white/[0.04]"
            >
              {/* Project preview */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-gray-100 to-blue-100 dark:from-purple-950/40 dark:via-black dark:to-blue-950/30">
                <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Project icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-purple-400/30 bg-purple-500/10 text-purple-600 shadow-2xl shadow-purple-900/10 dark:border-purple-400/20 dark:text-purple-300 dark:shadow-purple-900/30"
                >
                  {project.icon}
                </motion.div>

                {/* Live badge */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600 backdrop-blur-md dark:border-green-400/20 dark:text-green-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 dark:bg-green-400" />
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300">
                    {project.title}
                  </h3>

                  <Globe
                    size={20}
                    className="mt-1 shrink-0 text-gray-400 transition-colors group-hover:text-purple-500 dark:text-gray-500 dark:group-hover:text-purple-400"
                  />
                </div>

                <p className="min-h-[84px] text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-purple-400/40 hover:text-purple-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-purple-400/30 dark:hover:text-purple-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    <GitHubIcon size={18} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* GitHub profile button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/VaswarSaha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700 backdrop-blur-md transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-white"
          >
            <GitHubIcon size={19} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}