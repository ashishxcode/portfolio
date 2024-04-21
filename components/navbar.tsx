"use client";

import { useState, useEffect } from "react";
import ModeToggle from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NAV_LINKS = [{ name: "Blogs", href: "/blogs" }];

  return (
    <nav
      className={`${
        isSticky ? "sticky top-0  z-50 backdrop-blur" : "relative"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between p-4 ">
        <Link href="/" className="text-2xl font-bold flex items-center">
          &lt;
          <div
            className={cn(
              "transition-all duration-500 linear overflow-hidden font-mono",
              isSticky ? "w-0" : "w-[160px]"
            )}
          >
            <span className="text-primary">ashishxcode</span>
          </div>
          /&gt;
        </Link>
        <div className="flex items-center gap-4 bg-background px-4 py-[4px] border rounded-full">
          <ul className="hidden md:flex items-center space-x-4 ">
            {NAV_LINKS.map((link) => (
              <li
                key={link.name}
                className="transition-all duration-300 ease-in-out hover:text-primary"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
