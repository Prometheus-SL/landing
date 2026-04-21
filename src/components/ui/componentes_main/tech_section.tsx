import { Cpu, Monitor, Server } from "lucide-react";

export function TechSection() {
  return (
    <section id="architecture" className="v2-section">
      <div className="section-inner">
        <div className="section-header centered">
          <div className="section-eyebrow">
            <Cpu size={13} />
            Architecture
          </div>
          <h2 className="section-title" style={{ margin: "0 auto" }}>
            Three layers, one <span>clear shape</span>.
          </h2>
          <p className="section-sub">
            PROMETEO is easier to trust when the technical shape is readable: web app, API platform and local agent, each with a clear job.
          </p>
        </div>

        <div className="arch-wrap">
          <div className="arch-diagram">
            <svg className="arch-lines" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path className="arch-line" d="M 30 20 L 45 20" />
              <path className="arch-line-anim" d="M 30 20 L 45 20" />
              <path className="arch-line" d="M 55 20 L 70 20" />
              <path
                className="arch-line-anim"
                d="M 55 20 L 70 20"
                style={{ animationDelay: "-1.5s" }}
              />
            </svg>

            <div className="arch-node">
              <div className="arch-node-icon"><Monitor size={26} /></div>
              <div className="arch-node-num">01 · CLIENT</div>
              <div className="arch-node-title">Web Control Center</div>
              <div className="arch-node-body">
                React, TypeScript and Tailwind deliver dashboards, admin surfaces and the module marketplace.
              </div>
              <div className="arch-node-tags">
                <span className="arch-tag cyan">React 19</span>
                <span className="arch-tag cyan">TypeScript</span>
                <span className="arch-tag cyan">Tailwind 4</span>
              </div>
            </div>

            <div className="arch-node">
              <div className="arch-node-icon emerald"><Server size={26} /></div>
              <div className="arch-node-num">02 · API</div>
              <div className="arch-node-title">Core API & Realtime</div>
              <div className="arch-node-body">
                Node.js, Express, MongoDB and WebSocket endpoints coordinate auth, modules, dashboards and agent state.
              </div>
              <div className="arch-node-tags">
                <span className="arch-tag emerald">Express</span>
                <span className="arch-tag emerald">MongoDB</span>
                <span className="arch-tag emerald">JWT</span>
                <span className="arch-tag emerald">WebSocket</span>
              </div>
            </div>

            <div className="arch-node">
              <div className="arch-node-icon amber"><Cpu size={26} /></div>
              <div className="arch-node-num">03 · AGENT</div>
              <div className="arch-node-title">Hermes Desktop Agent</div>
              <div className="arch-node-body">
                Electron with native Rust bindings keeps device telemetry, media control and system actions close to the machine.
              </div>
              <div className="arch-node-tags">
                <span className="arch-tag amber">Electron</span>
                <span className="arch-tag amber">Rust</span>
                <span className="arch-tag amber">System APIs</span>
              </div>
            </div>
          </div>
          <div className="arch-caption">
            <div className="arch-dot" />
            Secure WebSocket channel · Local-first by default
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#61dafb" }} />React</div>
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#3178c6" }} />TypeScript</div>
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#06b6d4" }} />Tailwind</div>
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#68a063" }} />Node.js</div>
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#4db33d" }} />MongoDB</div>
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#a97bff" }} />Electron</div>
          <div className="tech-pill"><div className="tech-dot" style={{ background: "#ce422b" }} />Rust</div>
        </div>
      </div>
    </section>
  );
}
