"use client";

import React from "react";

export const useArticles = () => {
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://dev.to/api/articles?username=ashishxcode"
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  return { articles, isLoading };
};
