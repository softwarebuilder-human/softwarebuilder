"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "Discovery & Strategy", desc: "Deep dive into your goals, users, and success metrics." },
    { title: "Design & Prototype", desc: "Pixel-perfect UI and interactive prototypes." },
    { title: "Development", desc: "Weekly demos, clean code, full transparency." },
    { title: "Launch & Scale", desc: "Seamless deployment + ongoing support." },
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300/30 rounded-full">
            <span className="text-purple-700 text-sm font-semibold tracking-wide">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent, iterative, and built for speed without sacrificing quality.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="mt-20">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-purple-300 to-purple-100"></div>
                )}

                {/* Card */}
                <div className="relative bg-white p-8 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all h-full">
                  {/* Step number */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-6">Ready to transform your vision into reality?</p>
          <a
            href="#contact-form"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-2xl hover:shadow-purple-900/50"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}