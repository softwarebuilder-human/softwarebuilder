// components/AboutSection.tsx
"use client";
import { motion } from "framer-motion";

const paragraphs = [
  "You have ambitious goals. We deliver the software that makes them reality.",
  "From high-traffic web platforms to native mobile apps and complex backend systems — we build production-grade products that scale with your business.",
  "We partner with funded startups, scale-ups, and enterprises who need a reliable technical co-founder, not just another vendor.",
];

export default function AboutSection() {
  return (
    <section className="py-32 lg:py-40 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Optional small pre-header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-purple-600 font-semibold tracking-wider uppercase md:text-6xl text-3xl mb-6"
        >
          Who we are
        </motion.p>

        <div className="space-y-12 md:space-y-16 text-center">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}   // triggers every scroll
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className="text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug text-gray-800 font-medium max-w-4xl mx-auto"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Optional subtle CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact-form"
            className="inline-block px-10 py-5 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-shadow hover:shadow-2xl"
          >
            Let’s talk about your project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}