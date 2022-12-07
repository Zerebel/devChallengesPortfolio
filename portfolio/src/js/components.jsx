export const Heading = ({ text, className }) => (
  <h1 className={className}>{text}</h1>
);
export const Image = ({ image, alt, className }) => (
  <img src={image} alt={alt} className={className} />
);
export const Paragraph = ({ text, className }) => (
  <p className={className}>{text}</p>
);

export const Link = ({ href, text }) => <a href={href}>{text}</a>;
