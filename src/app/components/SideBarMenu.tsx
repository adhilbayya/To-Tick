import AddTask from "./AddTask";
import UpcomingTask from "../upcoming/page";
import NewProject from "../newProject/page";
import Link from "next/link";

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
        <Link className="my-1" href="/">
          <p>Today</p>
        </Link>
        <Link className="my-1" href="/upcoming">
          <p>Upcoming</p>
        </Link>
        <Link className="my-1" href="/newProject">
          <p>New Project</p>
        </Link>
      </main>
    </div>
  );
}
