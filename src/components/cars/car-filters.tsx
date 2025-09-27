"use client";

import React from "react";
import { Filter } from "lucide-react";

import { useCarFilters } from "@/hooks/use-car-filters";
import { CounterBadge } from "@/components/ui/counter-badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { PriceRangeFilter } from "./filters/price-range-filter";
import { BodyStyleFilter } from "./filters/body-style-filter";
import { EngineTypeFilter } from "./filters/engine-type-filter";
import { SeatingCapacityFilter } from "./filters/seating-capacity-filter";
import { TransmissionFilter } from "./filters/transmission-filter";

interface CarFiltersProps {
  initialMinPrice: number;
  initialMaxPrice: number;
}

export function CarFilters({ initialMinPrice, initialMaxPrice }: CarFiltersProps) {
  const {
    filters,
    setFilters,
    isOpen,
    setIsOpen,
    activeFilterCount,
    applyFilters,
    resetFilters,
  } = useCarFilters({ initialMinPrice, initialMaxPrice });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className={buttonVariants({
          variant: "outline",
          className: "relative",
        })}
      >
        <Filter className="mr-2 size-4 shrink-0" />
        Filters
        <CounterBadge count={activeFilterCount} />
      </DialogTrigger>

      <DialogContent className="flex max-h-[calc(100dvh-4rem)] flex-col gap-0 p-0 sm:max-w-3xl">
        <DialogHeader className="flex h-28 items-center justify-center">
          <DialogTitle className="text-center lg:text-3xl">Filters</DialogTitle>
        </DialogHeader>

        <div className="flex h-full grow flex-col space-y-6 overflow-y-auto border-y p-6">
          <PriceRangeFilter
            minPrice={initialMinPrice}
            maxPrice={initialMaxPrice}
            filters={filters}
            setFilters={setFilters}
          />
          <Separator />
          <BodyStyleFilter filters={filters} setFilters={setFilters} />
          <Separator />
          <EngineTypeFilter filters={filters} setFilters={setFilters} />
          <Separator />
          <SeatingCapacityFilter filters={filters} setFilters={setFilters} />
          <Separator />
          <TransmissionFilter filters={filters} setFilters={setFilters} />
        </div>

        <DialogFooter className="h-28 px-5">
          <div className="flex w-full items-center justify-between">
            <Button
              variant="secondary"
              onClick={resetFilters}
              className="w-24 text-sm font-semibold transition-shadow duration-200 hover:shadow"
            >
              Clear all
            </Button>

            <Button
              onClick={applyFilters}
              className="w-24 text-sm font-semibold transition-shadow duration-200 hover:shadow"
            >
              Show cars
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}