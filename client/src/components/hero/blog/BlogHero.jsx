import './blogHero.scss';

const BlogHero = ({ title, desc, date, img }) => {
  return (
    <div
      className="blog-hero"
      style={{
        '--background-image': `url(${img})`,
      }}
    >
      <div className="blog-hero-content">
        <p className="blog-hero-subtitle">{desc}</p>
        <p className="blog-hero-maintitle">{title}</p>
        <p className="blog-hero-date">{date}</p>
      </div>
    </div>
  );
};

export default BlogHero;
