import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

export function FooterRedesigned() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030303]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Prometeo" className="h-6 invert" />
              <span className="text-lg font-semibold text-white">Prometeo</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Smart device management platform powered by the Hermes agent.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#screenshots"
                  className="transition-colors hover:text-white"
                >
                  Screenshots
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="transition-colors hover:text-white"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a href="#tech" className="transition-colors hover:text-white">
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="https://github.com/Prometheus-SL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  GitHub <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://prometeo.miguelprez.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  Open App <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  to="/policy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Prometheus SL. All rights
            reserved.
          </p>
          <a
            href="https://github.com/Prometheus-SL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-white"
          >
            <Github className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
