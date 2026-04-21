import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Product", href: "#product" },
  { label: "Integrations", href: "#integrations" },
  { label: "Architecture", href: "#architecture" },
  { label: "Team", href: "#team" },
];

const GithubIcon = ({ size = 14 }: { size?: number }) => (
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`v2-nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#">
          <img src="/favicon.svg" alt="Prometeo" />
          <span className="nav-brand-name">PROMETEO</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            className="nav-ghost"
            onClick={() => window.open("https://github.com/Prometheus-SL", "_blank")}
          >
            <GithubIcon />
            GitHub
          </button>
          <button
            type="button"
            className="nav-cta"
            onClick={() => window.open("https://prometeo.miguelprez.es", "_blank")}
          >
            Open app
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </nav>
  );
}
