"use client";

import { Logo } from "./logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function PortfolioFooter() {
  return (
    <motion.footer
      className="border-t bg-background/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Frontend developer crafting clean, minimal interfaces that solve
              complex user problems.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-medium text-foreground">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://twitter.com/ashishxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted/30 group-hover:bg-muted/50 transition-colors">
                  <Twitter className="w-4 h-4" />
                </div>
                <span className="text-sm">Follow on X</span>
              </a>

              <a
                href="https://github.com/ashishxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted/30 group-hover:bg-muted/50 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-sm">View GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/ashishxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted/30 group-hover:bg-muted/50 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-sm">Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Ashish Patel. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js, Tailwind CSS & TypeScript
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
