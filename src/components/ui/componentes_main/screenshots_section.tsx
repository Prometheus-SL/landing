import { useState } from "react";
import { Monitor } from "lucide-react";

const tabs = [
  { key: "dashboard", label: "Dashboard" },
  { key: "marketplace", label: "Marketplace" },
  { key: "agents", label: "Agents" },
  { key: "login", label: "Secure login" },
  { key: "discord", label: "Discord" },
  { key: "admin", label: "Admin panel" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const sources: Record<TabKey, string> = {
  dashboard: "/screenshots/dashboard.png",
  marketplace: "/screenshots/marketplace.png",
  agents: "/screenshots/agents.png",
  login: "/screenshots/login.png",
  discord: "/screenshots/discord.png",
  admin: "/screenshots/admin.png",
};

export function ScreenshotsSection() {
  const [active, setActive] = useState<TabKey>("dashboard");
  const [fading, setFading] = useState(false);

  const selectTab = (key: TabKey) => {
    if (key === active) return;
    setFading(true);
    window.setTimeout(() => {
      setActive(key);
      setFading(false);
    }, 200);
  };

  return (
    <section id="product" className="v2-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <Monitor size={13} />
            Product
          </div>
          <h2 className="section-title">
            Real screens, <span>not promises</span>.
          </h2>
          <p className="section-sub">
            Dashboards, agents, modules, integrations and administration controls visible from day one.
          </p>
        </div>

        <div className="gallery-wrap">
          <div className="gallery-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`tab-btn${tab.key === active ? " active" : ""}`}
                onClick={() => selectTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="gallery-viewer">
            <div className="viewer-bar">
              <div className="tl" style={{ background: "rgba(239,68,68,0.75)" }} />
              <div className="tl" style={{ background: "rgba(234,179,8,0.75)" }} />
              <div className="tl" style={{ background: "rgba(34,197,94,0.75)" }} />
              <span className="viewer-url">prometeo.miguelprez.es</span>
            </div>
            <img
              className="screen-img"
              src={sources[active]}
              alt={tabs.find((t) => t.key === active)?.label ?? ""}
              style={{ opacity: fading ? 0 : 1 }}
            />
          </div>

          <div className="gallery-meta">
            <div className="gm-item">
              <div className="gm-label">Built-in</div>
              <div className="gm-text">Every view ships with the core platform — no installs required for the defaults.</div>
            </div>
            <div className="gm-item">
              <div className="gm-label">Configurable</div>
              <div className="gm-text">Widgets, tabs, permissions and modules adapt to operator preferences and context.</div>
            </div>
            <div className="gm-item">
              <div className="gm-label">Consistent</div>
              <div className="gm-text">Same type scale, spacing and motion language across every product surface.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
