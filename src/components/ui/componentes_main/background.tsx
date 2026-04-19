import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { motion } from "framer-motion";

type HeroGeometricProps = {
  className?: string;
  children?: ReactNode;
};

function GridOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.045]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}

export function Background({ className, children }: HeroGeometricProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 -z-10 overflow-hidden bg-[#050505]",
          className,
        )}
      >
        <GridOverlay />

        {/* Vertical gradient fade */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_24%,rgba(255,255,255,0)_76%,rgba(255,255,255,0.03))]" />

        {/* Diagonal color bleed */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.07),transparent_35%,rgba(250,204,21,0.04)_75%,transparent)]" />

        {/* Floating ambient glow orbs */}
        <motion.div
          className="absolute left-[15%] top-[20%] size-[400px] rounded-full bg-cyan-500/[0.04] blur-[120px]"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[20%] size-[350px] rounded-full bg-amber-500/[0.035] blur-[120px]"
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[55%] top-[60%] size-[280px] rounded-full bg-emerald-500/[0.025] blur-[100px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </>
  );
}

export default Background;
