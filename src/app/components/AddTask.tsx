import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import DateTimePicker from "@/components/time-picker/date-time-form-picker";

interface AddTaskProps {
  newTask: (description: string) => void;
}

const AddTask = ({ newTask }: AddTaskProps) => {
  const [taskInput, setTaskInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (taskInput.trim()) {
      newTask(taskInput);
      setTaskInput("");
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit();
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
            ref={inputRef}
            value={taskInput}
            onKeyDown={handleKeyDown}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter task"
          />
          <div className="flex justify-between">
            <div>
              <DateTimePicker />
            </div>
            <div>
              <DialogClose>
                <Button className="mr-2">That's all</Button>
              </DialogClose>
              <Button onClick={handleSubmit}>next</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
