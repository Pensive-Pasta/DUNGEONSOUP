"use client";

import { useState, useEffect } from "react";
import About from "@/app/components/about";
import ArticleCard from "../components/article-card";
import AuthorHero from "../components/author/author-hero";
import Loading from "../components/loading";
import Error from "../components/error";

const Author = ({ params: { author_id } }) => {
  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dungeonsoup-backend.onrender.com/author/${author_id}`)
      .then((response) => response.text())
      .then((data) => setAuthor(JSON.parse(data)))
      .catch((error) => console.error("Error fetching author data:", error));
    fetch(
      `https://dungeonsoup-backend.onrender.com/articles/author/${author_id}`
    )
      .then((response) => response.text())
      .then((data) => setArticles(JSON.parse(data)))
      .catch((error) => console.error("Error fetching articles data:", error));
    setLoading(false);
  }, [author_id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : !author ? (
        <Error title="Oops!" subtitle="That author doesn't exist!" />
      ) : (
        <>
          <AuthorHero name={author.name} />
          <div className="author-articles-container">
            {articles.map((article) => (
              <ArticleCard
                {...article}
                authorName={author.name}
                key={article.article_id}
              />
            ))}
          </div>
          <About
            description={author.about}
            imageUrl={author.profile_image_url}
            title={`ABOUT ${author.name.toUpperCase()}`}
            alt="about image"
          />
        </>
      )}
    </div>
  );
};

export default Author;
