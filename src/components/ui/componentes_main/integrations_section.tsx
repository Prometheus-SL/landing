import { motion, type Variants } from "framer-motion";
import type { ComponentType } from "react";
import {
  CalendarDays,
  CloudSun,
  Gamepad2,
  Github,
  Lightbulb,
  MessageSquare,
  Music2,
  Smartphone,
  Radio,
} from "lucide-react";

type Integration = {
  name: string;
  description: string;
  tags: string[];
  accent: string;
  icon: ComponentType<{ className?: string }>;
};

const integrations: Integration[] = [
  {
    name: "Discord",
    description:
      "Bot control, guild configuration, channel permissions and game-update notifications.",
    tags: ["Bot", "OAuth", "News"],
    accent: "text-indigo-200 border-indigo-200/20 bg-indigo-200/10",
    icon: MessageSquare,
  },
  {
    name: "Spotify",
    description:
      "Playback state, queue context and dashboard widgets for personal media control.",
    tags: ["OAuth", "Playback", "Widgets"],
    accent: "text-emerald-200 border-emerald-200/20 bg-emerald-200/10",
    icon: Music2,
  },
  {
    name: "Google Workspace",
    description:
      "Calendar, Tasks and Gmail summaries surfaced through focused workspace modules.",
    tags: ["Calendar", "Tasks", "Gmail"],
    accent: "text-sky-200 border-sky-200/20 bg-sky-200/10",
    icon: CalendarDays,
  },
  {
    name: "WhatsApp",
    description:
      "QR-linked personal messaging flows built on remote-auth session handling.",
    tags: ["QR", "Messages", "Session"],
    accent: "text-lime-200 border-lime-200/20 bg-lime-200/10",
    icon: Smartphone,
  },
  {
    name: "GitHub",
    description:
      "Repository pulse, contribution context and project activity inside the dashboard.",
    tags: ["Repos", "Activity", "OAuth"],
    accent: "text-zinc-100 border-zinc-200/20 bg-zinc-200/10",
    icon: Github,
  },
  {
    name: "Creator Status",
    description:
      "YouTube and Twitch signals for streams, channels and content-aware automation.",
    tags: ["Streams", "Status", "APIs"],
    accent: "text-rose-200 border-rose-200/20 bg-rose-200/10",
    icon: Radio,
  },
  {
    name: "Games",
    description:
      "Epic free-game alerts, Steam news and Minecraft server checks for communities.",
    tags: ["Epic", "Steam", "Minecraft"],
    accent: "text-amber-200 border-amber-200/20 bg-amber-200/10",
    icon: Gamepad2,
  },
  {
    name: "Smart Lighting",
    description:
      "LIFX and WLED controls for brightness, color and effect management.",
    tags: ["LIFX", "WLED", "IoT"],
    accent: "text-yellow-200 border-yellow-200/20 bg-yellow-200/10",
    icon: Lightbulb,
  },
  {
    name: "Weather",
    description:
      "Location-based weather widgets that keep daily dashboards useful at a glance.",
    tags: ["Forecast", "Widgets", "Live"],
    accent: "text-cyan-200 border-cyan-200/20 bg-cyan-200/10",
    icon: CloudSun,
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-3xl"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-amber-200">
          Integrations
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Connect services without turning the dashboard into a mess.
        </h2>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Integrations are grouped as useful modules, so the product feels
          extensible without overwhelming operators with unrelated settings.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {integrations.map((integration) => (
          <motion.div
            key={integration.name}
            variants={item}
            className="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.035] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.055] hover:shadow-lg hover:shadow-white/[0.02]"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/[0.03] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex items-start gap-4">
              <div className={`rounded-md border p-2.5 ${integration.accent}`}>
                <integration.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {integration.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {integration.description}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {integration.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
