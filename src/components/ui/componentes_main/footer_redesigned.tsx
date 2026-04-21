import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

export function FooterRedesigned() {
  return (
    <footer className="v2-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <img src="/favicon.svg" alt="" />
              <span className="footer-brand-name">PROMETEO</span>
            </div>
            <p className="footer-tagline">
              Control center for Hermes agents, modular dashboards and service integrations.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Product</div>
            <div className="footer-links">
              <a className="footer-link" href="#platform">Platform</a>
              <a className="footer-link" href="#product">Screenshots</a>
              <a className="footer-link" href="#integrations">Integrations</a>
              <a className="footer-link" href="#architecture">Architecture</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Resources</div>
            <div className="footer-links">
              <a
                className="footer-link"
                href="https://github.com/Prometheus-SL"
                target="_blank"
                rel="noreferrer"
              >
                GitHub org <ExternalLink size={10} />
              </a>
              <a
                className="footer-link"
                href="https://prometeo.miguelprez.es"
                target="_blank"
                rel="noreferrer"
              >
                Open app <ExternalLink size={10} />
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-links">
              <a className="footer-link" href="/policy">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Prometheus SL. All rights reserved.</span>
          <a
            className="footer-gh"
            href="https://github.com/Prometheus-SL"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
