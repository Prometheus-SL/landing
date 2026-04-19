import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";
import {
  IconGithub,
  IconReact,
  IconRust,
  IconTailwindcss,
  IconTypescript,
} from "./react-icons/iconos_programacion";

const techLogos = [
  { node: <IconReact />, title: "React", href: "https://react.dev" },
  {
    node: <IconTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <IconTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <IconRust />, title: "Rust", href: "https://www.rust-lang.org" },
  {
    node: <IconGithub width="1em" height="1em" />,
    title: "GitHub",
    href: "https://github.com/Prometheus-SL",
  },
];

const techDetails = [
  {
    title: "Frontend",
    items: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "WebSocket", "JWT Auth"],
  },
  {
    title: "Desktop Agent",
    items: ["Electron", "Rust (native)", "Real-time audio", "System metrics"],
  },
  {
    title: "Integrations",
    items: ["Discord API", "GitHub API", "REST API", "QR Authentication"],
  },
];

export function TechSection() {
  return (
    <section id="tech" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Built with modern tech
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          A robust, scalable stack designed for performance and developer
          experience.
        </p>
      </motion.div>

      {/* Logo loop */}
      <div className="mb-16">
        <LogoLoop
          logos={techLogos}
          speed={75}
          direction="right"
          logoHeight={48}
          gap={50}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology stack"
        />
      </div>

      {/* Tech grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {techDetails.map((stack, i) => (
          <motion.div
            key={stack.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
              {stack.title}
            </h3>
            <ul className="space-y-2">
              {stack.items.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className="size-1.5 rounded-full bg-indigo-400/60" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
