"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="glass aspect-square overflow-hidden rounded-2xl">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="text-8xl font-bold text-gradient">FD</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl border border-border bg-card" />
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-lg bg-primary/20" />
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              About Me
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Passionate Developer Creating Digital Experiences
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                {"I'm"} Francis Dey, a web developer passionate about creating beautiful,
                functional websites and applications. With expertise in modern
                frontend technologies, I bring ideas to life through clean code
                and thoughtful design.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                things work on the internet. That curiosity has evolved into a
                career focused on delivering exceptional digital experiences
                that make a real impact.
              </p>
              <p>
                When {"I'm"} not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <span className="text-3xl font-bold text-gradient">3+</span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <span className="text-3xl font-bold text-gradient">20+</span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <span className="text-3xl font-bold text-gradient">15+</span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
