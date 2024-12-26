import { IoMdShare } from 'react-icons/io';
import AboutHero from '../../components/hero/about/AboutHero';
import './careerOpportunities.scss';
import CareerCards from '../../components/cards/career-cards/CareerCards';
import CareerVacancies from '../../components/cards/career-vacancies/CareerVacancies';
import CareerBanner from '../../components/banners/career-banner/CareerBanner';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const CareerOpportunities = () => {
  const heroRef = useRef(null);

  const scrollToTop = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="career-opportunites">
      <div ref={heroRef}>
        <AboutHero
          title="If you are striving to be the best we want you."
          desc="We offer a huge opportunity for growth and development"
        />
      </div>
      <div className="career-breadcrumbs-wrapper">
        <div className="career-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About Us</span>
          </Link>
          <span>Career Opportunites</span>
        </div>
        <div className="career-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="career-car-wrapper">
        <span>Choose a career with Okor Del</span>
        <h5>
          Embark on a fulfilling career journey with Okor Del, where innovation,
          growth, and collaboration drive everything we do. Join a team of
          passionate professionals dedicated to creating impactful solutions and
          empowering businesses to succeed globally.
        </h5>
      </div>
      <div className="career-line"></div>
      <CareerCards />
      <div className="career-line"></div>
      <div className="career-vacancies">
        <span>Job Opportunities</span>
        <h2>Current Vacancies</h2>
        <CareerVacancies />
      </div>
      <CareerBanner scrollToTop={scrollToTop} />
    </div>
  );
};

export default CareerOpportunities;
