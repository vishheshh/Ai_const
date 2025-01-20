import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Castepage from "./pages/Castepage";
import CasteDetails from "./pages/casteDetails";
import Mixcastes from "./pages/Mixcastes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/mixcastes",
    element: <Mixcastes />,
  },
  {
    path: "/castes",
    element: <Castepage />,
    children: [
      {
        path: ":casteName/:model",
        element: <CasteDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
