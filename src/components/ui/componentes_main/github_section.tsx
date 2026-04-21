import { ExternalLink, FolderGit2 } from "lucide-react";
import { useGithubRepos, type GithubRepo } from "../../../hooks/use_github";

const ORG = "Prometheus-SL";

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Rust: "#ce422b",
  Python: "#3572a5",
  Go: "#00add8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

function langColor(language: string | null): string {
  if (!language) return "#7d8590";
  return LANG_COLORS[language] ?? "#7d8590";
}

function sortRepos(repos: GithubRepo[]): GithubRepo[] {
  return [...repos]
    .filter((repo) => repo.name !== ".github" && !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || b.forks_count - a.forks_count);
}

function RepoSkeleton() {
  return (
    <div className="repo-card" aria-hidden="true">
      <div className="repo-name">
        <FolderGit2 size={14} />
        <span className="repo-skeleton-bar" style={{ width: "60%" }} />
      </div>
      <div className="repo-lang">
        <div className="lang-dot" style={{ background: "#3a3f47" }} />
        <span className="repo-skeleton-bar" style={{ width: "35%" }} />
      </div>
      <div className="repo-desc">
        <span className="repo-skeleton-bar" style={{ width: "90%" }} />
        <span className="repo-skeleton-bar" style={{ width: "70%", marginTop: 6 }} />
      </div>
      <div className="repo-meta">
        <div className="repo-stats">
          <span>⭐ —</span>
          <span>🔀 —</span>
        </div>
      </div>
    </div>
  );
}

export function GithubSection() {
  const { data, loading, error } = useGithubRepos(ORG);
  const repos = data ? sortRepos(data) : [];

  return (
    <section id="github" className="v2-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <GithubIcon />
            Open source
          </div>
          <h2 className="section-title">
            Built in the open, split into <span>clear repositories</span>.
          </h2>
          <p className="section-sub">
            The platform is easier to evaluate when the web app, backend and desktop agent are discoverable engineering surfaces on their own.
          </p>
        </div>

        {error && (
          <div className="repo-error">
            Couldn't load repositories from GitHub right now.{" "}
            <a href={`https://github.com/${ORG}`} target="_blank" rel="noreferrer">
              Open the organization
            </a>
            .
          </div>
        )}

        <div className="repo-grid">
          {loading && !data
            ? Array.from({ length: 4 }).map((_, i) => <RepoSkeleton key={i} />)
            : repos.map((repo) => (
                <div key={repo.id} className="repo-card">
                  <div className="repo-name">
                    <FolderGit2 size={14} />
                    {repo.name}
                  </div>
                  <div className="repo-lang">
                    <div
                      className="lang-dot"
                      style={{ background: langColor(repo.language) }}
                    />
                    {repo.language ?? "—"}
                  </div>
                  <div className="repo-desc">
                    {repo.description ?? "No description provided."}
                  </div>
                  <div className="repo-meta">
                    <div className="repo-stats">
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🔀 {repo.forks_count}</span>
                    </div>
                    <a
                      className="repo-link"
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
