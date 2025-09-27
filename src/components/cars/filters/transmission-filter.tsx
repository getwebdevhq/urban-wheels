import type { FilterState, Transmission } from "@/lib/types";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Dispatch, SetStateAction } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CAR_SPECS } from "@/lib/constants";

const transmissionOptions = [
  { slug: CAR_SPECS.TRANSMISSION.AUTOMATIC, name: "Automatic" },
  { slug: CAR_SPECS.TRANSMISSION.MANUAL, name: "Manual" },
];

interface TransmissionFilterProps {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
}

export function TransmissionFilter({ filters, setFilters }: TransmissionFilterProps) {
  const handleChange = (transmission: Transmission, checked: CheckedState) => {
    setFilters(prev => ({
      ...prev,
      transmissions: checked
        ? [...prev.transmissions, transmission]
        : prev.transmissions.filter(t => t !== transmission),
    }));
  };

  return (
    <section>
      <h3 className="pb-6 text-xl font-semibold">Transmission</h3>

      <div className="grid grid-cols-2 items-center">
        {transmissionOptions.map(({ slug, name }) => (
          <div key={slug} className="flex items-center py-2">
            <Checkbox
              id={slug}
              checked={filters.transmissions.includes(slug as Transmission)}
              onCheckedChange={(checked) => handleChange(slug as Transmission, checked)}
              className="size-6 rounded-md"
            />
            <Label
              htmlFor={slug}
              className="w-full cursor-pointer pl-4 text-base font-normal"
            >
              {name}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
}