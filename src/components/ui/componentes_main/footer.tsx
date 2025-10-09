import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className="flex justify-center pt-4">
        <div className="pt-4 px-4 font-bold text-center">
          © 2025 Prometheus SL. All rights reserved.
        </div>
        <div className="pt-4 px-4 font-bold text-center">
          <Link to="/policy">Policy</Link>
        </div>
        <div className="pt-4 px-4 font-bold text-center">About us</div>
      </div>
    </>
  );
}
