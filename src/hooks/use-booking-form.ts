import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInDays, isAfter } from "date-fns";

import { bookingSchema, type BookingFormData } from "@/lib/validations";
import { SEARCH_PARAMS, PRICING } from "@/lib/constants";
import { createUrl } from "@/lib/utils";

interface UseBookingFormProps {
  carSlug?: string;
  pricePerDay: number;
  currency: string;
  redirectPath?: string;
}

export function useBookingForm({ 
  carSlug, 
  pricePerDay, 
  currency,
  redirectPath = "/cars" 
}: UseBookingFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [pricing, setPricing] = useState({
    days: 0,
    subtotal: 0,
    taxesAndFees: 0,
    total: 0,
  });

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const calculatePricing = useCallback(() => {
    const checkin = form.getValues("checkin");
    const checkout = form.getValues("checkout");

    if (checkin && checkout && isAfter(checkout, checkin)) {
      const days = differenceInDays(checkout, checkin);
      const subtotal = pricePerDay * days;
      const taxesAndFees = subtotal * PRICING.TAX_RATE;
      const total = subtotal + taxesAndFees;

      setPricing({ days, subtotal, taxesAndFees, total });
    } else {
      setPricing({ days: 0, subtotal: 0, taxesAndFees: 0, total: 0 });
    }
  }, [form, pricePerDay]);

  const onSubmit = useCallback((values: BookingFormData) => {
    const { location, checkin, checkout } = values;
    const newParams = new URLSearchParams(searchParams.toString());

    if (carSlug) {
      newParams.set(SEARCH_PARAMS.CAR_SLUG, carSlug);
    }
    
    newParams.set(SEARCH_PARAMS.LOCATION, location);
    newParams.set(SEARCH_PARAMS.CHECKIN, checkin.toISOString());
    newParams.set(SEARCH_PARAMS.CHECKOUT, checkout.toISOString());

    const targetPath = carSlug ? "/reservation" : redirectPath;
    router.push(createUrl(targetPath, newParams));
  }, [carSlug, searchParams, router, redirectPath]);

  // Initialize form from URL params
  useEffect(() => {
    const location = searchParams.get(SEARCH_PARAMS.LOCATION);
    const checkin = searchParams.get(SEARCH_PARAMS.CHECKIN);
    const checkout = searchParams.get(SEARCH_PARAMS.CHECKOUT);

    if (location) form.setValue("location", location);
    if (checkin) form.setValue("checkin", new Date(checkin));
    if (checkout) form.setValue("checkout", new Date(checkout));

    calculatePricing();
  }, [searchParams, form, calculatePricing]);

  // Watch form changes for pricing updates
  useEffect(() => {
    const subscription = form.watch(() => calculatePricing());
    return () => subscription.unsubscribe();
  }, [form, calculatePricing]);

  return {
    form,
    pricing,
    onSubmit: form.handleSubmit(onSubmit),
  };
}