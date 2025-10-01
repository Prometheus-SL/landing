"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";



type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};


function Prometheus({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -20 900 85"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
      {...props}
    >
      <title>Prometheus</title>
    
      <motion.text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="70"
        fontFamily={"Courier New, monospace"}
        fill="none"
        stroke="#fff" 
        strokeWidth="2"
        strokeDasharray="700"
        strokeDashoffset="700"
        initial={{ strokeDashoffset: 800 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ 
          duration: 4, 
          ease: "easeOut",
          delay: calc(0.7),
          opacity: { duration: 0.4, delay: calc(0.7) },

        }}
      >
        PROMETHEUS
      </motion.text>
      
    </motion.svg>
  );
}

export { Prometheus };
