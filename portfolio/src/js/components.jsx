export const Heading = ({ text, classname }) => (
  <h1 className={classname}>{text}</h1>
);
export const Image = ({ image, alt, className }) => (
  <img src={image} alt={alt} className={className} />
);
export const Paragraph = ({ text, className }) => (
  <p className={className}>{text}</p>
);
