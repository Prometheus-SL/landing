import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  LayoutDashboard,
  LockKeyhole,
  MessageSquare,
  Shield,
  Store,
} from "lucide-react";

const screenshots = [
  {
    src: "/screenshots/dashboard.png",
    title: "Dashboard",
    eyebrow: "Daily command center",
    description:
      "Arrange widgets around the signals you need every day: media, tasks, repositories, weather, lighting and custom modules.",
    icon: LayoutDashboard,
  },
  {
    src: "/screenshots/marketplace.png",
    title: "Module Marketplace",
    eyebrow: "Installable surfaces",
    description:
      "Browse modules, understand what each one adds and expand a workspace without changing the core application.",
    icon: Store,
  },
  {
    src: "/screenshots/agents.png",
    title: "Agent Management",
    eyebrow: "Hermes fleet view",
    description:
      "See connected agents, device status and operational controls in the same area where admins manage the system.",
    icon: Bot,
  },
  {
    src: "/screenshots/login.png",
    title: "Secure Login",
    eyebrow: "Fast access",
    description:
      "Support password and QR-based login flows without making the first product moment feel heavy.",
    icon: LockKeyhole,
  },
  {
    src: "/screenshots/discord.png",
    title: "Discord Integration",
    eyebrow: "Community automation",
    description:
      "Configure bot permissions, game updates and automated notifications from a focused integration page.",
    icon: MessageSquare,
  },
  {
    src: "/screenshots/admin.png",
    title: "Admin Panel",
    eyebrow: "Governance",
    description:
      "Manage users, roles, agents and sensitive operational actions from a dedicated admin surface.",
    icon: Shield,
  },
];

export function ScreenshotsSection() {
  const [current, setCurrent] = useState(0);

  const previous = () =>
    setCurrent((previousIndex) =>
      previousIndex === 0 ? screenshots.length - 1 : previousIndex - 1,
    );
  const next = () =>
    setCurrent((previousIndex) => (previousIndex + 1) % screenshots.length);

  const shot = screenshots[current];
  const ShotIcon = shot.icon;

  return (
    <section
      id="screenshots"
      className="relative border-y border-white/[0.06] px-5 py-24 sm:px-6 lg:px-12"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-7xl"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-emerald-200">
          Product
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Real screens, not promises.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          Dashboards, agents, modules, integrations and admin controls are
          visible up front, so visitors can understand the platform without
          guessing what sits behind the call to action.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="overflow-hidden rounded-lg border border-white/[0.1] bg-[#080808] shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.035] px-4 py-3">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-300/70" />
            <span className="size-2.5 rounded-full bg-emerald-300/70" />
            <span className="ml-3 truncate rounded-md border border-white/[0.06] bg-black/30 px-3 py-1 text-xs text-zinc-500">
              prometeo.miguelprez.es
            </span>
          </div>
          <div className="relative aspect-video bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={shot.src}
                src={shot.src}
                alt={`${shot.title} screen in Prometeo`}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.995 }}
                transition={{ duration: 0.28 }}
                className="absolute inset-0 size-full object-cover object-top"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="rounded-lg border border-white/[0.08] bg-black/25 p-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={shot.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mb-4 rounded-md border border-white/[0.07] bg-white/[0.035] p-5"
            >
              <div className="mb-4 inline-flex rounded-md border border-emerald-200/20 bg-emerald-200/10 p-2.5 text-emerald-100">
                <ShotIcon className="size-5" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                {shot.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {shot.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {shot.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="grid gap-2">
            {screenshots.map((screenshot, index) => {
              const Icon = screenshot.icon;
              const active = index === current;

              return (
                <button
                  key={screenshot.title}
                  onClick={() => setCurrent(index)}
                  className={`flex items-center gap-3 rounded-md border px-3 py-3 text-left text-sm transition-colors ${
                    active
                      ? "border-cyan-200/35 bg-cyan-200/10 text-white"
                      : "border-white/[0.06] bg-white/[0.025] text-zinc-400 hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-white"
                  }`}
                  aria-pressed={active}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{screenshot.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={previous}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              Previous
            </button>
            <button
              onClick={next}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
