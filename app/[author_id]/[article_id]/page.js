"use client";

import { useState, useEffect } from "react";
import ArticleHero from "../../components/article/article-hero";
import ArticleDetails from "../../components/article/article-details";
import Link from "next/link";
import Loading from "@/app/components/loading";
import "../../components/article/styles.css";
import Image from "next/image";
import Error from "@/app/components/error";
import { fetchAuthor, fetchArticle } from "@/app/api/article-api";

const SingleArticle = ({ params: { article_id, author_id } }) => {
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleData = await fetchArticle(article_id);
        setArticle(articleData);

        const authorData = await fetchAuthor(author_id);
        setAuthor(authorData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [article_id, author_id]);

  if (loading) return <Loading />;
  if (!article || !author) return <Error title="Oops!" subtitle="That article doesn't exist" />;

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
      <p className="article-inner-content">{content}</p>
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
