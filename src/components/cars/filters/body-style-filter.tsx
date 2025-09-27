import type { FilterState, BodyStyle } from "@/lib/types";
import type { Dispatch, SetStateAction } from "react";

import { Icons } from "@/components/icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CAR_SPECS } from "@/lib/constants";

const bodyStyleOptions = [
  { slug: CAR_SPECS.BODY_STYLE.HATCHBACK, name: "Hatchback", icon: Icons.hatchback },
  { slug: CAR_SPECS.BODY_STYLE.MINIVAN, name: "Minivan", icon: Icons.minivan },
  { slug: CAR_SPECS.BODY_STYLE.PICKUP_TRUCK, name: "Pickup Truck", icon: Icons.pickupTruck },
  { slug: CAR_SPECS.BODY_STYLE.SPORTS_CAR, name: "Sports Car", icon: Icons.sportsCar },
  { slug: CAR_SPECS.BODY_STYLE.SUV, name: "SUV", icon: Icons.suv },
  { slug: CAR_SPECS.BODY_STYLE.SEDAN, name: "Sedan", icon: Icons.sedan },
];

interface BodyStyleFilterProps {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
}

export function BodyStyleFilter({ filters, setFilters }: BodyStyleFilterProps) {
  const handleChange = (values: string[]) => {
    setFilters(prev => ({
      ...prev,
      bodyStyles: values as BodyStyle[],
    }));
  };

  return (
    <section>
      <h3 className="pb-6 text-xl font-semibold">Body Style</h3>

      <ToggleGroup
        type="multiple"
        variant="outline"
        value={filters.bodyStyles}
        onValueChange={handleChange}
        className="grid size-full grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {bodyStyleOptions.map(({ icon: Icon, slug, name }) => (
          <ToggleGroupItem
            key={slug}
            value={slug}
            className="flex h-32 w-full flex-col items-start justify-between p-4"
          >
            <Icon className="size-8" />
            <span className="text-base font-medium">{name}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </section>
  );
}