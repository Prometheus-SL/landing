import { motion } from "framer-motion";
import { BarChart3, Users, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "2+", label: "Team members" },
  { icon: BarChart3, value: "5+", label: "Repositories" },
  { icon: Globe, value: "24/7", label: "Agent uptime" },
  { icon: Clock, value: "2023", label: "Founded" },
];

export function StatsSection() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto mb-3 inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] p-3 text-gray-400">
              <stat.icon className="size-5" />
            </div>
            <div className="text-2xl font-bold text-white sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
