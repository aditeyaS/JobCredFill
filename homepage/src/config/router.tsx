import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Main";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
    ],
  },
]);

export default router;
