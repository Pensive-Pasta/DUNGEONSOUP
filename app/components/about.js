import Image from "next/image";

const About = ({ description, imageUrl, title = "ABOUT" }) => {
  return (
    <section className="about-container" id="about">
      <Image
        src={imageUrl}
        alt="About Image"
        width={500}
        height={500}
        layout="responsive"
        className="about-image"
      />
      <div className="about-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default About;
