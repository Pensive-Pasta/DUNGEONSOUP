"use client";

import { useState, useEffect } from "react";
import About from "@/app/components/about";
import ArticleCard from "../components/article-card";
import AuthorHero from "../components/author/author-hero";

const Author = ({ params: { author_id } }) => {
  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/author/${author_id}`)
      .then((response) => response.text())
      .then((data) => setAuthor(JSON.parse(data)))
      .catch((error) => console.error("Error fetching author data:", error));

    fetch(`http://localhost:3001/articles/author/${author_id}`)
      .then((response) => response.text())
      .then((data) => setArticles(JSON.parse(data)))
      .catch((error) => console.error("Error fetching articles data:", error));
  }, [author_id]);

  if (!author) return null;

  return (
    <div>
      <AuthorHero img={author.banner_image} name={author.name} />
      <h2>Articles</h2>
      {articles.map(({ title, thumbnail_image_url, article_id }) => (
        <ArticleCard
          key={article_id}
          title={title}
          imageUrl={thumbnail_image_url}
          href={`/article/${article_id}`}
        />
      ))}
      <About description={author.about} imageUrl={author.profile_image} />
    </div>
  );
};

export default Author;
