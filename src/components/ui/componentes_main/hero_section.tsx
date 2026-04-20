import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Boxes,
  CalendarCheck,
  Gamepad2,
  Github,
  Lightbulb,
  Music2,
  Radio,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { Button } from "../button";

const productSignals = [
  { icon: Bot, label: "Hermes agent online", color: "text-cyan-200" },
  { icon: Boxes, label: "Modular marketplace", color: "text-amber-200" },
  { icon: Radio, label: "Discord auto-news", color: "text-indigo-200" },
  { icon: Lightbulb, label: "Lighting and IoT", color: "text-yellow-200" },
];

const floatingModules = [
  {
    icon: Bot,
    title: "Hermes",
    value: "PC ready",
    detail: "Audio control, CPU use, commands...",
    className: "left-0 top-10 border-cyan-200/25 bg-cyan-200/10",
    delay: 0,
  },
  {
    icon: Music2,
    title: "Spotify",
    value: "Now playing",
    detail: "Queue and playback...",
    className: "right-0 top-0 border-emerald-200/25 bg-emerald-200/10",
    delay: 0.18,
  },
  {
    icon: CalendarCheck,
    title: "Google",
    value: "Live agenda",
    detail: "Tasks, Gmail, events...",
    className: "left-4 bottom-35 border-sky-200/25 bg-sky-200/10",
    delay: 0.32,
  },
  {
    icon: Gamepad2,
    title: "Discord",
    value: "Gaming alerts",
    detail: "Epic, Steam, permissions...",
    className: "right-3 bottom-40 border-rose-200/25 bg-rose-200/10",
    delay: 0.46,
  },
];

const commandFeed = [
  "Hermes connected -> latency 42ms",
  "WLED scene 'focus' applied",
  "Discord game alert delivered",
  "Dashboard synced",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-5 pb-14 sm:px-6 pt-28">
      <div className="absolute inset-x-0 bottom-0 top-16 z-0 overflow-hidden">
        <img
          src="/screenshots/hero.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute left-1/2 top-28 w-[min(1580px,122vw)] -translate-x-1/2 rounded-lg border border-white/[0.08] opacity-[0.34] shadow-2xl shadow-black/70 lg:top-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.22)_24%,rgba(5,5,5,0.7)_78%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.64)_34%,rgba(5,5,5,0.18)_70%,#050505_100%)]" />
        <motion.div
          className="absolute left-0 right-0 h-px bg-cyan-200/35 shadow-[0_0_32px_rgba(103,232,249,0.55)]"
          animate={{ y: ["18vh", "78vh", "18vh"], opacity: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="pointer-events-none absolute right-[max(1.5rem,calc((100vw-1280px)/2))] top-28 z-10 hidden h-[620px] w-[560px] lg:block">
        <motion.div
          initial={{ y: 30, rotateX: 8 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="absolute inset-x-12 top-28 overflow-hidden rounded-lg border border-white/[0.12] bg-black/40 shadow-2xl shadow-cyan-950/50 backdrop-blur"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.05] px-3 py-2">
            <span className="size-2 rounded-full bg-red-400/75" />
            <span className="size-2 rounded-full bg-amber-300/75" />
            <span className="size-2 rounded-full bg-emerald-300/75" />
            <span className="ml-2 text-[11px] text-zinc-500">
              prometeo.miguelprez.es
            </span>
          </div>
          <img
            src="/screenshots/dashboard.png"
            alt=""
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover object-top opacity-90"
          />
        </motion.div>

        {floatingModules.map((module) => (
          <motion.div
            key={module.title}
            initial={{ y: 24, scale: 0.94 }}
            animate={{
              y: [0, -10, 0],
              scale: 1,
            }}
            transition={{
              scale: { duration: 0.35, delay: 0.55 + module.delay },
              y: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: module.delay,
              },
            }}
            className={`absolute w-48 rounded-lg border p-4 shadow-2xl shadow-black/40 backdrop-blur-xl ${module.className}`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-white/10 bg-black/25 p-2 text-white">
                <module.icon className="size-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {module.title}
                </p>
                <p className="text-xs text-zinc-400">{module.value}</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-zinc-300">
              {module.detail}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.45, delay: 0.9 }}
          className="absolute bottom-0 left-20 right-25 rounded-lg border border-white/[0.1] bg-black/55 p-4 font-mono text-xs text-zinc-300 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center gap-2 text-cyan-200">
            <TerminalSquare className="size-4" />
            live activity
          </div>
          <div className="space-y-2">
            {commandFeed.map((line, index) => (
              <motion.p
                key={line}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: index * 0.45,
                }}
              >
                <span className="text-emerald-300">&gt;</span> {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-7 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-100"
        >
          <Sparkles className="size-4" />
          Modular command center
        </motion.div>

        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="max-w-[22rem] bg-gradient-to-r from-white via-cyan-100 to-amber-100 bg-clip-text text-5xl font-semibold tracking-tight text-transparent drop-shadow-2xl [text-shadow:0_0_42px_rgba(103,232,249,0.35)] sm:max-w-4xl sm:text-6xl md:text-7xl xl:text-8xl"
        >
          PROMETEO
        </motion.h1>

        <motion.p
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mt-6 max-w-[22rem] break-words text-lg font-medium leading-8 text-zinc-100 drop-shadow-2xl sm:max-w-2xl sm:text-xl"
        >
          Control PCs, bots, lights, music, tasks and dashboards from a visual
          cockpit connected to the Hermes agent.
        </motion.p>

        <motion.div
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button
            size="lg"
            className="h-12 bg-cyan-200 px-7 text-base text-black shadow-lg shadow-cyan-950/40 hover:bg-white"
            onClick={() =>
              window.open("https://prometeo.miguelprez.es/", "_blank")
            }
          >
            Open app
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-white/20 bg-black/35 px-7 text-base text-white backdrop-blur hover:bg-white/10"
            onClick={() =>
              window.open("https://github.com/Prometheus-SL", "_blank")
            }
          >
            <Github className="size-4" />
            View GitHub
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, delay: 0.62 }}
          className="mt-12 grid max-w-[22rem] gap-3 sm:max-w-2xl sm:grid-cols-2"
        >
          {productSignals.map((signal) => (
            <div
              key={signal.label}
              className="group flex min-h-16 items-center gap-3 rounded-lg border border-white/[0.1] bg-white/[0.065] px-4 py-3 text-sm text-zinc-200 backdrop-blur transition-colors hover:border-white/[0.18] hover:bg-white/[0.09]"
            >
              <signal.icon
                className={`size-4 shrink-0 transition-transform group-hover:scale-110 ${signal.color}`}
              />
              <span>{signal.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 22 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 max-w-3xl border-l border-cyan-200/35 pl-5"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
            Show what it can do
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-300">
            Launch commands, assemble widgets, automate Discord, track GitHub
            activity and run integrations from the same place.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
