import { Link } from 'react-router-dom';
import AboutHero from '../../components/hero/about/AboutHero';
import { IoMdShare } from 'react-icons/io';
import './about.scss';
import AboutCards from '../../components/cards/about-cards/AboutCards';
import AboutBanner from '../../components/banners/about-banner/AboutBanner';
import { useRef } from 'react';

const About = () => {
  const heroRef = useRef(null);

  const scrollToTop = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about">
      <div ref={heroRef}>
        <AboutHero
          title="Empowering businesses, with innovative strategies."
          desc="Always Aiming Higher with Akor Del"
        />
      </div>
      <div className="about-breadcrumbs-wrapper">
        <div className="about-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>About Us</span>
        </div>
        <div className="about-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="about-cap-wrapper">
        <span>Capabilities and experience</span>
        <h5>
          We bring a wealth of expertise and innovation to every project. Our
          team’s capabilities span logistics, branding, marketing, business
          management, and consultation, ensuring your business achieves
          excellence and sustainable growth.
        </h5>
      </div>
      <div className="about-line"></div>
      <AboutCards />
      <AboutBanner scrollToTop={scrollToTop} />
    </div>
  );
};

export default About;
