"use client";
import { useEffect, useState } from "react";
import ArticleCard from "../article-card";
import Loading from "../loading";

const LatestArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articlePagination, setArticlePagination] = useState(3);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dungeonsoup-backend.onrender.com/articles")
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
      <h3>LATEST ARTICLES</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="articles-list">
          {articles.slice(0, articlePagination).map((article) => (
            <ArticleCard key={article.article_id} {...article} />
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
