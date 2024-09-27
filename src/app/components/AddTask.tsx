import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddTask = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Item</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add new task</DialogTitle>
          <Input />
          <Button>submit</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
