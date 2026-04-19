import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "../button";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Rust: "bg-orange-400",
  Python: "bg-green-400",
  HTML: "bg-red-400",
  CSS: "bg-purple-400",
};

export function GithubSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    axios
      .get<GithubRepo[]>("https://api.github.com/users/Prometheus-SL/repos")
      .then((res) => {
        setRepos(
          res.data
            .filter((r) => r.name !== ".github")
            .sort((a, b) => b.stargazers_count - a.stargazers_count),
        );
      })
      .catch(console.error);
  }, []);

  return (
    <section id="github" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Open Source Repositories
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Explore our code, contribute, and build with us.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors hover:border-white/[0.15] hover:bg-white/[0.05]"
          >
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-base font-semibold text-white">
                  {repo.name}
                </h3>
                {repo.language && (
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <span
                      className={`size-2 rounded-full ${languageColors[repo.language] ?? "bg-gray-400"}`}
                    />
                    {repo.language}
                  </span>
                )}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {repo.description || "No description available."}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Star className="size-3.5" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="size-3.5" />
                  {repo.forks_count}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-gray-400 hover:text-white"
                onClick={() => window.open(repo.html_url, "_blank")}
              >
                <ExternalLink className="size-3.5" />
                View
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {repos.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          Loading repositories...
        </div>
      )}
    </section>
  );
}
