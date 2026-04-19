import { motion } from "framer-motion";
import { ArrowRight, Command, Github, ShieldCheck } from "lucide-react";
import { Button } from "../button";

const productSignals = [
  "Live agent telemetry",
  "Composable dashboards",
  "Module marketplace",
  "Role-based operations",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-5 pb-14 pt-28 sm:px-6 lg:pt-32">
      <div className="absolute inset-x-0 bottom-0 top-24 -z-10 overflow-hidden">
        <img
          src="/screenshots/hero.png"
          alt=""
          className="absolute left-1/2 top-24 w-[min(1500px,118vw)] -translate-x-1/2 rounded-lg border border-white/[0.08] opacity-28 shadow-2xl shadow-black/70 sm:top-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.72)_34%,rgba(5,5,5,0.82)_74%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.68)_22%,rgba(5,5,5,0.34)_54%,#050505_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-sm font-medium text-cyan-100"
        >
          <Command className="size-4" />
          Control center for agents, modules and integrations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
        >
          PROMETEO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
        >
          A professional operations layer for the Hermes desktop agent: monitor
          machines, compose dashboards, install modules and connect services
          from one secure workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button
            size="lg"
            className="h-12 bg-white px-7 text-base text-black hover:bg-zinc-200"
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
            className="h-12 border-white/20 bg-black/20 px-7 text-base text-white hover:bg-white/10"
            onClick={() =>
              window.open("https://github.com/Prometheus-SL", "_blank")
            }
          >
            <Github className="size-4" />
            View source
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.62 }}
          className="mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {productSignals.map((signal) => (
            <div
              key={signal}
              className="flex min-h-16 items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.045] px-4 py-3 text-sm text-zinc-300 backdrop-blur"
            >
              <ShieldCheck className="size-4 shrink-0 text-emerald-300" />
              <span>{signal}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 max-w-3xl border-l border-white/[0.12] pl-5"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Built for operators
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-300">
            Hermes runs on devices, PROMETEO organizes the control plane, and
            modules turn integrations into practical dashboard surfaces.
          </p>
        </motion.div>

        <div className="mt-14 flex items-center gap-3 text-sm text-zinc-500">
          <span className="h-px w-10 bg-white/20" />
          <span>Explore the platform below</span>
        </div>
      </div>
    </section>
  );
}
