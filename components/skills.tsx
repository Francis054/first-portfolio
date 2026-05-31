"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 82, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Figma", level: 70, category: "Design" },
  { name: "SQL", level: 72, category: "Backend" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-card/50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              My Expertise
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              I work with a variety of modern technologies to build fast,
              scalable, and beautiful web applications.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
