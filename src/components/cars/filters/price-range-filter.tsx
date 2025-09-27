import type { FilterState } from "@/lib/types";
import type { Dispatch, SetStateAction } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/lib/utils";
import { PRICING } from "@/lib/constants";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
}

export function PriceRangeFilter({
  minPrice,
  maxPrice,
  filters,
  setFilters,
}: PriceRangeFilterProps) {
  const handleSliderChange = (priceRange: number[]) => {
    setFilters(prev => ({
      ...prev,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    }));
  };

  return (
    <section>
      <h3 className="pb-6 text-xl font-semibold">Price range</h3>

      <div className="mx-auto flex max-w-[600px] flex-col items-start justify-between gap-12 pt-2">
        <Slider
          defaultValue={[minPrice, maxPrice]}
          value={[filters.minPrice, filters.maxPrice]}
          onValueChange={handleSliderChange}
          min={minPrice}
          max={maxPrice}
          step={1}
          minStepsBetweenThumbs={1}
          classNames={{ thumb: "h-7 w-7 shadow-lg" }}
        />

        <div className="flex w-full items-center justify-between gap-6">
          <div className="relative h-14 w-full">
            <Label
              htmlFor="min-price"
              className="text-muted-foreground absolute left-2.5 top-1.5 text-xs font-normal"
            >
              Minimum
            </Label>
            <span className="absolute bottom-3 left-3 text-sm">
              {formatCurrency(0, PRICING.CURRENCY).charAt(0)}
            </span>
            <Input
              id="min-price"
              readOnly
              className="absolute inset-0 h-full bg-transparent pl-6 pr-4 pt-5"
              value={filters.minPrice}
            />
          </div>

          <Separator
            decorative
            orientation="horizontal"
            className="h-px shrink-0 basis-4"
          />

          <div className="relative h-14 w-full">
            <Label
              htmlFor="max-price"
              className="text-muted-foreground absolute left-2.5 top-1.5 text-xs font-normal"
            >
              Maximum
            </Label>
            <span className="absolute bottom-3 left-3 text-sm">
              {formatCurrency(0, PRICING.CURRENCY).charAt(0)}
            </span>
            <Input
              id="max-price"
              readOnly
              className="absolute inset-0 h-full bg-transparent pl-6 pr-4 pt-5"
              value={filters.maxPrice}
            />
          </div>
        </div>
      </div>
    </section>
  );
}