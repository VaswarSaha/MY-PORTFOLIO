"use client";

import { motion, useInView } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
        { name: "Next.js", icon: SiNextdotjs, color: "#71717a", level: 85 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88 },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 92 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 85 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } as Transition,
    },
  };

  return (
    <section id="skills" ref={ref} className="px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-400 md:text-5xl">
            Skills &amp; Technologies
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="glass glass-edge rounded-2xl p-6">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <motion.div
                        className="rounded-lg bg-white/10 p-2"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <skill.icon className="h-6 w-6" style={{ color: skill.color }} />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}dd)` }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass glass-edge mt-16 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Always Learning</h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            I&apos;m constantly exploring new technologies and expanding my skill
            set. Currently diving deep into AI/ML, Web3, and advanced system
            architecture.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;