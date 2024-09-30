import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";
import MainSection from "./MainSection";

interface Task {
  id: number;
  description: string;
  datetime: Date | null;
}

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(description: string, datetime: Date | null) {
    const newTask: Task = {
      id: Date.now(),
      description,
      datetime,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="flex flex-row min-h-full">
      <SideBarMenu onAddTask={handleAddTask} />
      <MainSection tasks={tasks} />
    </div>
  );
}

export default Dashboard;
