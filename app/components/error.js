import Link from "next/link";

const Error = ({
  title = "Uh oh...",
  subtitle = "Somethign went wrong. Please try again in a bit.",
}) => (
  <div className="error-container">
    <h1 className="error-title">{title}</h1>
    <p>{subtitle}</p>
    <Link className="primary-button" href="/">
      Back to Home
    </Link>
  </div>
);

export default Error;
