"use client";

import SideBarMenu from "@/app/components/SideBarMenu";
import React, { useEffect, useState } from "react";

interface Task {
  id: number;
  description: string;
  datetime: Date | null;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  function handleAddTask(description: string, datetime: Date | null) {
    const newTask: Task = {
      id: Date.now(),
      description,
      datetime,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="h-screen flex">
      <SideBarMenu onAddTask={handleAddTask} />
      {children}
    </div>
  );
}
