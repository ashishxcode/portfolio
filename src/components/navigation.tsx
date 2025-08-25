"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navigation() {
  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="py-3 sm:py-4 lg:py-6 flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="text-foreground hover:text-muted transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <Logo />
            </motion.div>
          </Link>
          <motion.div
            className="flex items-center gap-3 sm:gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/#work"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              Blogs
            </Link>
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
