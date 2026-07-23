"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo({
  onDateChange,
  onReset,
}: {
  onDateChange: (date: Date | undefined) => void;
  onReset: (reset: () => void) => void;
}) {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  const resetDate = () => {
    setDate(undefined);
  };

  React.useEffect(() => {
    onReset?.(resetDate);
  }, [onReset]);

  React.useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground border-2 border-primary/50"
        >
          {date ? format(date, "dd/MM/yyyy") : <span>Pick a Date</span>}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate);
            setOpen(false); // ← Close after selecting
          }}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  );
}
