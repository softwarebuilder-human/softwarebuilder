import { motion } from "framer-motion";
import { CheckCircle, Rocket, CreditCard, MonitorSmartphone } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: MonitorSmartphone,
      title: "Prototype First",
      desc: "We will first show you a clean prototype of your website or app.",
    },
    {
      icon: CreditCard,
      title: "Small Advance Payment",
      desc: "After approval, you make a small advance to begin development.",
    },
    {
      icon: Rocket,
      title: "Deployment Live",
      desc: "We develop everything and deploy your complete site or app live.",
    },
    {
      icon: CheckCircle,
      title: "Final Payment",
      desc: "After everything is fully approved, final payment is made.",
    },
  ];

  return (
    <section id="process" className="w-full min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          Our Working Process
        </h2>
        <p className="mt-2 text-gray-300">A simple, transparent system that ensures smooth delivery.</p>
      </div>

      {/* Animated Connecting Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="hidden lg:block absolute top-[52%] left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-purple-500/40 origin-left shadow-[0_0_15px_rgba(168,85,247,0.6)]"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: false }}
            className="relative p-6 rounded-2xl bg-black/40 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md text-center hover:scale-105 transition-transform"
          >
            {/* Number Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 text-black flex items-center justify-center text-xl font-bold shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              {index + 1}
            </div>

            {/* Icon */}
            <step.icon className="w-12 h-12 mx-auto mt-4 mb-4 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

            {/* Content */}
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
