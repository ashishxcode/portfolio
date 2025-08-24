import { Container } from "./container";
import { Github, Linkedin, Twitter } from "lucide-react";

export function PortfolioFooter() {
  return (
    <footer className="border-t px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <div className="text-sm font-mono text-muted order-2 sm:order-1">ashish.dev</div>
          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <a
              href="https://twitter.com/ashishxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 text-muted hover:text-foreground transition-colors flex items-center gap-1.5 sm:gap-2"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-xs sm:text-sm">X</span>
            </a>

            <a
              href="https://github.com/ashishxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 text-muted hover:text-foreground transition-colors flex items-center gap-1.5 sm:gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs sm:text-sm">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/ashishxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 text-muted hover:text-foreground transition-colors flex items-center gap-1.5 sm:gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs sm:text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
