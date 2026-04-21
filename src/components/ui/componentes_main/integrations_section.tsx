import {
  Calendar,
  CloudSun,
  Gamepad2,
  Lightbulb,
  MessageCircle,
  MessageSquare,
  Music2,
  Plug,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const GithubIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e6edf3"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type OrbNode = { offset: [number, number]; label: string; icon: ReactNode };

const nodes: OrbNode[] = [
  { offset: [100, 0], label: "Discord", icon: <MessageSquare size={22} color="#7289da" /> },
  { offset: [-100, 0], label: "Spotify", icon: <Music2 size={22} color="#1db954" /> },
  { offset: [127, -127], label: "Google", icon: <Calendar size={22} color="#4285f4" /> },
  { offset: [-127, 127], label: "GitHub", icon: <GithubIcon /> },
  { offset: [127, 127], label: "LIFX / WLED", icon: <Lightbulb size={22} color="#fde68a" /> },
  { offset: [-127, -127], label: "Games", icon: <Gamepad2 size={22} color="#a7f3d0" /> },
  { offset: [0, -200], label: "Weather", icon: <CloudSun size={20} color="#a5b4fc" /> },
  { offset: [0, 200], label: "WhatsApp", icon: <MessageCircle size={20} color="#86efac" /> },
];

type IntRow = { icon: ReactNode; name: string; desc: string };

const rows: IntRow[] = [
  {
    icon: <MessageSquare size={18} color="#7289da" />,
    name: "Discord",
    desc: "Bot control, server config, channel permissions, game alerts.",
  },
  {
    icon: <Music2 size={18} color="#1db954" />,
    name: "Spotify",
    desc: "Playback state, queue context and dashboard widgets for personal media control.",
  },
  {
    icon: <Calendar size={18} color="#4285f4" />,
    name: "Google Workspace",
    desc: "Calendar, Tasks and Gmail summaries through focused workspace modules.",
  },
  {
    icon: <GithubIcon size={18} />,
    name: "GitHub",
    desc: "Repository pulse, contribution context and project activity in the dashboard.",
  },
  {
    icon: <Lightbulb size={18} color="#fde68a" />,
    name: "Smart Lighting",
    desc: "LIFX and WLED controls for brightness, color and smart lighting effects.",
  },
  {
    icon: <Gamepad2 size={18} color="#a7f3d0" />,
    name: "Games",
    desc: "Epic free-game alerts, Steam news and Minecraft server checks.",
  },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="v2-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <Plug size={13} />
            Integrations
          </div>
          <h2 className="section-title">
            All your services <span>orbiting</span> one control center.
          </h2>
          <p className="section-sub">
            Integrations are grouped as useful modules so the product stays extensible without overwhelming operators with irrelevant configuration.
          </p>
        </div>

        <div className="orbital-wrap">
          <div className="orbital">
            <div className="orb-ring r1" />
            <div className="orb-ring r2" />
            <div className="orb-ring r3" />

            <div className="orb-center">
              <img src="/favicon.svg" alt="" />
              <div className="orb-center-text">PROMETEO</div>
            </div>

            {nodes.map((node) => {
              const style: CSSProperties = {
                transform: `translate(-50%,-50%) translate(${node.offset[0]}px,${node.offset[1]}px)`,
              };
              return (
                <div key={node.label} className="orb-node" style={style}>
                  {node.icon}
                  <span className="orb-node-label">{node.label}</span>
                </div>
              );
            })}
          </div>

          <div className="orb-text-side">
            <div className="int-list">
              {rows.map((row) => (
                <div key={row.name} className="int-row">
                  <div className="int-row-icon">{row.icon}</div>
                  <div>
                    <div className="int-row-name">{row.name}</div>
                    <div className="int-row-desc">{row.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
