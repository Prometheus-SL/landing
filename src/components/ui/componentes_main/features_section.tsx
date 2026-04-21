import type { CSSProperties, MouseEvent } from "react";
import {
  Activity,
  Boxes,
  Bot,
  LayoutDashboard,
  Layers,
  LockKeyhole,
  MonitorCog,
  Network,
  RadioTower,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; body: string };

const features: Feature[] = [
  {
    icon: MonitorCog,
    title: "Operate devices through Hermes",
    body: "Connect the desktop agent, inspect machine state in real time, route commands, and keep local capabilities available from the web.",
  },
  {
    icon: LayoutDashboard,
    title: "Compose the workspace",
    body: "Build dashboards with focused widgets for audio, calendars, tasks, repositories, lighting, weather and custom modules.",
  },
  {
    icon: Boxes,
    title: "Extend with modules",
    body: "Install new surfaces from the marketplace and keep integrations isolated behind clear module contracts.",
  },
];

const capabilities: Feature[] = [
  {
    icon: RadioTower,
    title: "Realtime monitoring",
    body: "Agent health and command feedback update without forcing users to jump between tools.",
  },
  {
    icon: Shield,
    title: "Operational permissions",
    body: "Admin, operator and viewer roles make it clear who can inspect, configure or execute actions.",
  },
  {
    icon: Network,
    title: "Service orchestration",
    body: "Discord, Google, GitHub, Spotify, WhatsApp and home automation all become part of a single control surface.",
  },
  {
    icon: LockKeyhole,
    title: "Private by design",
    body: "OAuth links, QR login and local agent boundaries keep sensitive control flows explicit and auditable.",
  },
  {
    icon: Activity,
    title: "Clear system context",
    body: "Dashboards show what changed, what needs attention and which modules are actively contributing data.",
  },
  {
    icon: Bot,
    title: "Agent-first automation",
    body: "PROMETEO centers on the device agent, so automation starts from machine state rather than a disconnected cloud panel.",
  },
];

function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function FeaturesSection() {
  return (
    <section id="platform" className="v2-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={13} />
            Platform
          </div>
          <h2 className="section-title">
            One control plane for <span>machines, modules</span> and daily operations.
          </h2>
          <p className="section-sub">
            Hermes connects the device, PROMETEO organizes the workspace, and modules add specialized capabilities without diluting the core experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
              onMouseMove={handleMouseMove}
            >
              <div className="fi">
                <feature.icon size={24} />
              </div>
              <div className="feature-title">{feature.title}</div>
              <div className="feature-body">{feature.body}</div>
            </div>
          ))}
        </div>

        <div className="cap-grid">
          {capabilities.map((cap) => {
            const style: CSSProperties = { fontSize: 15, marginBottom: 8 };
            return (
              <div key={cap.title} className="cap-card">
                <div className="cap-icon"><cap.icon size={17} /></div>
                <div className="feature-title" style={style}>{cap.title}</div>
                <div className="feature-body">{cap.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
