import { IoMdShare } from 'react-icons/io';
import AboutHero from '../../components/hero/about/AboutHero';
import './whoWeAre.scss';
import WhoWeAreBanner from '../../components/banners/who-we-are-banner/WhoWeAreBanner';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const WhoWeAre = () => {
  const heroRef = useRef(null);

  const scrollToTop = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="who-we-are">
      <div ref={heroRef}>
        <AboutHero
          title="We have the capabilities and the experience."
          desc="Helping you take decisive action and achieve results"
        />
      </div>
      <div className="who-breadcrumbs-wrapper">
        <div className="who-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About Us</span>
          </Link>
          <span>Who We Are</span>
        </div>
        <div className="who-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="who-car-wrapper">
        <span>How we work</span>
        <h5>
          Through open communication and expert execution, we ensure every
          project is delivered efficiently and effectively, driving measurable
          success for your business.
        </h5>
      </div>
      <WhoWeAreBanner />
      <div className="who-container">
        <div className="left">
          <h3>How we Work</h3>
          <p>
            At Okor Del, our approach is rooted in collaboration, innovation,
            and tailored solutions. We begin by understanding your unique needs
            and goals, conducting in-depth analyses to identify opportunities
            for growth and improvement. Our team then crafts customized
            strategies that align with your vision, leveraging cutting-edge
            technologies and proven methodologies to drive results. By
            maintaining open communication and ensuring transparency at every
            stage, we build lasting partnerships that empower businesses to
            thrive.
          </p>
        </div>
        <div className="right">
          <h3>Leadership</h3>
          <p>
            Founded by Emmanuel Jaiyeola in 2024, OKOR DEL is guided by a
            leadership team committed to excellence and innovation. With a clear
            vision to empower businesses worldwide, our leadership brings a
            wealth of expertise and strategic foresight to every project. By
            fostering a culture of integrity, collaboration, and
            forward-thinking, our leaders ensure that Okor Del remains a trusted
            partner in business transformation, delivering exceptional solutions
            that drive sustainable growth.
          </p>
        </div>
      </div>
      <div className="who-banner-one">
        <div className="content">
          <h4>Time to be a success</h4>
          <div className="title">
            We offer experience and local knowledge to help you focus on the big
            picture.
          </div>
          <button onClick={scrollToTop}>Work with us today</button>
        </div>
      </div>
      <div className="who-banner-two">
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

export default WhoWeAre;
