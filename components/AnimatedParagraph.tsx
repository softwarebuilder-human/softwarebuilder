"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedParagraphProps {
  textBlocks: ReactNode[];
}

export default function AnimatedParagraph({ textBlocks }: AnimatedParagraphProps) {
  // Container animation (controls staggering)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.5, // delay between paragraphs
      },
    },
  };

  // Each paragraph animation
  const paragraphVariants = (fromLeft: boolean): Variants => ({
    hidden: { opacity: 0, x: fromLeft ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: ["easeOut"] }, // ✅ fixed type error here
    },
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto sm:p-2 text-justify space-y-8"
    >
      {textBlocks.map((block, index) => {
        const fromLeft = index % 2 === 0;
        return (
          <motion.p
            key={index}
            variants={paragraphVariants(fromLeft)}
            className="text-gray-200"
          >
            {block}
          </motion.p>
        );
      })}
    </motion.div>
  );
}
