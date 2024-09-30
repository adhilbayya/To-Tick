import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
  id: number;
  description: string;
  datetime: Date | null;
}

interface MainSectionProps {
  tasks: Task[];
}

export default function MainSection({ tasks }: MainSectionProps) {
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="flex-grow">
      <header className="p-3 text-2xl">Today</header>
      <main className="p-3">
        <ul className="bg-slate-200 w-1/2 rounded-xl my-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-2 mb-2 flex flex-col">
              <div>
                <Checkbox className="mr-2" />
                {task.description}
              </div>
              {isToday(task.datetime) ? (
                <small>Today at {task.datetime?.toLocaleTimeString()}</small>
              ) : (
                <small>{task.datetime?.toLocaleString()}</small>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
