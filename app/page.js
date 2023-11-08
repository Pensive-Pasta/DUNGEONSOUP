import HomeHero from "./components/home/home-hero";
import Subscribe from "./components/home/subscribe";
import LatestArticles from "./components/home/latest-articles";
import About from "./components/about";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <LatestArticles />
      <About
        description="
        Welcome to DungeonSoup, the adventurer's cauldron brimming with tried-and-true tips and sly tricks for surviving your next foray into the fantastical and treacherous depths of the world's most formidable dungeons. Here, amidst ancient crypts and echoing halls, lies knowledge penned by veteran dungeon delvers and cunning lore-masters. Each article serves as a guidepost, illuminating the perilous paths with wit and wisdom, helping you distinguish friend from foe, treasure from trap. Join us by the firelight of our blog and brew the perfect plan to navigate the shadowy corridors of your next dungeon crawl. With our collective expertise, your party will parry the dark with ease and emerge victorious, laden with loot and legend.
             "
        imageUrl="/images/mainabout.png"
      />
      <Subscribe />
    </div>
  );
};

export default Home;
