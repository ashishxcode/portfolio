import React from "react";
import MeEmoji from "@/public/images/me.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row text-center md:text-left items-center gap-4">
      <Image
        src={MeEmoji}
        alt="me"
        className="rounded-full border-2 border-gray-800 w-28 md:w-36 h-28 md:h-36 object-cover"
      />
      <div className="space-y-2 ">
        <h1 className="text-3xl font-semibold">Ashish Patel</h1>
        <p className="text-lg font-light">
          I&apos;m a full stack developer at Culturex. I specialize in UI/UX
          design, Responsive design, and web development.
        </p>
      </div>
    </header>
  );
};

export default Header;
