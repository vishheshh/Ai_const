import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Castepage from "./pages/Castepage";
import CasteDetails from "./pages/casteDetails";
import Mixcastes from "./pages/Mixcastes";
import ReligionPage from "./pages/ReligionPage";
import ReligionDetails from "./pages/religionDetails";

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
  {
    path: "/religion",
    element: <ReligionPage />,
    children: [
      {
        path: ":casteName/:model",
        element: <ReligionDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
