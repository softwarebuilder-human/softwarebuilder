"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingWhatsapp() {
  const whatsappNumber = "918490917647";
  const whatsappMessage = "Hi, I'm interested in discussing a project with Software Builder.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-2 sm:bottom-8 sm:right-8 md:right-25 md:bottom-25 z-40 group"
    >
      {/* Background pulse effect */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-emerald-500 rounded-full opacity-30"
      />

      {/* Main button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center">
        {/* WhatsApp Icon from local file */}
        <Image
          src="/svgs/whatsapp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          className="sm:w-8 sm:h-8"
        />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-2 right-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap pointer-events-none"
      >
        Chat with us!
        <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900 border-y-4 border-y-transparent"></div>
      </motion.div>
    </motion.a>
  );
}