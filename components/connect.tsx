import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const SOCIAL_LINKS = [
  {
    name: "Github",
    link: "https://github.com/ashishxcode",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashishxcode/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ashishxcode",
  },
  {
    name: "Dev.to",
    link: "https://dev.to/ashishxcode",
  },
];

const Connect = () => {
  return (
    <section className="text-center">
      <div className=" space-y-4 mb-8 md:mb-16">
        <h1 className="h1 text-center">Let&apos;s create awesome products!</h1>
        <p className="opacity-80 text-lg">
          I&apos;m always looking for new opportunities. If you&apos;d like to
          get in touch,
        </p>
        <Link
          href={"mailto:ashishxcode@gmail.com"}
          className={cn(
            buttonVariants({
              size: "lg",
              className: "bg-primary",
            })
          )}
        >
          Say Hello
        </Link>
      </div>
      <div className="flex justify-center gap-4 md:gap-8">
        {SOCIAL_LINKS.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            className="group/link flex items-center gap-1 text-lg font-medium"
          >
            <span className="group-hover/link:underline transition-all duration-300 ease-in-out">
              {social.name}
            </span>
            <ArrowTopRightIcon className="stroke-current group-hover/link:-translate-y-1 transition-all duration-300 ease-in-out" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Connect;
