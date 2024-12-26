import { useEffect, useState } from 'react';
import './servicesHero.scss';
import { Link } from 'react-router-dom';

const ServicesHero = ({ title, desc }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="services-hero">
      <div className="services-hero-content">
        <p className="services-hero-subtitle">{desc}</p>
        <p className="services-hero-maintitle">{title}</p>
        <Link to="/contact-us">
          <button className={slideIn ? 'slide-in' : ''}>
            Work with us today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesHero;
