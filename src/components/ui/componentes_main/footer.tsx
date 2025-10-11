import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="flex justify-center pb-5 text-white">
        <div className="pt-4 px-4 font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
          © 2025 Prometheus SL. All rights reserved.
        </div>
        <div className="pt-4 px-4 font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
          <Link to="/policy">Policy</Link>
        </div>
      </footer>
    </>
  );
}
