import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PlanBuilder } from "./pages/PlanBuilder";
import { Checkout } from "./pages/Checkout";
import { Receipt } from "./pages/Receipt";
import { Profile } from "./pages/Profile";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Destinations } from "./pages/Destinations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "plan", Component: PlanBuilder },
      { path: "checkout", Component: Checkout },
      { path: "receipt", Component: Receipt },
      { path: "profile", Component: Profile },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "destinations", Component: Destinations },
    ],
  },
]);
