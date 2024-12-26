import { Link } from 'react-router-dom';
import BlogHero from '../../components/hero/blog/BlogHero';
import './blog.scss';
import { IoMdShare } from 'react-icons/io';
import BlogCard from '../../components/cards/blog-card/BlogCard';
import BlogSidebar from '../../components/blog-sidebar/BlogSidebar';

const Blog = () => {
  return (
    <div className="blog">
      <BlogHero
        title="Okor Del Blog"
        desc="Discover insightful articles and expert advice"
        img="https://images.pexels.com/photos/5052851/pexels-photo-5052851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="blog-breadcrumbs-wrapper">
        <div className="blog-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>Blog</span>
        </div>
        <div className="blog-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-main">
          <BlogCard />
          <BlogCard />
        </div>
        <div className="blog-sidebar">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;
