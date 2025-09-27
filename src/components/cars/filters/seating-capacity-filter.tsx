import type { FilterState } from "@/lib/types";
import type { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const seatOptions = [undefined, 2, 3, 4, 5, 6, 7] as const;

interface SeatingCapacityFilterProps {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
}

export function SeatingCapacityFilter({ filters, setFilters }: SeatingCapacityFilterProps) {
  const handleClick = (seats: number | undefined) => {
    setFilters(prev => ({
      ...prev,
      seats: prev.seats === seats ? undefined : seats,
    }));
  };

  return (
    <section>
      <h3 className="pb-6 text-xl font-semibold">Seating capacity</h3>

      <div className="mb-2 flex flex-row flex-wrap items-center gap-3">
        {seatOptions.map((seats, index, array) => (
          <Button
            key={seats ?? "any"}
            variant="outline"
            onClick={() => handleClick(seats)}
            className={cn(
              "w-14 rounded-full",
              filters.seats === seats && "!bg-primary !text-background"
            )}
          >
            {seats === undefined
              ? "Any"
              : index === array.length - 1
              ? `${seats}+`
              : seats}
          </Button>
        ))}
      </div>
    </section>
  );
}