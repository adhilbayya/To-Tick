import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface AddTaskProps {
  onAddTask: (description: string) => void;
}

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [taskInput, setTaskInput] = useState<string>("");

  const handleSubmit = () => {
    if (taskInput.trim()) {
      onAddTask(taskInput);
      setTaskInput("");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">Add Item</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add new task</DialogTitle>
          <Input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter task"
          />
          <Button onClick={handleSubmit}>submit</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
