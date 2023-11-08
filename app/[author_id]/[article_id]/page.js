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
  const [articleLoading, setArticleLoading] = useState(true);
  const [authorLoading, setAuthorLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dungeonsoup-backend.onrender.com/articles/${article_id}`)
      .then((response) => response.text())
      .then((data) => {
        setArticleLoading(false);
        setArticle(JSON.parse(data)[0]);
      })
      .catch((error) => console.error("Error fetching article data:", error));

    fetch(`https://dungeonsoup-backend.onrender.com/author/${author_id}`)
      .then((response) => response.text())
      .then((data) => {
        setAuthorLoading(false);
        setAuthor(JSON.parse(data));
      })
      .catch((error) => console.error("Error fetching author data:", error));
  }, [article_id, author_id]);

  if (articleLoading || authorLoading) return <Loading />;

  if (!article || !author)
    return <Error title="Oops!" subtitle="That article doesn't exist" />;

  const { title, subtitle, likes, content, image_url } = article;

  return (
    <div>
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
    </div>
  );
};

export default SingleArticle;
