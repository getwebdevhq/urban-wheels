"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import type { Location } from "@/lib/types";
import type { BookingFormData } from "@/lib/validations";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
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

interface LocationSelectProps {
  form: UseFormReturn<BookingFormData>;
  locations: Location[];
  compact?: boolean;
}

export function LocationSelect({ form, locations, compact }: LocationSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem className="grid size-full grid-cols-1 items-start justify-center space-y-0 overflow-x-hidden px-4">
            <FormLabel
              className={cn(
                "inline-block size-full font-bold",
                compact ? "text-xs" : "text-sm"
              )}
            >
              Pick-up / Drop-off
            </FormLabel>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <button
                    type="button"
                    role="combobox"
                    aria-label="select location"
                    aria-controls="location-menu"
                    aria-expanded={open}
                    className={cn(
                      "text-muted-foreground text-left text-sm",
                      field.value && "font-medium"
                    )}
                  >
                    {field.value ?
                      locations.find(location => location.value === field.value)?.name
                    : "Select location"}
                  </button>
                </FormControl>
              </PopoverTrigger>
              
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Search location..." />
                  <CommandEmpty>No place found.</CommandEmpty>
                  <CommandGroup>
                    {locations.map(({ name, value }) => (
                      <CommandItem
                        key={name}
                        value={value}
                        onSelect={(currentValue) => {
                          form.setValue("location", currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 size-4 shrink-0",
                            value === field.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
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