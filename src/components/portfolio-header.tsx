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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Available Badge */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-sm rounded-full font-medium border border-green-500/20 flex items-center gap-2">
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

          {/* Hero Content */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Hey, I&apos;m Ashish.
              <br />
              <span className="text-muted">I build things that just work.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
              Frontend developer who believes the best interfaces are the ones you don&apos;t have to think about. 
              When someone uses what I&apos;ve built and it just clicks – that&apos;s what I live for.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button onClick={scrollToWork} size="lg">
              See My Work
            </Button>
            <Link
              href="#contact"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              Let&apos;s Talk →
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.header>
  );
}
