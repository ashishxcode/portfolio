import { Mail, MapPin, Github, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react"
import { Container } from "@/components/container";

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
  return (
    <section id="contact">
      <Container asSection>
      <div className="max-w-3xl">
        <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
          Get In Touch
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
            >
              <contact.icon className="w-5 h-5" />
              <span className="font-medium">{contact.label}</span>
              {contact.external && (
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </a>
          ))}
        </div>
      </div>
      </Container>
    </section>
  )
}
