import About from "../components/about";
import ArticleCard from "../components/article-card";
import AuthorHero from "../components/author/author-hero";

const author = ({ params: { author_id } }) => {
  // fetch author by author_id in params
  // fetch articles by author_id
  const author = {
    id: 1,
    name: "Clam Chowder",
    about: "About about about",
    banner_image: "",
    profile_image: "",
  };
  const articles = [
    {
      title: "The Art of Negotiation: Convincing That Troll to Let You Pass",
      content: "Learn the secrets of negotiating with mythical creatures!",
      imageUrl: "/path/to/image1.jpg",
      href: "/",
    },
  ];

  return (
    <div>
      <AuthorHero img={author.banner_image} name={author.name} />
      <h2>Articles</h2>
      {articles.map(({ title, imageUrl, href }) => (
        <ArticleCard title={title} imageUrl={imageUrl} href={href} />
      ))}
      <About description={author.about} imageUrl={author.profile_image} />
    </div>
  );
};

export default author;
