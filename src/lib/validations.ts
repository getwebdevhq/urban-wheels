import { z } from "zod";
import { addDays, differenceInDays, isAfter } from "date-fns";
import { BOOKING_LIMITS } from "./constants";

export const bookingSchema = z
  .object({
    location: z.string().min(1, "Location is required"),
    checkin: z.date({ required_error: "Check-in date is required" }),
    checkout: z.date({ required_error: "Check-out date is required" }),
  })
  .refine(({ checkin, checkout }) => isAfter(checkout, checkin), {
    message: "Check-out must be after check-in",
    path: ["checkout"],
  })
  .refine(
    ({ checkin, checkout }) => 
      differenceInDays(checkout, checkin) <= BOOKING_LIMITS.MAX_DAYS,
    {
      message: `Maximum ${BOOKING_LIMITS.MAX_DAYS} days allowed for booking`,
      path: ["checkout"],
    }
  );

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;