import "./styles.css";

const ArticleHero = ({ title, subtitle }) => (
  <div className="article-hero">
    <h1 className="article-title">{title}</h1>
    <h2 className="article-subtitle">{subtitle}</h2>
  </div>
);

export default ArticleHero;
  