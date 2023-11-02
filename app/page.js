import HomeHero from "./components/home/home-hero";
import Subscribe from "./components/home/subscribe";
import HomeAbout from "./components/home/home-about";
import LatestArticles from "./components/home/latest-articles";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <LatestArticles />
      <HomeAbout />
      <Subscribe />
    </div>
  );
};

export default Home;
