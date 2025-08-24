"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav 
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="py-3 sm:py-4 lg:py-6 flex items-center justify-between">
          <motion.a 
            href="/"
            className="text-sm font-mono text-muted hover:text-foreground transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            ashish.dev
          </motion.a>
          <motion.div 
            className="flex items-center gap-3 sm:gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
