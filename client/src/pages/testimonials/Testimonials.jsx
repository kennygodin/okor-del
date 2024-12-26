import { Link } from 'react-router-dom';
import TestimonialsHero from '../../components/hero/testimonial/TestimonialHero';
import './testimonials.scss';
import { IoMdShare } from 'react-icons/io';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <TestimonialsHero
        title="We always define our Success by your results."
        desc="Developing and delivering winning strategies"
        img="https://images.pexels.com/photos/8101981/pexels-photo-8101981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="testimonials-breadcrumbs-wrapper">
        <div className="testimonials-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>Testimonials</span>
        </div>
        <div className="testimonials-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="testimonials-cap-wrapper">
        <span>Doing it differently, delivering results</span>
        <h5>
          At OKOR DEL, we break the mold with innovative strategies and
          personalized solutions that set your business apart. Our commitment to
          excellence ensures we don’t just meet expectations—we exceed them,
          delivering tangible results that drive growth and long-term success.
        </h5>
      </div>
      <div className="testimonials-line"></div>
    </div>
  );
};

export default Testimonials;
