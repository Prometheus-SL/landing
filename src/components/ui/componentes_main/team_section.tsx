import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Miguel Angel Perez Garcia",
    role: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/61310771?v=4",
    focus: "Product architecture, integrations and full-stack delivery.",
    github: "https://github.com/miguelprez",
    linkedin: "https://www.linkedin.com/in/miguel-%C3%A1ngel-p%C3%A9rez-garc%C3%ADa-305a1620a/",
    accent: "yellow",
  },
  {
    name: "Raul Hernandez Salcedo",
    role: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/67696106?v=4",
    focus: "Platform engineering, interface systems and operational tooling.",
    github: "https://github.com/raulhernandezs",
    linkedin: "https://www.linkedin.com/in/raul-hernandez-salcedo/",
    accent: "amber",
  },
];

const ringColor: Record<string, string> = {
  yellow: "ring-yellow-400/40 shadow-yellow-500/20",
  amber: "ring-amber-400/40 shadow-amber-500/20",
};

const accentDot: Record<string, string> = {
  yellow: "bg-yellow-400",
  amber: "bg-amber-400",
};

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-3xl"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
          Team
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          A focused engineering team behind the platform.
        </h2>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          PROMETEO is maintained by a small team with direct ownership across
          the web app, backend services, integrations and Hermes desktop agent.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.035] p-6 transition-colors hover:border-white/[0.15] hover:bg-white/[0.055]"
          >
            {/* Subtle glow behind avatar */}
            <div
              className={`pointer-events-none absolute -left-12 -top-12 size-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 ${
                member.accent === "yellow" ? "bg-yellow-500/15" : "bg-amber-500/15"
              }`}
            />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`size-20 rounded-lg border border-white/[0.1] object-cover ring-2 shadow-lg ${ringColor[member.accent]}`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`size-1.5 rounded-full ${accentDot[member.accent]}`}
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    {member.role}
                  </p>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {member.focus}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/[0.15] hover:text-white"
                  >
                    <Github className="size-3.5" />
                    GitHub
                    <ExternalLink className="size-3" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/[0.15] hover:text-white"
                  >
                    <Linkedin className="size-3.5" />
                    LinkedIn
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
