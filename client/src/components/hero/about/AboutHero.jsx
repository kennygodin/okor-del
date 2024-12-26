import { useEffect, useState } from 'react';
import './aboutHero.scss';
import { Link } from 'react-router-dom';

const AboutHero = ({ title, desc }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-hero">
      <div className="about-hero-content">
        <p className="about-hero-subtitle">{desc}</p>
        <p className="about-hero-maintitle">{title}</p>
        <Link to="/contact-us">
          <button className={slideIn ? 'slide-in' : ''}>
            Work with us today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutHero;
