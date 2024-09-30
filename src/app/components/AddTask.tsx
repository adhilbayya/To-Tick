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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface AddTaskProps {
  newTask: (description: string, datetime: Date | null) => void;
}

const AddTask = ({ newTask }: AddTaskProps) => {
  const [taskInput, setTaskInput] = useState<string>("");
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(
    new Date()
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (taskInput.trim()) {
      newTask(taskInput, selectedDateTime);
      setTaskInput("");
      setSelectedDateTime(new Date());
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
              <DatePicker
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                dateFormat="Pp"
                minDate={new Date()}
              />
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
