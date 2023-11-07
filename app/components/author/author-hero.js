import "../author/styles.css";

const AuthorHero = ({ name }) => (
  <div className="author-hero">
    <h1 className="author-name">{name}</h1>
  </div>
);

export default AuthorHero;
