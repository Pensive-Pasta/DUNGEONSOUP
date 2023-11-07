"use client";

import { useState, useEffect } from "react";
import ArticleHero from "../../components/article/article-hero";
import ArticleDetails from "../../components/article/article-details";
import Link from "next/link";
import About from "@/app/components/about";
import Loading from "@/app/components/loading";

const SingleArticle = ({ params: { article_id, author_id } }) => {
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${article_id}`)
      .then((response) => response.text())
      .then((data) => setArticle(JSON.parse(data)[0]))
      .catch((error) => console.error("Error fetching article data:", error));

    fetch(`http://localhost:3001/author/${author_id}`)
      .then((response) => response.text())
      .then((data) => setAuthor(JSON.parse(data)))
      .catch((error) => console.error("Error fetching author data:", error));
    setLoading(false);
  }, [article_id, author_id]);

  if (!article || !author) return null;

  const {
    title,
    subtitle,
    likes,
    content,
    image_url
  } = article;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ArticleHero title={title} subtitle={subtitle} />
          <ArticleDetails
            authorName={author.name}
            likes={likes}
            articleId={article_id}
            content={content}
          />
          <About description={content} imageUrl={image_url} />
          <Link href={`/${author_id}`}>More from {author.name}</Link>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
