"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useArticles } from "@/hooks/useArticles";

// Article.tsx
interface Article {
  id: string;
  url: string;
  title: string;
  description: string;
  cover_image: string;
  reading_time_minutes: number;
  tag_list: string[];
}

const Article = ({ article }: { article: Article }) => (
  <article key={article.id} className="w-full h-full">
    <Link
      href={article.url}
      className="block space-y-4 hover:bg-blue-500/10 border border-blue-500/20 p-4 rounded-md transition-a duration-300"
    >
      <div className="relative">
        <div className="absolute bottom-2 right-2 px-2 py-1 text-xs font-medium bg-black rounded text-white">
          {article.reading_time_minutes} min read
        </div>
        <Image
          src={article.cover_image}
          alt={article.title}
          width={1000}
          height={500}
          className="w-full h-52 object-cover rounded-md ratio-16/9"
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">{article.title}</h3>
        <p className="text-sm line-clamp-2">{article.description}</p>
      </div>

      <div className="flex gap-2 items-center flex-wrap">
        {article.tag_list.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-blue-500/10 rounded-sm px-2 py-1 dark:bg-blue-500/20"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  </article>
);

// Blogs.tsx
const Blogs = () => {
  const { articles, isLoading } = useArticles();

  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col items-start p-4 md:py-24">
      <header className="mb-5 md:mb-10">
        <h1 className="h1 mb-2">Blogs</h1>
        <p className="opacity-80">
          I&apos;ve been programming for almost 5 years now. Throughout this
          time I have been learning new technologies. I have created many blogs
          on various technologies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {isLoading ? (
          <div role="status" className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded-full w-full mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[100px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          articles.map((article: Article) => (
            <Article key={article.id} article={article} />
          ))
        )}
      </div>
    </main>
  );
};

export default Blogs;
