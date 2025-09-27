import type { FilterState, EngineType } from "@/lib/types";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Dispatch, SetStateAction } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CAR_SPECS } from "@/lib/constants";

const engineTypeOptions = [
  { slug: CAR_SPECS.ENGINE_TYPE.GAS, name: "Gas" },
  { slug: CAR_SPECS.ENGINE_TYPE.HYBRID, name: "Hybrid" },
  { slug: CAR_SPECS.ENGINE_TYPE.ELECTRIC, name: "Electric" },
];

interface EngineTypeFilterProps {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
}

export function EngineTypeFilter({ filters, setFilters }: EngineTypeFilterProps) {
  const handleChange = (engineType: EngineType, checked: CheckedState) => {
    setFilters(prev => ({
      ...prev,
      engineTypes: checked
        ? [...prev.engineTypes, engineType]
        : prev.engineTypes.filter(type => type !== engineType),
    }));
  };

  return (
    <section>
      <h3 className="pb-6 text-xl font-semibold">Engine type</h3>

      <div className="grid grid-cols-2 items-center">
        {engineTypeOptions.map(({ slug, name }) => (
          <div key={slug} className="flex items-center py-2">
            <Checkbox
              id={slug}
              checked={filters.engineTypes.includes(slug as EngineType)}
              onCheckedChange={(checked) => handleChange(slug as EngineType, checked)}
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