"use client";
import { motion } from "framer-motion";

export default function TechnologiesMention() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", url: "https://react.dev" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "TypeScript", url: "https://typescriptlang.org" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", url: "https://nodejs.org" },
        { name: "Python & Django", url: "https://www.python.org" },
        { name: "PostgreSQL", url: "https://postgresql.org" },
        { name: "Supabase", url: "https://supabase.com" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "React Native", url: "https://reactnative.dev" },
        { name: "Flutter", url: "https://flutter.dev" },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Vercel", url: "https://vercel.com" },
        { name: "AWS", url: "https://aws.amazon.com" },
        { name: "Render", url: "https://render.com" },
      ],
    },
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-gray-300 to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300/30 rounded-full">
            <span className="text-purple-700 text-sm font-semibold tracking-wide">
              TECHNOLOGY STACK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Technology Without Limits
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re deliberately stack-agnostic and choose the best tools for
            your specific goals — whether that&apos;s speed to market, long-term
            scalability, or team familiarity.
          </p>
        </motion.div>

        {/* Technology categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.15,
                ease: "easeOut",
              }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
            >
              {/* Category title */}
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-purple-100 rounded-full mb-3">
                  <h3 className="text-sm font-semibold text-purple-700 tracking-wide">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Tech items */}
              <ul className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <motion.li
                    key={techIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.15 + techIndex * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></span>
                      <span className="font-medium hover:underline">
                        {tech.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Flexibility statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-slate-50 rounded-lg border border-purple-500"
        >
          <p className="text-lg text-gray-700 text-center font-medium">
            If your team already loves something else —{" "}
            <span className="text-purple-600 font-semibold">we&apos;ll use that too.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}