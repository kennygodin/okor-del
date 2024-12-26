import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h4>Meet Okor Del</h4>
          <p>
            <Link to="/about">About Us</Link>
          </p>
          <p>
            <Link to="/about/career-opportunities">Career Opportunities</Link>
          </p>
          <p>
            <Link to="/about/our-core-values">Our Core Values</Link>
          </p>
          <p>
            <Link to="/about/frequently-asked-questions">
              Frequently Asked Questions
            </Link>
          </p>
          <p>
            <Link to="/about/who-we-are">Who We Are</Link>
          </p>
        </div>
        <div className="footer-item">
          <h4>Services</h4>
          <p>
            <Link to="/services/logistics-services">Logistics Services</Link>
          </p>
          <p>
            <Link to="/services/branding-and-sales">Branding and Sales</Link>
          </p>
          <p>
            <Link to="/services/business-management">Business Management</Link>
          </p>
          <p>
            <Link to="/services/marketing">Marketing</Link>
          </p>
          <p>
            <Link to="/services/consultation">Consultation</Link>
          </p>
        </div>
        <div className="footer-blog-item">
          <h4>Recent Posts</h4>
          <p className="title">
            <Link to="/blog/1">
              Essential Advice on Choosing a Top Class Consultant
            </Link>
          </p>
          <p className="date">August 02, 2023</p>
          <hr />
          <p className="title">
            <Link to="/blog/1">
              5 Secrets to Coaching Your Employees to Greatness
            </Link>
          </p>
          <p className="date">December 25, 2024</p>
        </div>
        <div className="footer-connect-item">
          <h4>Newsletter</h4>
          <div className="input-arrow">
            <input type="email" placeholder="Your email address" />
            <MdKeyboardDoubleArrowRight className="icon" />
          </div>

          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to="/">
              <FaFacebookF className="icon" />
            </Link>
            <Link to="/">
              <FaXTwitter className="icon" />
            </Link>
            <Link to="/">
              <FaLinkedinIn className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
