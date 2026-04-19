import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    src: "/screenshots/dashboard.png",
    title: "Dashboard",
    description:
      "Your personalized dashboard with drag-and-drop modules and real-time data.",
  },
  {
    src: "/screenshots/marketplace.png",
    title: "Module Marketplace",
    description:
      "Browse, search, and install modules to extend your agents' capabilities.",
  },
  {
    src: "/screenshots/agents.png",
    title: "Agent Management",
    description: "Monitor and control your smart agents from a unified panel.",
  },
  {
    src: "/screenshots/login.png",
    title: "Secure Login",
    description: "Modern authentication with QR code support and beautiful UI.",
  },
  {
    src: "/screenshots/discord.png",
    title: "Discord Integration",
    description:
      "Manage Discord bots, permissions, and automated notifications.",
  },
  {
    src: "/screenshots/admin.png",
    title: "Admin Panel",
    description:
      "Full administrative control over users, roles, and system configuration.",
  },
];

export function ScreenshotsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  const shot = screenshots[current];

  return (
    <section id="screenshots" className="mx-auto w-full px-6 py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          See it in action
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          A look at the real interface — clean, modern, and built for
          productivity.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Browser mockup */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] shadow-2xl shadow-indigo-500/5">
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

          {/* Screenshot */}
          <div className="relative aspect-video bg-[#0a0a0a]">
            <AnimatePresence initial={false}>
              <motion.img
                key={shot.src}
                src={shot.src}
                alt={shot.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 size-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".placeholder-text")) {
                    const div = document.createElement("div");
                    div.className =
                      "placeholder-text absolute inset-0 flex items-center justify-center size-full text-gray-600 text-lg";
                    div.textContent = `Screenshot: ${shot.title}`;
                    parent.appendChild(div);
                  }
                }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="rounded-full border border-white/[0.1] bg-white/[0.04] p-2 text-gray-400 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white">
                  {shot.title}
                </h3>
                <p className="text-sm text-gray-400">{shot.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="rounded-full border border-white/[0.1] bg-white/[0.04] p-2 text-gray-400 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label="Next screenshot"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`size-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-indigo-400"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
