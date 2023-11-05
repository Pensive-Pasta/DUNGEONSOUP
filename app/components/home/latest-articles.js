import ArticleCard from "../article-card";

const LatestArticles = () => {
  const articles = [
    {
      title: "The Art of Negotiation: Convincing That Troll to Let You Pass",
      snippet: "Learn the secrets of negotiating with mythical creatures...",
      imageUrl: "/path/to/image1.jpg",
      href: "/",
    },
  ];

  return (
    <div id="articles">
      <h2>LATEST ARTICLES</h2>
      <div className="articles-list">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
