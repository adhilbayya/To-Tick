import { useState } from "react";
import AddTask from "./AddTask";
import UpcomingTask from "./UpcomingTasks";
import NewProject from "./NewProject";

interface SideBarMenuProps {
  onAddTask: (description: string, datetime: Date | null) => void;
}

export default function SideBarMenu({ onAddTask }: SideBarMenuProps) {
  return (
    <div className="flex flex-col bg-slate-100 min-h-full w-1/6">
      <header>
        <h2 className="text-sm m-2">Adhil</h2>
      </header>
      <main className="flex flex-col m-3 ">
        <AddTask newTask={onAddTask} />
        <a className="my-1" href="">
          Today
        </a>
        <a className="my-1" href="">
          Upcoming
        </a>
        <a className="my-1" href="">
          New Project
        </a>
      </main>
    </div>
  );
}
