import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Coding 24/7", "Tech Enthusiast", "Software Developer", "DevOps"];

export default function HeroTyping() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 50);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    }
    setDisplayText(currentWord.substring(0, charIndex));
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <motion.h2 className="text-2xl text-zinc-400 md:text-4xl font-mono mt-4">
    {displayText}
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 0.8 }}
    >
      |
    </motion.span>
  </motion.h2>
  );
}
