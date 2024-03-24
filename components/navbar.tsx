"use client";

import { useState, useEffect } from "react";
import ModeToggle from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

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

  return (
    <nav
      className={`${
        isSticky ? "sticky top-0 bg-background shadow-md" : "relative"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <div className="text-2xl font-bold flex items-center">
          &lt;
          <div
            className={cn(
              "transition-all duration-300 ease-in-out overflow-hidden font-mono",
              isSticky ? "w-0 opacity-0" : "w-[160px] opacity-100"
            )}
          >
            <span className="text-blue-500">ashishxcode</span>
          </div>
          /&gt;
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;