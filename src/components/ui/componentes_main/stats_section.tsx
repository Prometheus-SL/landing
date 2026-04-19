import { motion } from "framer-motion";
import { Bot, LayoutDashboard, PlugZap, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Bot,
    value: "Hermes",
    label: "Desktop agent for device control and telemetry",
  },
  {
    icon: LayoutDashboard,
    value: "Dashboards",
    label: "Composable widgets for daily operations",
  },
  {
    icon: PlugZap,
    value: "Modules",
    label: "Installable integrations and product surfaces",
  },
  {
    icon: ShieldCheck,
    value: "Access",
    label: "Roles, admin tools and private workspace flows",
  },
];

export function StatsSection() {
  return (
    <section className="relative border-y border-white/[0.06]">
      {/* Subtle top glow line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-px px-5 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-lg border border-white/[0.06] bg-black/20 p-5 transition-all duration-300 hover:border-cyan-200/20 hover:bg-white/[0.04]"
          >
            <div className="mb-4 inline-flex rounded-md border border-cyan-200/20 bg-cyan-200/10 p-2.5 text-cyan-200 transition-transform duration-300 group-hover:scale-110">
              <stat.icon className="size-5" />
            </div>
            <div className="text-lg font-semibold text-white drop-shadow-sm sm:text-xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
