"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Container asSection>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hey, I&apos;m Ashish 👋
          </motion.h1>
          <motion.p 
            className="text-lg text-muted max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            A developer who believes the best code is the code that solves real problems
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          {/* Images */}
          <div className="flex items-center justify-center gap-8 mb-16 max-w-4xl mx-auto">
            {/* Left - Code Image */}
            <motion.div 
              className="w-52 h-38 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform -rotate-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/code.webp"
                alt="Visual representation of coding"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Center - Main Profile Image */}
            <motion.div 
              className="w-52 h-38 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/ashish.webp"
                alt="Ashish's Profile Picture"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right - Coffee Image */}
            <motion.div 
              className="w-52 h-38 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform rotate-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/coffee.webp"
                alt="Visual representation of coffee culture"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Personal Story */}
          <div className="max-w-2xl mx-auto space-y-8">
            <motion.p 
              className="text-lg leading-relaxed text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              There&apos;s this moment when someone uses something I&apos;ve built and everything just works. 
              They don&apos;t have to think about it – they just get where they need to go. That&apos;s what I live for.
            </motion.p>
            
            <motion.p 
              className="leading-relaxed text-muted"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              A few years back, I was just curious about how websites worked. Now I build things 
              that hopefully make people&apos;s lives easier. I still get that same rush when someone 
              tells me something I made actually helped them.
            </motion.p>

            <motion.p 
              className="leading-relaxed text-muted"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              Most weekends you&apos;ll find me hunting for new coffee shops or trying new restaurants. 
              Not because I&apos;m a foodie, but because I find it fascinating how different cultures 
              solve the same basic problems. Some of my best ideas come during long walks when 
              I&apos;m not trying to solve anything at all.
            </motion.p>

            <motion.div 
              className="bg-accent/20 p-6 rounded-xl my-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              <p className="text-muted leading-relaxed italic">
                &quot;Every line of code should serve someone&apos;s actual need. If I can&apos;t explain 
                why something exists in terms of real human benefit, it probably shouldn&apos;t exist.&quot;
              </p>
            </motion.div>

            <motion.p 
              className="leading-relaxed text-muted"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            >
              The funny thing about simple solutions is they&apos;re usually the hardest ones to build. 
              But when you get it right, when someone can focus on what they&apos;re trying to accomplish 
              instead of fighting with your interface – that&apos;s when you know you&apos;ve done something worthwhile.
            </motion.p>
          </div>
        </div>
      </Container>
    </div>
  );
}
