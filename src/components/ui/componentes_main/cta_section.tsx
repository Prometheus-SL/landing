import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "../button";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-rose-500/10 p-12 text-center sm:p-16"
      >
        <div className="relative z-10">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
            <Zap className="size-4" />
            Ready to get started?
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
            Take control of your devices today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Join Prometeo and start managing your smart agents, deploying
            modules, and monitoring your entire ecosystem from a single,
            powerful platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-base px-8"
              onClick={() =>
                window.open("https://prometeo.miguelprez.es/", "_blank")
              }
            >
              Start now
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-base px-8"
              onClick={() =>
                window.open("https://github.com/Prometheus-SL", "_blank")
              }
            >
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute -left-32 -top-32 size-64 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 size-64 rounded-full bg-rose-500/20 blur-[100px]" />
      </motion.div>
    </section>
  );
}
