import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Bot,
  Store,
  Shield,
  MessageSquare,
  Smartphone,
  Gauge,
  Puzzle,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description:
      "Create and personalize your dashboards with drag-and-drop modules. Arrange widgets exactly as you need them.",
  },
  {
    icon: Bot,
    title: "Smart Agents",
    description:
      "Deploy and manage autonomous agents that run on your devices. Monitor status, control remotely, and automate tasks.",
  },
  {
    icon: Store,
    title: "Module Marketplace",
    description:
      "Browse a growing catalogue of modules to extend your agents' capabilities. Install with a single click.",
  },
  {
    icon: MessageSquare,
    title: "Discord Integration",
    description:
      "Connect your Discord server to receive real-time notifications, manage permissions, and automate game updates.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Fine-grained user roles and permissions. Admins, operators, and viewers each get exactly the access they need.",
  },
  {
    icon: Smartphone,
    title: "Hermes Desktop App",
    description:
      "Native Windows agent built with Electron and Rust for real-time device control, audio routing, and system metrics.",
  },
  {
    icon: Gauge,
    title: "Real-Time Monitoring",
    description:
      "Track agent health, system metrics, and activity logs in real time. Get instant alerts when something needs attention.",
  },
  {
    icon: Puzzle,
    title: "Extensible Architecture",
    description:
      "Built with a modular architecture. Create your own modules and integrate third-party services through a clean API.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Everything you need to manage your ecosystem
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Prometeo unifies device control, service management, and team
          collaboration into a single platform.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={item}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.15] hover:bg-white/[0.05]"
          >
            <div className="mb-4 inline-flex rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-3 text-indigo-400">
              <feature.icon className="size-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
