import Image from "next/image";
import Link from "next/link";
import { calculateReadTime } from "../utils/calculateReadTime";
import { useEffect, useState } from "react";
import { fetchAuthor } from "../api/article-api";

const ArticleCard = ({
  title,
  subtitle = "",
  image_url,
  article_id,
  author_id,
  content,
  likes,
  authorName,
}) => {
  const [nameOfAuthor, setNameOfAuthor] = useState(authorName);

  useEffect(() => {
    if (!authorName) {
      const loadAuthorData = async () => {
        try {
          const authorData = await fetchAuthor(author_id);
          setNameOfAuthor(authorData.name);
        } catch (error) {
          console.error("Error in component while fetching author data:", error);
        }
      };
  
      loadAuthorData();
    }
  }, [author_id, authorName]);

  return (
    <div className="article-card">
      <Link className="article-link" href={`/${author_id}/${article_id}`}>
        <div className="article-image">
          <Image src={image_url} alt={title} width={380} height={300} />
        </div>

        <div className="article-content">
          <h4>
            {title}
            {subtitle && `: ${subtitle}`}
          </h4>
          <div className="article-details-container">
            {nameOfAuthor && <p>Published by {nameOfAuthor}</p>}
            <p>|</p>
            <p>{calculateReadTime(content)} min read</p>
            <p>|</p>
            <div className="article-likes">
              <Image
                src="/images/heart.svg"
                alt="likes"
                width={15}
                height={12}
              />
              <p>{likes}</p>
            </div>
          </div>
          <p className="truncate-span">{content}</p>
          <div className="button-container">
            <button className="primary-button">Read Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
