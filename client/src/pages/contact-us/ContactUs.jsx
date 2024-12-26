import { IoMdShare } from 'react-icons/io';
import ContactUsHero from '../../components/hero/contact-us/ContactUsHero';
import './contactUs.scss';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <ContactUsHero
        title="Hire us today and move your business forward."
        desc="We work with firms all across the world"
      />
      <div className="contact-us-breadcrumbs-wrapper">
        <div className="contact-us-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>Contact Us</span>
        </div>
        <div className="contact-us-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="contact-us-cap-wrapper">
        <span>Let’s hear from you</span>
        <h5>
          We would be delighted to answer any inquiry you might have about how
          we can help, just use the form below or choose one of the alternative
          methods of communication. We’re available from Monday to Friday to
          take your call.
        </h5>
      </div>
      <div className="contact-us-line"></div>

      <div className="contact-us-main">
        <form>
          <div className="item">
            <label>Name</label>
            <input placeholder="Enter your name" type="text" />
          </div>
          <div className="item">
            <label>Email</label>
            <input type="email" placeholder="e.g john@gmail.com" />
          </div>
          <div className="item">
            <label>Phone number</label>
            <input type="text" placeholder="If you want us to call you back" />
          </div>
          <div className="item">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Let’s know your topic of interest"
            />
          </div>
          <div className="item">
            <label>Your message</label>
            <textarea></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126650.5040254538!2d24.62739213720705!3d60.26487832170132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df2faa43d4be1%3A0xf0b890b45d33539f!2sEspoo%2C%20Finland!5e0!3m2!1sen!2sng!4v1734975212066!5m2!1sen!2sng"
            className="map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-us-line"></div>
      <div className="contact-us-banner">
        <div className="content">
          <h4>Let’s deliver the right solution for your business</h4>
          <Link to="/contact-us">
            <button>Book a consultation</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
