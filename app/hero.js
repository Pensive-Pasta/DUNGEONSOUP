const Hero = ({ title, subtitle, imageUrl }) => {
    return (
      <section className="hero" style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div className="content">
          <h1>{title}</h1>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
      </section>
    );
  };
  
  export default Hero;
  