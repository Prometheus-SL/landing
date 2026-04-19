import { motion, type Variants } from "framer-motion";
import {
  Bot,
  Boxes,
  ChartNoAxesCombined,
  LayoutDashboard,
  LockKeyhole,
  MonitorCog,
  Network,
  RadioTower,
  Shield,
} from "lucide-react";

const platformLayers = [
  {
    icon: MonitorCog,
    title: "Operate devices through Hermes",
    description:
      "Connect the desktop agent, inspect live machine state, route commands and keep local capabilities available from the web.",
  },
  {
    icon: LayoutDashboard,
    title: "Compose the workspace",
    description:
      "Build dashboards with focused widgets for audio, calendars, tasks, repositories, lighting, weather and custom modules.",
  },
  {
    icon: Boxes,
    title: "Extend with modules",
    description:
      "Install new surfaces through the marketplace and keep integrations isolated behind clear module contracts.",
  },
];

const capabilities = [
  {
    icon: RadioTower,
    title: "Realtime monitoring",
    description:
      "Agent health, command feedback and dashboard data update without forcing users to jump between tools.",
  },
  {
    icon: Shield,
    title: "Operational permissions",
    description:
      "Admin, operator and viewer roles make it clear who can inspect, configure or execute actions.",
  },
  {
    icon: Network,
    title: "Service orchestration",
    description:
      "Discord, Google, GitHub, Spotify, WhatsApp and smart-home tools become part of one control surface.",
  },
  {
    icon: LockKeyhole,
    title: "Private by design",
    description:
      "OAuth links, QR login and local agent boundaries keep sensitive control flows explicit and auditable.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Clear system context",
    description:
      "Dashboards show what changed, what needs attention and which modules are actively contributing data.",
  },
  {
    icon: Bot,
    title: "Agent-first automation",
    description:
      "PROMETEO is centered on the device agent, so automation starts from the machine state instead of a disconnected cloud panel.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FeaturesSection() {
  return (
    <section id="platform" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-3xl"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
          Platform
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          One control plane for machines, modules and daily operations.
        </h2>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Hermes connects the device, PROMETEO organizes the workspace, and
          modules add specialized capabilities without diluting the core
          experience.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {platformLayers.map((feature) => (
          <motion.div
            key={feature.title}
            variants={item}
            className="group min-h-72 rounded-lg border border-white/[0.08] bg-white/[0.035] p-6 transition-colors hover:border-cyan-200/25 hover:bg-white/[0.055]"
          >
            <div className="mb-6 inline-flex rounded-md border border-cyan-200/20 bg-cyan-200/10 p-3 text-cyan-100">
              <feature.icon className="size-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {capabilities.map((feature) => (
          <motion.div
            key={feature.title}
            variants={item}
            className="rounded-lg border border-white/[0.07] bg-black/20 p-5"
          >
            <div className="mb-4 inline-flex rounded-md border border-white/[0.09] bg-white/[0.045] p-2.5 text-emerald-200">
              <feature.icon className="size-5" />
            </div>
            <h3 className="text-base font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
