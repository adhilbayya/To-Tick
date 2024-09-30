import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { TimePicker12Demo } from "./DateTimePicker";
import { useState } from "react";

const formSchema = z.object({
  datetime: z.date(),
});

interface DateTimePickerProps {
  onAddDateTime: (date: Date) => void;
}

function DateTimePicker({ onAddDateTime }: DateTimePickerProps) {
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setDateTime(values.datetime);
    onAddDateTime(values.datetime);
  }

  // Helper function to reset time to midnight
  const setDateToMidnight = (date: Date) => {
    return new Date(date.setHours(0, 0, 0, 0));
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="datetime"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[150px] justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP HH:mm:ss")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      setDateToMidnight(date) < setDateToMidnight(new Date())
                    }
                    initialFocus
                  />
                  <div className="p-3 border-border border-t">
                    <TimePicker12Demo
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                  <Button className="p-3" type="submit">
                    Submit
                  </Button>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default DateTimePicker;
