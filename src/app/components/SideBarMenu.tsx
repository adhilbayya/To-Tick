import AddTask from "./AddTask";

export default function SideBarMenu() {
  return (
    <div className="flex flex-col bg-slate-100 min-h-full">
      <header>
        <h2 className="text-sm m-2">Adhil</h2>
      </header>
      <main className="flex flex-col m-3 ">
        <AddTask />
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
