import type { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-layer">
        <div className="bg-grid" />
        <div
          className="orb"
          style={{
            left: "12%",
            top: "18%",
            width: 520,
            height: 520,
            background: "rgba(6,182,212,0.05)",
            filter: "blur(130px)",
            animationDuration: "26s",
          }}
        />
        <div
          className="orb"
          style={{
            right: "14%",
            bottom: "20%",
            width: 460,
            height: 460,
            background: "rgba(245,158,11,0.038)",
            filter: "blur(130px)",
            animationDuration: "32s",
            animationDelay: "-10s",
          }}
        />
        <div
          className="orb"
          style={{
            left: "55%",
            top: "55%",
            width: 340,
            height: 340,
            background: "rgba(139,92,246,0.028)",
            filter: "blur(110px)",
            animationDuration: "38s",
            animationDelay: "-18s",
          }}
        />
      </div>
      <div className="scan-line" />
      <div className="page">{children}</div>
    </>
  );
}
