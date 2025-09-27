import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import type { FilterState, BodyStyle, EngineType, Transmission } from "@/lib/types";
import { SEARCH_PARAMS } from "@/lib/constants";
import { createUrl } from "@/lib/utils";

interface UseCarFiltersProps {
  initialMinPrice: number;
  initialMaxPrice: number;
}

export function useCarFilters({ initialMinPrice, initialMaxPrice }: UseCarFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: initialMinPrice,
    maxPrice: initialMaxPrice,
    seats: undefined,
    bodyStyles: [],
    engineTypes: [],
    transmissions: [],
  });

  const fetchFiltersFromUrl = useCallback((): FilterState => {
    return {
      minPrice: Number(searchParams.get(SEARCH_PARAMS.MIN_PRICE)) || initialMinPrice,
      maxPrice: Number(searchParams.get(SEARCH_PARAMS.MAX_PRICE)) || initialMaxPrice,
      seats: Number(searchParams.get(SEARCH_PARAMS.MIN_SEATS)) || undefined,
      bodyStyles: searchParams.getAll(SEARCH_PARAMS.BODY_STYLE) as BodyStyle[],
      engineTypes: searchParams.getAll(SEARCH_PARAMS.ENGINE_TYPE) as EngineType[],
      transmissions: searchParams.getAll(SEARCH_PARAMS.TRANSMISSION) as Transmission[],
    };
  }, [searchParams, initialMinPrice, initialMaxPrice]);

  const countActiveFilters = useCallback((filterState: FilterState): number => {
    let count = 0;
    
    if (filterState.minPrice !== initialMinPrice) count++;
    if (filterState.maxPrice !== initialMaxPrice) count++;
    if (filterState.seats) count++;
    
    count += filterState.bodyStyles.length;
    count += filterState.engineTypes.length;
    count += filterState.transmissions.length;
    
    return count;
  }, [initialMinPrice, initialMaxPrice]);

  const applyFilters = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    // Clear existing filter params
    Object.values(SEARCH_PARAMS).forEach(param => {
      if (!["location", "checkin", "checkout"].includes(param)) {
        newParams.delete(param);
      }
    });

    // Apply new filters
    if (filters.minPrice !== initialMinPrice) {
      newParams.set(SEARCH_PARAMS.MIN_PRICE, filters.minPrice.toString());
    }
    if (filters.maxPrice !== initialMaxPrice) {
      newParams.set(SEARCH_PARAMS.MAX_PRICE, filters.maxPrice.toString());
    }
    if (filters.seats) {
      newParams.set(SEARCH_PARAMS.MIN_SEATS, filters.seats.toString());
    }

    filters.bodyStyles.forEach(style => 
      newParams.append(SEARCH_PARAMS.BODY_STYLE, style)
    );
    filters.engineTypes.forEach(type => 
      newParams.append(SEARCH_PARAMS.ENGINE_TYPE, type)
    );
    filters.transmissions.forEach(transmission => 
      newParams.append(SEARCH_PARAMS.TRANSMISSION, transmission)
    );

    router.push(createUrl("/cars", newParams));
    setIsOpen(false);
  }, [filters, searchParams, router, initialMinPrice, initialMaxPrice]);

  const resetFilters = useCallback(() => {
    setFilters({
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      seats: undefined,
      bodyStyles: [],
      engineTypes: [],
      transmissions: [],
    });
  }, [initialMinPrice, initialMaxPrice]);

  // Sync filters with URL
  useEffect(() => {
    setFilters(fetchFiltersFromUrl());
  }, [fetchFiltersFromUrl]);

  return {
    filters,
    setFilters,
    isOpen,
    setIsOpen,
    activeFilterCount: countActiveFilters(filters),
    applyFilters,
    resetFilters,
  };
}