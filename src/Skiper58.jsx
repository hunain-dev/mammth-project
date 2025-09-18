
import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Mammoth Murals", href: "/", description: "[0]" },
];

export const Header = () => {
  return (
    <ul className="flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3 backdrop-blur-sm">
      {navigationItems.map((item, index) => (
        <li
          className="relative flex cursor-pointer flex-col items-center overflow-visible"
          key={index}
        >
          <div className="relative flex items-start bg-black text-white py-3 px-2">
            <TextRoll
              center
              className="text-2xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors"
            >
              {item.name}
            </TextRoll>
          </div>
        </li>
      ))}
    </ul>
  );
};

const STAGGER = 0.035;

const TextRoll = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{ lineHeight: 1 }}
    >
      {/* Top Layer */}
      <div className="flex gap-4">
        {children.split(" ").map((word, wIndex) => (
          <span key={wIndex} className="flex">
            {word.split("").map((l, i) => {
              const delay = center
                ? STAGGER * Math.abs(i - (word.length - 1) / 2)
                : STAGGER * i;

              return (
             <motion.span
  key={i}
  variants={{
    initial: { y: 0 },
    hovered: { y: "-100%" },
  }}
  transition={{
    ease: [0.4, 0, 0.2, 1], // cubic-bezier for smooth ease
    delay,
    duration: 0.6, // duration thoda lamba, smooth movement
  }}
  className="inline-block"
>
  {l}
</motion.span>

              );
            })}
          </span>
        ))}
      </div>

      {/* Bottom Layer */}
      <div className="absolute inset-0 flex gap-4">
        {children.split(" ").map((word, wIndex) => (
          <span key={wIndex} className="flex">
            {word.split("").map((l, i) => {
              const delay = center
                ? STAGGER * Math.abs(i - (word.length - 1) / 2)
                : STAGGER * i;

              return (
               <motion.span
  key={i}
  variants={{
    initial: { y: "100%" },
    
    hovered: { y: 0 },
  }}
  transition={{
    ease: [0.4, 0, 0.2, 1],
    delay,
    duration: 0.6,
  }}
  className="inline-block"
>
  {l}
</motion.span>

              );
            })}
          </span>
        ))}
      </div>
    </motion.span>
  );
};

export { TextRoll };
