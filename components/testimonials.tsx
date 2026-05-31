"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Francis delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthLab",
    content:
      "Working with Francis was a pleasure. He understood our vision perfectly and translated it into a beautiful, functional website that has significantly improved our online presence.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Studios",
    content:
      "Francis is not just a developer, he is a problem solver. He brought innovative solutions to complex challenges and delivered a product that our team loves using every day.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "CTO, InnovateTech",
    content:
      "The quality of code and the user experience Francis created for our platform was outstanding. He is reliable, communicative, and highly skilled.",
    avatar: "DK",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="bg-card/50 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              What Clients Say
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="glass overflow-hidden rounded-2xl p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/30" />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <p className="text-lg text-muted-foreground md:text-xl">
                  {`"${testimonials[currentIndex].content}"`}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation dots */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg transition-transform hover:scale-110 md:-translate-x-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg transition-transform hover:scale-110 md:translate-x-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
