"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function ContactCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref}>
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Working on something interesting?
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              I&apos;m always excited to chat about new projects, creative
              challenges, or just swap stories. Drop me a line and let&apos;s see
              what we can build together.
            </p>

            <Button size="lg" asChild>
              <Link
                href="https://x.com/ashishxcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let&apos;s Talk
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
