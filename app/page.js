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
            Lorem ipsum dolor sit amet consectetur. Faucibus egestas risus viverra eget id nunc. 
            Vestibulum augue velit adipiscing tellus justo tortor. Scelerisque vitae at eget aliquet neque nulla sit.
             In feugiat sed purus nunc condimentum lectus curabitur sed odio. Lorem ipsum dolor sit amet consectetur.
             Faucibus egestas risus viverra eget id nunc. Vestibulum augue velit adipiscing tellus justo tortor. 
             Scelerisque vitae at eget aliquet neque nulla sit. In feugiat sed purus nunc condimentum lectus curabitur sed odio.
             "
        imageUrl="/images/mainabout.png"
      />
      <Subscribe />
    </div>
  );
};

export default Home;
