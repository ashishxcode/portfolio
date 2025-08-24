"use client";

import { Mail, MapPin, Github, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react"
import { Container } from "@/components/container";
import { motion } from "framer-motion";

const contacts = [
  {
    type: "email",
    label: "ashishxcode@gmail.com",
    href: "mailto:ashishxcode@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    type: "github",
    label: "github",
    href: "https://github.com/ashishxcode",
    icon: Github,
    external: true,
  },
  {
    type: "linkedin",
    label: "linkedin",
    href: "https://linkedin.com/in/ashishxcode",
    icon: Linkedin,
    external: true,
  },
]

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section id="contact">
      <Container asSection>
      <div className="max-w-3xl">
        <motion.h2 
          className="text-sm text-muted uppercase tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="grid sm:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <contact.icon className="w-5 h-5" />
              <span className="font-medium">{contact.label}</span>
              {contact.external && (
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
      </Container>
    </section>
  )
}
