import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import { Button } from "../button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Product", href: "#screenshots" },
  { label: "Integrations", href: "#integrations" },
  { label: "Architecture", href: "#tech" },
  { label: "GitHub", href: "#github" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#050505]/82 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="Prometeo" className="h-7 invert" />
          <span className="text-base font-semibold tracking-wide text-white">
            PROMETEO
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-400 hover:text-white"
            onClick={() => window.open("https://github.com/Prometheus-SL", "_blank")}
          >
            <Github className="size-4" />
            Source
          </Button>
          <Button
            size="sm"
            className="bg-white text-black hover:bg-zinc-200"
            onClick={() =>
              window.open("https://prometeo.miguelprez.es/", "_blank")
            }
          >
            Open app
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-zinc-400 hover:bg-white/[0.06] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-zinc-400"
                  onClick={() => {
                    setOpen(false);
                    window.open("https://github.com/Prometheus-SL", "_blank");
                  }}
                >
                  <Github className="size-4" />
                  Source
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-white text-black hover:bg-zinc-200"
                  onClick={() => {
                    setOpen(false);
                    window.open("https://prometeo.miguelprez.es/", "_blank");
                  }}
                >
                  Open app
                </Button>
                <Link
                  to="/policy"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-center text-sm font-medium text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  Privacy policy
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
