import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, Github, Star } from "lucide-react";
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

const fallbackRepos: GithubRepo[] = [
  {
    id: 1,
    name: "PROMETEO-front",
    description: "Main web application with dashboards, modules and admin UI.",
    html_url: "https://github.com/Prometheus-SL/PROMETEO-front",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
  },
  {
    id: 2,
    name: "PROMETEO-back",
    description: "API, integrations, auth and realtime agent orchestration.",
    html_url: "https://github.com/Prometheus-SL/PROMETEO-back",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
  },
  {
    id: 3,
    name: "HERMES-WIN",
    description: "Desktop agent for local system telemetry and device actions.",
    html_url: "https://github.com/Prometheus-SL/HERMES-WIN",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-sky-300",
  JavaScript: "bg-amber-300",
  Rust: "bg-orange-300",
  Python: "bg-emerald-300",
  HTML: "bg-rose-300",
  CSS: "bg-violet-300",
};

export function GithubSection() {
  const [repos, setRepos] = useState<GithubRepo[]>(fallbackRepos);
  const [liveDataLoaded, setLiveDataLoaded] = useState(false);

  useEffect(() => {
    let ignore = false;

    fetch("https://api.github.com/users/Prometheus-SL/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub responded with ${response.status}`);
        }
        return response.json() as Promise<GithubRepo[]>;
      })
      .then((data) => {
        if (ignore) return;

        const publicRepos = data
          .filter((repo) => repo.name !== ".github")
          .sort((a, b) => {
            const priority = ["PROMETEO-front", "PROMETEO-back", "HERMES-WIN"];
            const priorityDelta =
              priority.indexOf(a.name) - priority.indexOf(b.name);

            if (priority.includes(a.name) && priority.includes(b.name)) {
              return priorityDelta;
            }

            if (priority.includes(a.name)) return -1;
            if (priority.includes(b.name)) return 1;

            return b.stargazers_count - a.stargazers_count;
          })
          .slice(0, 6);

        if (publicRepos.length > 0) {
          setRepos(publicRepos);
          setLiveDataLoaded(true);
        }
      })
      .catch(() => {
        if (!ignore) {
          setLiveDataLoaded(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section id="github" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
      >
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
            Open source
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
            Built in public, split into clear repositories.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            The platform is easier to evaluate when the web app, backend and
            desktop agent are discoverable as separate engineering surfaces.
          </p>
        </div>

        <Button
          variant="outline"
          className="w-fit border-white/20 bg-white/[0.03] text-white hover:bg-white/10"
          onClick={() => window.open("https://github.com/Prometheus-SL", "_blank")}
        >
          <Github className="size-4" />
          Organization
          <ArrowUpRight className="size-4" />
        </Button>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <motion.article
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex min-h-56 flex-col justify-between rounded-lg border border-white/[0.08] bg-white/[0.035] p-5 transition-colors hover:border-white/[0.15] hover:bg-white/[0.055]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {repo.name}
                </h3>
                {repo.language && (
                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-zinc-500">
                    <span
                      className={`size-2 rounded-full ${
                        languageColors[repo.language] ?? "bg-zinc-400"
                      }`}
                    />
                    {repo.language}
                  </span>
                )}
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                {repo.description || "Repository details available on GitHub."}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-zinc-500">
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
                className="text-xs text-zinc-400 hover:text-white"
                onClick={() => window.open(repo.html_url, "_blank")}
              >
                View
                <ArrowUpRight className="size-3.5" />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      {!liveDataLoaded && (
        <p className="mt-5 text-sm text-zinc-600">
          Showing curated repositories. Live GitHub data appears when the API is
          available.
        </p>
      )}
    </section>
  );
}
