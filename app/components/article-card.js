import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({
  title,
  subtitle = "",
  imageUrl,
  article_id,
  author_id,
}) => {
  return (
    <div className="article-card">
      <Link href={`/${author_id}/${article_id}`}>
        <div className="article-image">
          <Image src={imageUrl} alt={title} width={300} height={200} />
        </div>

        <div className="article-content">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
