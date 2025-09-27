import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-14 items-center space-x-4">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-1 font-bold">
            <Icons.logo className="size-6" />
            <span>{siteConfig.name}</span>
          </div>
        </Link>

        <div className="flex flex-1 justify-end gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Register
          </Button>
          <Button size="sm" className="rounded-full px-6">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}