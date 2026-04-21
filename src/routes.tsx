import { lazy, Suspense } from "react";
import { Layout } from "@/components/Layout";
import HomePage from "./pages/home_page";

const PolicyPage = lazy(() => import("./pages/policy_page"));

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/policy",
        element: (
          <Suspense fallback={null}>
            <PolicyPage />
          </Suspense>
        ),
      },
    ],
  },
];
