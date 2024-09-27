import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import SideBarMenu from "./SideBarMenu";

interface Task {
  id: number;
  description: string;
}

interface MainSectionProps {
  tasks: Task[];
  onAddTask: (description: string) => void;
}

export default function MainSection({ tasks, onAddTask }: MainSectionProps) {
  return (
    <div className="flex-grow">
      <header className="p-3 text-2xl">Today</header>
      <main className="p-3">
        <ul className="bg-slate-200 w-1/2 rounded-xl my-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-2 mb-2">
              <Checkbox className="mr-2" />
              {task.description}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
