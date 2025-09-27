import { Suspense } from "react";

import { LogoSlider } from "@/components/logo-slider";
import { SearchForm } from "@/components/search/search-form";
import { SearchFormSkeleton } from "@/components/skeletons";
import { fetchLocations } from "@/lib/data";

export default async function HomePage() {
  const locations = await fetchLocations();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Find Your Perfect
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rental Car
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
            Discover premium vehicles for every journey. From city drives to
            cross-country adventures, we have the perfect car waiting for you.
          </p>
        </div>

        <div className="mt-12">
          <Suspense fallback={<SearchFormSkeleton />}>
            <SearchForm locations={locations} />
          </Suspense>
        </div>
      </section>

      {/* Logo Slider */}
      <section className="py-12">
        <div className="text-center">
          <h2 className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Trusted by leading brands
          </h2>
        </div>
        <div className="mt-8">
          <LogoSlider />
        </div>
      </section>
    </main>
  );
}