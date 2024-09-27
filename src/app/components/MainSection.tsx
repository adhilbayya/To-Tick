import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import SideBarMenu from "./SideBarMenu";
import Items from "./Items";

interface Task {
  id: number;
  description: string;
}

export default function MainSection() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const addtask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      description: taskInput,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  return (
    <div className="flex flex-row min-h-full">
      <div className="flex-shrink-0 basis-1/5 min-h-full">
        <SideBarMenu />
      </div>
      <div className="">
        <header className="p-3 text-2xl">Today</header>
        <main className="p-3">
          {/* <form onClick={addtask}>
            <input
              value={taskInput}
              type="text"
              placeholder="type here.."
              className="bg-slate-200 p-2 rounded-xl"
              onChange={handleInputChange}
            />
            <button type="submit" className="bg-slate-200 p-2 rounded-xl ml-2">
              done
            </button>
          </form>
          <ul className="bg-slate-200 w-1/2 rounded-xl my-4">
            {tasks.map((task) => (
              <li key={task.id} className="p-2 mb-2">
                <Checkbox className="mr-2" />
                {task.description}
              </li>
            ))}
          </ul> */}
          <Items />
        </main>
      </div>
    </div>
  );
}
