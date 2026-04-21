import {
  ArrowRight,
  Bot,
  Calendar,
  Gamepad2,
  Music2,
} from "lucide-react";

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

export function HeroSection() {
  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <div className="hero-aurora" />
      <div className="hero-grid-overlay" />
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Modular Command Center
        </div>
        <h1 className="v2-h1">PROMETEO</h1>
        <p className="hero-tagline">
          Control PCs, bots, lights, music, tasks and dashboards from a{" "}
          <b>visual cockpit</b> connected to the Hermes agent.
        </p>
        <div className="hero-actions">
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

        <div className="hero-visual">
          <div className="hero-mockup">
            <div className="hero-mockup-bar">
              <div className="tl" style={{ background: "rgba(239,68,68,0.75)" }} />
              <div className="tl" style={{ background: "rgba(234,179,8,0.75)" }} />
              <div className="tl" style={{ background: "rgba(34,197,94,0.75)" }} />
              <span className="hero-mockup-url">prometeo.miguelprez.es</span>
            </div>
            <img src="/screenshots/dashboard.png" alt="Prometeo Dashboard" />
            <div className="hero-mockup-glow" />
          </div>

          <div className="float-mod fm-top-l">
            <div className="fm-header">
              <div className="fm-icon"><Bot size={14} color="#a5f3fc" /></div>
              <div>
                <div className="fm-title">Hermes</div>
                <div className="fm-val">PC ready</div>
              </div>
            </div>
            <div className="fm-detail">Audio, CPU, commands</div>
          </div>

          <div className="float-mod fm-top-r">
            <div className="fm-header">
              <div className="fm-icon"><Music2 size={14} color="#fde68a" /></div>
              <div>
                <div className="fm-title">Spotify</div>
                <div className="fm-val">Now playing</div>
              </div>
            </div>
            <div className="fm-detail">Queue & playback</div>
          </div>

          <div className="float-mod fm-bot-l">
            <div className="fm-header">
              <div className="fm-icon"><Calendar size={14} color="#a7f3d0" /></div>
              <div>
                <div className="fm-title">Google</div>
                <div className="fm-val">Live agenda</div>
              </div>
            </div>
            <div className="fm-detail">Tasks, Gmail, events</div>
          </div>

          <div className="float-mod fm-bot-r">
            <div className="fm-header">
              <div className="fm-icon"><Gamepad2 size={14} color="#c4b5fd" /></div>
              <div>
                <div className="fm-title">Discord</div>
                <div className="fm-val">Gaming alerts</div>
              </div>
            </div>
            <div className="fm-detail">Epic, Steam, permissions</div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-hint-bar" />
      </div>
    </section>
  );
}
