"use client";
import { useEffect, useState } from "react";
import ArticleCard from "../article-card";

const LatestArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articlePagination, setArticlePagination] = useState(3);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((response) => response.text())
      .then((data) => {
        setLoading(false);
        setArticles(JSON.parse(data));
        return;
      })
      .catch((error) => console.error("Error fetching author data:", error));
  }, []);

  return (
    <div id="articles">
      <h2>LATEST ARTICLES</h2>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="articles-list">
          {articles.slice(0, articlePagination).map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
          {articles.length > articlePagination && (
            <button onClick={() => setArticlePagination(articlePagination + 6)}>
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LatestArticles;
