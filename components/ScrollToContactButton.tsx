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
  className="relative overflow-hidden cursor-pointer mt-8 px-8 py-4 bg-green-700 text-black font-semibold rounded-tr-3xl rounded-bl-3xl shadow-lg hover:opacity-90 transition-all duration-300"
>
  🙋🏻 I have to Build Something

  {/* Moving Shine Effect */}
  <span className="absolute inset-0 overflow-hidden rounded-tr-3xl rounded-bl-3xl">
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-30 animate-shine"></span>
  </span>
</motion.button>


  );
}
