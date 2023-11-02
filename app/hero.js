import "./global.css";

const Hero = ({ title, subtitle, imageUrl }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </section>
  );
};

export default Hero;
