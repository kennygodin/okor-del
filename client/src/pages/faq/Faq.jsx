import { IoMdShare } from 'react-icons/io';
import AboutHero from '../../components/hero/about/AboutHero';
import './faq.scss';
import FaqFull from '../../components/faq/FaqFull';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className="faq">
      <AboutHero
        title="Our Most Frequently asked Questions"
        desc="Have queries? We'd love to help."
      />
      <div className="faq-breadcrumbs-wrapper">
        <div className="faq-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About Us</span>
          </Link>
          <span>Frequently asked Questions</span>
        </div>
        <div className="faq-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="faq-wrapper">
        <span>Common Questions Answered</span>
        <h5>
          We prioritize clarity and transparency by addressing your most
          pressing questions. Whether it’s about our tailored services, global
          reach, or how we ensure exceptional results, we’re here to provide the
          answers you need to move forward with confidence.
        </h5>
      </div>

      <div className="faq-query">
        <span>For any queries</span>
        <h2>Get in touch</h2>
        <div className="faq-users">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="faq-query-img"
            />
            <p>Jennifer Williams</p>
            <p>jennifer@okordel.com</p>
          </div>
          {/* <div className="user">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="faq-query-img"
            />
            <p>Meena Singh</p>
            <p>meena@@okordel.com</p>
          </div>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="faq-query-img"
            />
            <p>Signe Bergman</p>
            <p>signe@okordel.com</p>
          </div> */}
        </div>
      </div>
      <FaqFull />
    </div>
  );
};

export default Faq;
