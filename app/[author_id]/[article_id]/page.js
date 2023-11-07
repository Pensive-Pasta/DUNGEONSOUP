"use client";

import { useState, useEffect } from "react";
import ArticleHero from "../../components/article/article-hero";
import ArticleDetails from "../../components/article/article-details";
import Link from "next/link";
import Loading from "@/app/components/loading";
import "../../components/article/styles.css";
import Image from "next/image";
import Error from "@/app/components/error";

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

  const { title, subtitle, likes, content, image_url } = article;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : !article ? (
        <Error title="Oops!" subtitle="That article doesn't exist" />
      ) : (
        <>
          <ArticleHero title={title} subtitle={subtitle} />
          <ArticleDetails
            authorName={author.name}
            likes={likes}
            articleId={article_id}
            content={content}
          />
          <p className="article-content">{content}</p>
          <Link href={`/${author_id}`} className="author-link">
            More from {author.name}
          </Link>
          <div className="article-image-container">
            <Image
              src={image_url}
              alt="Article image"
              width={500}
              height={500}
              layout="responsive"
              className="article-image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
