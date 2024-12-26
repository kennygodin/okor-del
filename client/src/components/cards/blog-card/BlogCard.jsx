import './blogCard.scss';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="blog-item">
      <Link to="/blog/1">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/6929153/pexels-photo-6929153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="okor-del-consultant-img"
          />
        </div>
      </Link>
      <div className="blog-details">
        <div className="blog-info">
          <span>September 25, 2018</span>
          <div className="line"></div>
          <span>John Viebeck </span>
          <div className="line"></div>
          <span>No Comments</span>
        </div>
        <div className="blog-title">
          <Link to="/blog/1">
            Essential Advice on Choosing a Top Class Consultant
          </Link>
        </div>
        <div className="blog-desc">
          Too many small-business people aren’t willing to ask for help when
          they need it. Entrepreneurs by nature tend to be independent
          risk-takers. They started the company and it is their baby. Obviously,
          they should know how to raise it.
        </div>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default BlogCard;
