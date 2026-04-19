import { motion } from "framer-motion";
import {
  AppWindow,
  Braces,
  Cpu,
  DatabaseZap,
  Layers3,
  ServerCog,
} from "lucide-react";

const architecture = [
  {
    icon: AppWindow,
    title: "Web control center",
    description:
      "React, TypeScript and Tailwind deliver the dashboards, admin surfaces and module marketplace.",
  },
  {
    icon: ServerCog,
    title: "API and realtime core",
    description:
      "Node.js, Express, MongoDB and WebSocket endpoints coordinate auth, modules, dashboards and agent state.",
  },
  {
    icon: Cpu,
    title: "Hermes desktop agent",
    description:
      "Electron with native Rust bindings keeps device telemetry, media control and system actions close to the machine.",
  },
];

const stackGroups = [
  {
    title: "Interface",
    items: ["React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui"],
  },
  {
    title: "Platform",
    items: ["Express", "MongoDB", "JWT", "WebSocket"],
  },
  {
    title: "Agent",
    items: ["Electron", "Rust native", "System metrics", "Audio control"],
  },
  {
    title: "Extensibility",
    items: ["Module contracts", "OAuth links", "REST APIs", "Widget kit"],
  },
];

export function TechSection() {
  return (
    <section
      id="tech"
      className="relative border-y border-white/[0.06] px-5 py-24 sm:px-6"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
            Architecture
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
            Clear product architecture for a local-agent platform.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            PROMETEO is easier to trust when the technical shape is legible: web
            app, API platform and local agent each have a clear job.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {architecture.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-lg border border-white/[0.08] bg-black/25 p-6 transition-all duration-300 hover:border-cyan-200/20 hover:shadow-lg hover:shadow-cyan-500/[0.03]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex rounded-md border border-white/[0.09] bg-white/[0.045] p-3 text-cyan-100">
                  <layer.icon className="size-6" />
                </div>
                <span className="text-sm font-medium text-zinc-600">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {layer.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-lg border border-white/[0.07] bg-white/[0.035] p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                {index % 2 === 0 ? (
                  <Layers3 className="size-4 text-emerald-200" />
                ) : (
                  <DatabaseZap className="size-4 text-amber-200" />
                )}
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <Braces className="size-3.5 text-zinc-600" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
