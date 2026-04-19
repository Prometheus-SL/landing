import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type HeroGeometricProps = {
  className?: string;
  children?: ReactNode;
};

function GridOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.055]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0)_28%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.035))]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-20%,rgba(56,189,248,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_88%_18%,rgba(250,204,21,0.08),transparent_58%)]" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </>
  );
}

export default Background;
