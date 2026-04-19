import { motion } from "framer-motion";
import { AnimatedTooltip } from "../shadcn-io/animated-tooltip";

const team = [
  {
    id: 1,
    name: "Miguel Angel Perez Garcia",
    designation: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/61310771?v=4",
  },
  {
    id: 2,
    name: "Raul Hernandez Salcedo",
    designation: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/67696106?v=4",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Meet the team
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Passionate developers building the future of smart device management.
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12">
          <div className="mb-8 flex justify-center">
            <AnimatedTooltip items={team} />
          </div>

          <div className="space-y-4 text-center text-sm leading-relaxed text-gray-400">
            <p>
              We are a team of developers passionate about creating scalable and
              efficient web applications. Our journey began in 2023 with a
              simple goal: to make smart technology accessible and useful in
              every environment.
            </p>
            <p>
              Our platform enables you to control, monitor, and automate devices
              seamlessly, making life and work simpler, safer, and more
              efficient. We leverage IoT and cloud technologies to deliver
              real-time, reliable solutions.
            </p>
            <p>
              At the core of our work are our values: innovation, user privacy,
              and efficiency. Our diverse team is dedicated to building
              intuitive smart ecosystems that truly improve everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
