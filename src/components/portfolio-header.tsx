"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function PortfolioHeader() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <Container className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-1 sm:px-3 bg-green-500/10 text-green-600 dark:text-green-400 text-xs sm:text-sm rounded-full font-medium border border-green-500/20 flex items-center gap-1.5 sm:gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for work
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed max-w-2xl mb-8 sm:mb-12">
            I'm Ashish, a frontend engineer from India with 5+ years of
            experience. I'm passionate about performance optimization, scalable
            architecture, and building products that serve millions of users.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={scrollToWork}>View My Work</Button>{" "}
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Know More
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
