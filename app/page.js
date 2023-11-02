import HomeHero from "./components/home/home-hero";
import Subscribe from "./components/home/subscribe";
import HomeAbout from "./components/home/home-about";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <Subscribe />
    </div>
  );
};

export default Home;
