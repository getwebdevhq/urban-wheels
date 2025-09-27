"use client";

import React from "react";
import { format, addDays } from "date-fns";
import { UseFormReturn } from "react-hook-form";

import type { BookingFormData } from "@/lib/validations";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  form: UseFormReturn<BookingFormData>;
  name: keyof BookingFormData;
  label: string;
  compact?: boolean;
  disablePast?: boolean;
  minDaysFromToday?: number;
}

export function DatePicker({ 
  form, 
  name, 
  label, 
  compact, 
  disablePast,
  minDaysFromToday = 1 
}: DatePickerProps) {
  const getDisabledDates = () => {
    if (!disablePast) return undefined;
    
    const minDate = addDays(new Date(), minDaysFromToday - 1);
    return (date: Date) => date <= minDate;
  };

  return (
    <div className="relative">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="grid h-full shrink-0 grow-0 grid-cols-1 items-start justify-center space-y-0 px-4">
            <FormLabel
              className={cn(
                "inline-block size-full font-bold",
                compact ? "text-xs" : "text-sm"
              )}
            >
              {label}
            </FormLabel>

            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <button
                    type="button"
                    className={cn(
                      "text-muted-foreground text-left text-sm",
                      field.value && "font-medium"
                    )}
                  >
                    {field.value ?
                      format(field.value, "LLL dd, y")
                    : <span>Pick a date</span>}
                  </button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={getDisabledDates()}
                />
              </PopoverContent>
            </Popover>

            <FormMessage
              className={cn(
                "absolute overflow-hidden text-ellipsis",
                compact ? "top-14 text-xs" : "top-16 text-sm"
              )}
            />
          </FormItem>
        )}
      />
    </div>
  );
}