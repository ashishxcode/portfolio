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
  created_at: string;
  tag_list: string[];
}

const Article = ({ article }: { article: Article }) => (
  <article key={article.id} className="w-full h-full">
    <Link
      href={article.url}
      className="block min-h-[300px] space-y-4 hover:bg-blue-500/10 border border-blue-500/20 p-4 rounded-md transition-a duration-300"
    >
      <Image
        src={article.cover_image}
        alt={article.title}
        width={1000}
        height={500}
        className="w-full h-48 object-cover rounded-md ratio-16/9"
      />

      <div className="flex  text-sm opacity-80 gap-2 items-center justify-between">
        <span>
          {new Date(article.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span>{article.reading_time_minutes} min read</span>
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
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((i) => (
              <div role="status" key={i} className="space-y-8 animate-pulse ">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 w-full h-48 object-cover rounded-md ratio-16/9">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[150px]"></div>
                  <div className="flex items-center mt-4 space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-5 w-[48px] bg-gray-200 rounded-md dark:bg-gray-700 w-32"
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ))
          : articles.map((article: Article) => (
              <Article key={article.id} article={article} />
            ))}
      </div>
    </main>
  );
};

export default Blogs;
