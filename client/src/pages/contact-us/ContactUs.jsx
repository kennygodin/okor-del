import { IoMdShare } from 'react-icons/io';
import ContactUsHero from '../../components/hero/contact-us/ContactUsHero';
import './contactUs.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const apiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_LOCAL_API
  : import.meta.env.VITE_REMOTE_API;

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);
    setIsSending(true);

    try {
      const response = await fetch(`${apiUrl}contact-us`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          phoneNumber,
          message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        setPhoneNumber('');
      } else {
        setError(true);
        console.error('Error:', await response.text());
      }
    } catch (error) {
      setError(true);
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

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
        <form onSubmit={submitForm}>
          <div className="item">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
              required
            />
          </div>
          <div className="item">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="e.g john@gmail.com"
              required
            />
          </div>
          <div className="item">
            <label>Phone number (optional)</label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="If you want us to call you back"
            />
          </div>
          <div className="item">
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Let’s know your topic of interest"
              required
            />
          </div>
          <div className="item">
            <label>Your message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          {isSending && <div className="sending">Sending...</div>}
          {success && <div className="sending">Message sent.</div>}
          {error && <div className="error">Uh um... Something went wrong.</div>}
          <button disabled={isSending} type="submit">
            {success ? 'Message sent' : 'Submit'}
          </button>
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
