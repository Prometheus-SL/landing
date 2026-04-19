import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Integration = {
  name: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  tags: string[];
};

const integrations: Integration[] = [
  {
    name: "Discord",
    description:
      "Full bot integration with news scheduler, game updates, guild config, and OAuth account linking. Manage permissions and channels from your dashboard.",
    icon: "💬",
    color: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20",
    href: "https://discord.com",
    tags: ["Bot", "OAuth", "Webhooks", "Guilds"],
  },
  {
    name: "Spotify",
    description:
      "Link your Spotify account via OAuth. Control playback, browse your queue, and see what's playing — all from dashboard widgets.",
    icon: "🎵",
    color: "from-green-500/20 to-green-600/5 border-green-500/20",
    href: "https://spotify.com",
    tags: ["OAuth", "Playback", "Queue", "Now Playing"],
  },
  {
    name: "Google Workspace",
    description:
      "Connect Calendar, Tasks, and Gmail via OAuth. View upcoming events, today's tasks, and inbox summaries in real-time widgets.",
    icon: "📅",
    color: "from-blue-500/20 to-blue-600/5 border-blue-500/20",
    href: "https://google.com",
    tags: ["Calendar", "Tasks", "Gmail", "OAuth"],
  },
  {
    name: "WhatsApp",
    description:
      "WhatsApp Web integration via whatsapp-web.js with remote auth. Send messages and receive notifications through your personal widget.",
    icon: "📱",
    color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
    href: "https://whatsapp.com",
    tags: ["Messages", "Remote Auth", "QR Login"],
  },
  {
    name: "GitHub",
    description:
      "Link your GitHub account via OAuth. Track repository activity, contributions, and project pulse directly in your dashboard.",
    icon: "🐙",
    color: "from-gray-400/20 to-gray-500/5 border-gray-400/20",
    href: "https://github.com",
    tags: ["OAuth", "Repos", "Pulse", "Activity"],
  },
  {
    name: "YouTube & Twitch",
    description:
      "Monitor creator status across YouTube and Twitch. Track live streams, channel stats, and content updates via the Helix and Data APIs.",
    icon: "🎮",
    color: "from-red-500/20 to-red-600/5 border-red-500/20",
    href: "https://twitch.tv",
    tags: ["Streams", "Creator Status", "API"],
  },
  {
    name: "Epic Games & Steam",
    description:
      "Automatic free game alerts from Epic Games Store and Steam news delivered through your Discord bot. Track game updates in real time.",
    icon: "🕹️",
    color: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/20",
    href: "https://store.epicgames.com",
    tags: ["Free Games", "News", "Alerts"],
  },
  {
    name: "Smart Lighting",
    description:
      "Control LIFX bulbs and WLED LED strips directly from your dashboard. Adjust colors, brightness, and effects with dedicated widgets.",
    icon: "💡",
    color: "from-amber-500/20 to-amber-600/5 border-amber-500/20",
    href: "#",
    tags: ["LIFX", "WLED", "IoT", "Colors"],
  },
  {
    name: "Minecraft & Weather",
    description:
      "Query Minecraft server status and player count, or display real-time weather data for any city — all through configurable widgets.",
    icon: "🌍",
    color: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20",
    href: "#",
    tags: ["Server Status", "Weather", "Widgets"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Powerful integrations
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Connect the tools you already use. Prometeo plugs into your favorite
          services seamlessly.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {integrations.map((integration) => (
          <motion.div
            key={integration.name}
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-gradient-to-br p-6 transition-colors ${integration.color}`}
          >
            {/* Glow on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
            </div>

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{integration.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {integration.name}
                </h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">
                {integration.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {integration.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {integration.href !== "#" && (
              <div className="relative mt-5 flex justify-end">
                <a
                  href={integration.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-white"
                >
                  Learn more <ExternalLink className="size-3" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Connection lines decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 flex items-center justify-center gap-3"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="h-px w-8 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent sm:w-16"
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="size-2 rounded-full bg-indigo-400/70"
        />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`r-${i}`}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (4 - i) * 0.3,
              ease: "easeInOut",
            }}
            className="h-px w-8 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent sm:w-16"
          />
        ))}
      </motion.div>
    </section>
  );
}
