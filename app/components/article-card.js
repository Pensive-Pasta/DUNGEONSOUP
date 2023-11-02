import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ title, subtitle, imageUrl, href }) => {
  return (
    <div className="article-card">
      <Link href={href}>
        <div className="article-image">
          <Image src={imageUrl} alt={title} width={300} height={200} />
        </div>

        <div className="article-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
