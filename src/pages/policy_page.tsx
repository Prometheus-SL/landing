import Background from "../components/ui/componentes_main/background";
import { Navbar } from "@/components/ui/componentes_main/navbar";
import { FooterRedesigned } from "@/components/ui/componentes_main/footer_redesigned";
import { motion } from "framer-motion";

function PolicyPage() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-400 leading-relaxed">
              <p>
                At Prometheus SL, we are committed to protecting your privacy.
                This policy outlines how we collect, use, and safeguard your
                personal information when using our platform.
              </p>
              <h2 className="text-xl font-semibold text-white">
                Data Collection
              </h2>
              <p>
                We collect only the information necessary to provide our
                services, including account details, usage data, and agent
                telemetry. We do not sell your data to third parties.
              </p>
              <h2 className="text-xl font-semibold text-white">Data Usage</h2>
              <p>
                Your data is used to improve the platform experience, provide
                support, and ensure system security. Agent data is processed in
                real-time and may be stored for diagnostic purposes.
              </p>
              <h2 className="text-xl font-semibold text-white">Security</h2>
              <p>
                We implement industry-standard security measures including
                encryption, JWT-based authentication, and role-based access
                control to protect your information.
              </p>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p>
                If you have questions about this policy, please reach out
                through our GitHub organization at{" "}
                <a
                  href="https://github.com/Prometheus-SL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline hover:text-indigo-300"
                >
                  Prometheus-SL
                </a>
                .
              </p>
            </div>
          </motion.div>
        </main>
        <FooterRedesigned />
      </div>
    </Background>
  );
}
export default PolicyPage;
