import './careerBanner.scss';

const CareerBanner = ({ scrollToTop }) => {
  return (
    <div className="career-banner">
      <div className="content">
        <h4>Join Our Team</h4>
        <div className="title">
          Use your insight and expertise in projects to reach beyond traditional
          boundaries.
        </div>
        <button onClick={scrollToTop}>Work with us today</button>
      </div>
    </div>
  );
};

export default CareerBanner;
