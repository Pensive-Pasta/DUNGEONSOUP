import Image from "next/image";

const About = ({ description, imageUrl }) => {
  return (
    <section className="about-container" id="about">
      <Image src={imageUrl} alt="About Image" width={500} height={500} />
      <div className="about-content">
        <h3>ABOUT</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default About;
