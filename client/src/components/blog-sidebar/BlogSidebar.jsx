import { Link } from 'react-router-dom';
import './blogSidebar.scss';
import { IoIosSearch } from 'react-icons/io';

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <h3>Recent Posts</h3>

      <div className="sidebar-post">
        <Link to="/blog/1">
          <p>Essential Advice on Choosing a Top Class Consultant</p>
        </Link>
        <span>September 25, 2018</span>
      </div>
      <div className="sidebar-line"></div>
      <div className="sidebar-post">
        <Link to="/blog/1">
          <p>5 Secrets to Coaching Your Employees to Greatness</p>
        </Link>
        <span>September 25, 2019</span>
      </div>
      <div className="sidebar-line"></div>
      <div className="sidebar-post last">
        <Link to="/">
          <p>Why Would a Successful Entrepreneur Hire a Coach?</p>
        </Link>
        <span>September 25, 2020</span>
      </div>

      <h3>Categories</h3>

      <p className="sidebar-cats">
        <Link>Advice</Link>
      </p>
      <p className="sidebar-cats">
        <Link>Consulting</Link>
      </p>
      <p className="sidebar-cats last">
        <Link>Teamwork</Link>
      </p>

      <h3>Search</h3>
      <div className="sidebar-search">
        <input type="email" placeholder="Search" />
        <IoIosSearch className="icon" />
      </div>

      <div className="okor-del-banner">
        <img src="/images/okor-del-banner.jpg" alt="okor-del-img" />
      </div>
    </div>
  );
};

export default BlogSidebar;
