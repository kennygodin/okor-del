import './aboutBanner.scss';

const AboutBanner = ({ scrollToTop }) => {
  return (
    <div className="about-banner">
      <div className="content">
        <h4>Request a call back</h4>
        <div className="title">
          We deliver innovative solutions that simplify operations, amplify your
          brand.
        </div>
        <button onClick={scrollToTop}>Work with us today</button>
      </div>
    </div>
  );
};

export default AboutBanner;
