"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="py-3 sm:py-4 lg:py-6 flex items-center justify-between">
          <a 
            href="/"
            className="text-sm font-mono text-muted hover:text-foreground transition-colors"
          >
            ashish.dev
          </a>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="/#work"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="/about"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              Blogs
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
