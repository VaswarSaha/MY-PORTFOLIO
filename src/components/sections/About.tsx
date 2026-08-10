import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="about" ref={ref} className="px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-400 md:text-5xl">
            About Me
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div variants={itemVariants} className="relative">
            <div className="glass glass-edge relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <svg className="h-32 w-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer &amp; Creative Thinker
            </h3>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I&apos;m a full-stack developer with 3+ years of experience building
              beautiful, functional, and user-friendly applications. I specialize
              in modern JavaScript frameworks and always strive to write clean,
              maintainable code.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing what I learn
              through writing.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "20+" },
                { label: "Technologies", value: "15+" },
                { label: "Happy Clients", value: "10+" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;