import { ArrowRight, Radar } from "lucide-react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function CtaSection() {
  return (
    <div className="cta-section">
      <div className="cta-grid-bg" />
      <div className="cta-glow-l" />
      <div className="cta-glow-r" />
      <div className="cta-inner">
        <div className="section-eyebrow" style={{ marginBottom: 24 }}>
          <Radar size={13} />
          Ready for operators
        </div>
        <h2 className="cta-title">
          Open the control center.
          <br />
          Evaluate the <span>real product</span>.
        </h2>
        <p className="cta-sub">
          PROMETEO is more convincing when users can see the dashboard, the agent model and the module system working together.
        </p>
        <div className="cta-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => window.open("https://prometeo.miguelprez.es", "_blank")}
          >
            Open app <ArrowRight size={15} />
          </button>
          <button
            type="button"
            className="btn-outline"
            onClick={() => window.open("https://github.com/Prometheus-SL", "_blank")}
          >
            <GithubIcon />
            View GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
