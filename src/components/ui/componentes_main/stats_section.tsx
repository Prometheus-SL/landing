import { useEffect, useRef, useState } from "react";

type Stat = { label: string; target: number | null };

const stats: Stat[] = [
  { label: "Modules available", target: 24 },
  { label: "Service integrations", target: 7 },
  { label: "Public repositories", target: 4 },
  { label: "Desktop agent (Hermes)", target: null },
];

function AnimatedNumber({ target }: { target: number | null }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(target === null ? 1 : 0);

  useEffect(() => {
    if (target === null || !ref.current) return;
    const element = ref.current;
    let rafId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * target));
          if (p < 1) rafId = requestAnimationFrame(step);
          else setValue(target);
        };
        rafId = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

export function StatsSection() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-num">
              <AnimatedNumber target={stat.target} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
