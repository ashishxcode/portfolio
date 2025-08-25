"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function PortfolioHeader() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Dot Background */}
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#cacaca_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the faded look */}
        <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black_40%)]"></div>
      </div>

      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Available Badge */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="px-2 py-1 sm:px-3 bg-green-500/10 text-green-600 dark:text-green-400 text-xs sm:text-sm rounded-full font-medium border border-green-500/20 flex items-center gap-1.5 sm:gap-2">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              Available for work
            </span>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Ashish Patel
              </h1>
              <p className="text-base sm:text-lg text-muted mb-4 sm:mb-0">
                3+ years of building scalable web
              </p>
            </div>
            <div className="flex flex-col sm:items-end"></div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-6">
              clean design — solving user problems
              <span className="text-muted">.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
              I&apos;m a frontend developer passionate about crafting clean,
              minimal interfaces that elegantly solve complex user problems.
              With 3+ years of experience building web applications, I now
              specialize in creating scalable architectures that grow with your
              business. Outside of coding, I&apos;m always discovering new
              coffee spots, exploring diverse cuisines, and finding inspiration
              on long walks through the city.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button onClick={scrollToWork}>View My Work</Button>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.header>
  );
}
