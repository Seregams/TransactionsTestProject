import App from "./App";

import Home from "./pages/Home";
import Navigator from "./pages/Navigator";

import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "*",
    element: <App />,
    children: [
      { path: "*", element: <Home /> },
      { path: "navigator", element: <Navigator /> },
    ],
  },
];
