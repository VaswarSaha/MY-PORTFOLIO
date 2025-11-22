import { motion, useInView, Variants, Transition } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFirebase,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 85 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 88 },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 75 },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 82 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
        { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 70 },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900', level: 65 },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      } as Transition,
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${skill.color}, ${skill.color}dd)`,
                        }}
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
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            I'm constantly exploring new technologies and expanding my skill set. Currently diving deep into AI/ML, Web3, and advanced system architecture.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;