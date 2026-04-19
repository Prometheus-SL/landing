import { motion } from "framer-motion";
import { ArrowRight, Github, Radar } from "lucide-react";
import { Button } from "../button";

export function CtaSection() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.025] px-5 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"
      >
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-100">
            <Radar className="size-4" />
            Ready for operators
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
            Open the control center and evaluate the real product.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            PROMETEO is most convincing when users can see the dashboard, the
            agent model and the module system working together.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
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
            Source
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
