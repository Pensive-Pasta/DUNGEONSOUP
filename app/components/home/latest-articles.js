"use client";
import { useEffect, useState } from "react";
import ArticleCard from "../article-card";
import Loading from "../loading";
import { fetchLatestArticles } from "@/app/api/article-api";

const LatestArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articlePagination, setArticlePagination] = useState(3);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchLatestArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error in component while fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
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
