"use client";
import { motion } from "framer-motion";

export default function ScrollToContactButton() {
  const handleScroll = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59,130,246,0.5)" }}
      whileTap={{ scale: 0.97 }}
      onClick={handleScroll}
      className="cursor-pointer mt-8 px-8 py-4 bg-green-600 text-black font-semibold rounded-tr-3xl rounded-bl-3xl shadow-lg hover:opacity-90 transition-all duration-0"
    >
      🙋🏻 I have to Build Something
    </motion.button>
  );
}
