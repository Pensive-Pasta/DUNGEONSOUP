import Image from "next/image";
import Link from "next/link";
import { calculateReadTime } from "../utils/calculateReadTime";

const ArticleCard = (props) => {
  const {
    title,
    subtitle = "",
    image_url,
    article_id,
    author_id,
    content,
    likes,
    authorName,
  } = props;
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
            <p>Published by {authorName}</p>
            <p>|</p>
            <p>{calculateReadTime(content)} min read</p>
            <p>|</p>
            <p>{likes}</p>
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
