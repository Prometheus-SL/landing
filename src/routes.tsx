import PolicyPage from "./pages/policy_page";
import HomePage from "./pages/home_page";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/policy",
    element: <PolicyPage />,
  },
];
