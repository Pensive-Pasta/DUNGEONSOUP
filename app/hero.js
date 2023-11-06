import Image from "next/image";

const Hero = ({ title, subtitle, imageUrl}) => {
  return (
    <section
      className="hero"
    >
      <div className="content">
        <h1>{title}</h1>
        <div className="subContainer">
        <Image src={imageUrl} alt="Hero Image" width={500} height={500} />
        {subtitle && <h2>{subtitle}</h2>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
