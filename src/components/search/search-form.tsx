"use client";

import React from "react";
import { Search } from "lucide-react";

import type { Location } from "@/lib/types";
import { useBookingForm } from "@/hooks/use-booking-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { LocationSelect } from "./location-select";
import { DatePicker } from "./date-picker";
import { Separator } from "../ui/separator";

interface SearchFormProps extends React.HTMLAttributes<HTMLFormElement> {
  locations: Location[];
  compact?: boolean;
}

export function SearchForm({
  locations,
  compact = false,
  className,
  ...props
}: SearchFormProps) {
  const { form, onSubmit } = useBookingForm({
    pricePerDay: 0,
    currency: "INR",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "bg-background relative mx-auto grid grid-cols-[1.25fr_auto_1fr_auto_1fr_auto] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border",
          compact ? "h-14 w-[720px] px-2 py-1" : "h-[68px] w-[860px] px-3 py-2",
          className
        )}
        {...props}
      >
        <LocationSelect
          form={form}
          locations={locations}
          compact={compact}
        />

        <Separator
          orientation="vertical"
          decorative
          className={compact ? "h-6" : "h-8"}
        />

        <DatePicker
          form={form}
          name="checkin"
          label="Check in"
          compact={compact}
          disablePast
        />

        <Separator
          orientation="vertical"
          decorative
          className={compact ? "h-6" : "h-8"}
        />

        <DatePicker
          form={form}
          name="checkout"
          label="Check out"
          compact={compact}
          disablePast
          minDaysFromToday={2}
        />

        <Button type="submit" size="icon" className="rounded-full">
          <span className="sr-only">Search</span>
          <Search
            strokeWidth={3}
            className={cn(compact ? "size-4" : "size-5")}
          />
        </Button>
      </form>
    </Form>
  );
}