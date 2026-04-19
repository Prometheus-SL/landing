import { motion } from "framer-motion";

const team = [
  {
    name: "Miguel Angel Perez Garcia",
    role: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/61310771?v=4",
    focus: "Product architecture, integrations and full-stack delivery.",
  },
  {
    name: "Raul Hernandez Salcedo",
    role: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/67696106?v=4",
    focus: "Platform engineering, interface systems and operational tooling.",
  },
];

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
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
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
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-5"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={member.image}
                alt={member.name}
                className="size-20 rounded-lg border border-white/[0.1] object-cover"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {member.focus}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
