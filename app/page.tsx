import About from "@/components/about";
import Header from "@/components/header";
import Separator from "@/components/separator";
import Skills from "@/components/skills";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-x-hidden w-full max-w-6xl mx-auto h-screen flex flex-col items-center p-4 md:py-24">
      <section className="space-y-12 md:space-y-24">
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
