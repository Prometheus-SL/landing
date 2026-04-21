import { Users } from "lucide-react";
import { useGithubUser } from "../../../hooks/use_github";

const GithubIcon = ({ size = 12 }: { size?: number }) => (
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

const LinkedInIcon = ({ size = 12 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

type Member = {
  initials: string;
  name: string;
  role: string;
  desc: string;
  githubHandle: string | null;
  linkedin: string;
};

const members: Member[] = [
  {
    initials: "MP",
    name: "Miguel Angel Perez Garcia",
    role: "Software Engineer",
    desc: "Product architecture, integrations and full-stack delivery. Responsible for the technical vision and user experience of the control center.",
    githubHandle: "MiguelProz",
    linkedin: "https://www.linkedin.com/in/miguel-ángel-pérez-garcía-305a1620a/",
  },
  {
    initials: "RH",
    name: "Raul Hernandez Salcedo",
    role: "Software Engineer",
    desc: "Platform engineering, interface systems and operational tooling. Focused on backend reliability and the administrator experience.",
    githubHandle: "Rauke10",
    linkedin: "https://www.linkedin.com/in/raul-hernandez-salcedo-9b1a1620a/",
  },
];

const ORG_FALLBACK = "https://github.com/Prometheus-SL";

function TeamCard({ member }: { member: Member }) {
  const { data: user } = useGithubUser(member.githubHandle);

  const githubUrl = user?.html_url ?? ORG_FALLBACK;
  const avatarUrl = user?.avatar_url ?? null;

  return (
    <div className="team-card">
      <div className="team-avatar">
        {avatarUrl ? (
          <img src={avatarUrl} alt={member.name} />
        ) : (
          member.initials
        )}
      </div>
      <div className="team-name">{member.name}</div>
      <div className="team-role">{member.role}</div>
      <div className="team-desc">{member.desc}</div>
      <div className="team-links">
        <a className="team-link" href={githubUrl} target="_blank" rel="noreferrer">
          <GithubIcon />
          GitHub
        </a>
        <a
          className="team-link"
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="v2-section">
      <div className="section-inner">
        <div className="section-header centered">
          <div className="section-eyebrow">
            <Users size={13} />
            Team
          </div>
          <h2 className="section-title" style={{ margin: "0 auto" }}>
            A focused <span>engineering team</span> behind the platform.
          </h2>
          <p className="section-sub">
            PROMETEO is maintained by a small team with direct ownership of the web app, backend services, integrations and the Hermes desktop agent.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
