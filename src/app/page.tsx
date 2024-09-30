"use client";

import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpcomingTask from "./components/UpcomingTasks";

const router = createBrowserRouter([
  {
    path: "/new",
    element: <Dashboard />,
  },
  {
    path: "/upcomingTask",
    element: <UpcomingTask />,
  },
]);

export default function Home() {
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
}
