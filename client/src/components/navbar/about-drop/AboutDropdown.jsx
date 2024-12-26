import './aboutDropdown.scss';

import { SlLocationPin } from 'react-icons/sl';
import { SlPhone } from 'react-icons/sl';
import { SlEnvolope } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const AboutDropdown = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="about-dropdown"
    >
      <div className="about-dropdown-container">
        <div className="about-drop-left">
          <h4>Meet Okor Del</h4>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/about/career-opportunities">
            <p>Career Opportunities</p>
          </Link>
          <Link to="/about/our-core-values">
            <p>Our Core Values</p>
          </Link>
          <Link to="/about/frequently-asked-questions">
            <p>Frequently Asked Questions</p>
          </Link>
          <Link to="/about/who-we-are">
            <p>Who We Are</p>
          </Link>
        </div>
        <div className="about-drop-center">
          <div className="drop-center-left">
            <Link to="/about/career-opportunities">
              <img
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-career-opportunities-img"
              />
            </Link>
            <h4>Career Opportunites</h4>
            <p>
              Work with leaders in your field to develop insight, experience and
              truly add value.
            </p>
          </div>
          <div className="drop-center-right">
            <Link to="/about/who-we-are">
              <img
                src="https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-who-we-are-img"
              />
            </Link>
            <h4>Who we are</h4>
            <p>
              Our expert team knows how to anticipate, collaborate, and
              innovate.
            </p>
          </div>
        </div>
        <div className="about-drop-right">
          <h4>Get in Touch</h4>
          <div className="drop-right-item">
            <SlLocationPin size={30} className="about-drop-icon" />
            <p>Espoo, Finland.</p>
          </div>
          <hr />
          <div className="drop-right-item">
            <SlPhone size={30} className="about-drop-icon" />
            <p>
              +358 403 698 459
              <br />
              Mon-Fri, 9am until 6pm
            </p>
          </div>
          <hr />
          <div className="drop-right-item">
            <SlEnvolope size={30} className="about-drop-icon" />
            <p>
              jaiyeolaeo@gmail.com
              <br />
              We always reply within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDropdown;
