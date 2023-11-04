import "./global.css";

const Hero = ({ title, subtitle}) => {
  return (
    <section
      className="hero"
    >
      <div className="content">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </section>
  );
};

export default Hero;
