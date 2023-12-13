"use client";

import { useState, useEffect } from "react";
import About from "@/app/components/about";
import ArticleCard from "../components/article-card";
import AuthorHero from "../components/author/author-hero";
import Loading from "../components/loading";
import Error from "../components/error";
import { fetchArticlesByAuthor, fetchAuthor } from "../api/article-api";

const Author = ({ params: { author_id } }) => {
  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const authorData = await fetchAuthor(author_id);
        setAuthor(authorData);

        const articlesData = await fetchArticlesByAuthor(author_id);
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
