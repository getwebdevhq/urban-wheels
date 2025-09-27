"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SEARCH_PARAMS } from "@/lib/constants";
import { createUrl } from "@/lib/utils";

export function CarDetailsButton({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const location = searchParams.get(SEARCH_PARAMS.LOCATION);
  const checkin = searchParams.get(SEARCH_PARAMS.CHECKIN);
  const checkout = searchParams.get(SEARCH_PARAMS.CHECKOUT);

  if (location) newParams.set(SEARCH_PARAMS.LOCATION, location);
  if (checkin) newParams.set(SEARCH_PARAMS.CHECKIN, checkin);
  if (checkout) newParams.set(SEARCH_PARAMS.CHECKOUT, checkout);

  const href = createUrl(`/car/${slug}`, newParams);

  return (
    <Button className="w-full" asChild>
      <Link href={href}>View details</Link>
    </Button>
  );
}
