import { Link } from 'react-router-dom';
import './testimonialHero.scss';
import { useEffect, useState } from 'react';

const TestimonialsHero = ({ title, desc, img }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="testimonial-hero"
      style={{
        '--background-image': `url(${img})`,
      }}
    >
      <div className="testimonial-hero-content">
        <p className="testimonial-hero-subtitle">{desc}</p>
        <p className="testimonial-hero-maintitle">{title}</p>
        <Link to="/contact-us">
          <button className={slideIn ? 'slide-in' : ''}>
            Work with us today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialsHero;
