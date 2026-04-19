import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../button";

export function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
          <Sparkles className="size-4" />
          Smart Device Management Platform
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
      >
        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          PROMETEO
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
      >
        The hub that unifies device and service control with the Hermes agent.
        Deploy smart agents, manage modules, and monitor your entire ecosystem
        from one place.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-200 text-base px-8 h-12"
          onClick={() =>
            window.open("https://prometeo.miguelprez.es/", "_blank")
          }
        >
          Get started
          <ArrowRight className="ml-1 size-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-white/20 text-white hover:bg-white/10 text-base px-8 h-12"
          onClick={() => {
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore features
        </Button>
      </motion.div>

      {/* Preview image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="mt-16 w-full max-w-5xl"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] shadow-2xl shadow-indigo-500/10">
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.04] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500/70" />
              <div className="size-3 rounded-full bg-yellow-500/70" />
              <div className="size-3 rounded-full bg-green-500/70" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-white/[0.06] px-3 py-1 text-xs text-gray-500">
              prometeo.miguelprez.es
            </div>
          </div>
          <div className="aspect-video bg-[#0a0a0a]">
            <img
              src="/screenshots/hero.png"
              alt="Prometeo Dashboard Preview"
              className="size-full object-cover object-top"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-12 mb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto size-6 rounded-full border-2 border-white/20 flex items-center justify-center"
        >
          <div className="size-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
