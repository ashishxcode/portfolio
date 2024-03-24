import React from "react";
import About from "@/components/about";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Separator from "@/components/separator";
import Skills from "@/components/skills";

const NavItems = [
  {
    name: "Home",
    link: "/",
    icon: <></>,
  },
];
const Home = () => {
  return (
    <main className="w-full max-w-6xl mx-auto h-screen flex flex-col items-center p-4 md:py-24">
      <section className="space-y-12 md:space-y-24 pb-12 md:pb-24">
        <Header />
        <Separator />
        <About />
        <Separator />
        <Skills />
      </section>
    </main>
  );
};

export default Home;
