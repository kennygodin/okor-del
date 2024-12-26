import { IoMdShare } from 'react-icons/io';
import AboutHero from '../../components/hero/about/AboutHero';
import './ourCoreValues.scss';
import CoreValuesBanner from '../../components/banners/core-values-banner/CoreValuesBanner';
import { Link } from 'react-router-dom';

const OurCoreValues = () => {
  return (
    <div className="our-core-values">
      <AboutHero
        title="Bring individuals, cultures and ideas together."
        desc="Always aiming higher with Okor Del"
      />
      <div className="values-breadcrumbs-wrapper">
        <div className="values-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About Us</span>
          </Link>
          <span>Our Core Values</span>
        </div>
        <div className="values-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="core-values-wrapper">
        <span>Company culture</span>
        <h5>
          At Okor Del, our culture thrives on innovation, collaboration, and
          integrity. We believe in fostering a supportive environment where
          every team member feels valued and empowered to contribute to
          meaningful solutions.
        </h5>
      </div>
      <div className="core-values-line"></div>
      <div className="core-values">
        <div className="values-item">
          <img
            src="https://images.pexels.com/photos/8067744/pexels-photo-8067744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="okor-core-values-img"
          />
          <div className="texts">
            <h3>Integrity</h3>
            <p>
              We believe in operating with honesty, transparency, and fairness
              in every interaction. Whether working with clients, partners, or
              our team, we uphold the highest ethical standards to build trust
              and long-lasting relationships.
            </p>
            <p>
              Integrity ensures that every decision we make is in the best
              interest of our clients, reflecting our unwavering commitment to
              doing what is right.
            </p>
          </div>
        </div>
        <div className="core-values-line"></div>
        <div className="values-item">
          <img
            src="https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="okor-core-values-img"
          />
          <div className="texts">
            <h3>Excellence</h3>
            <p>
              Excellence is not just a goal; it is a mindset that drives us to
              consistently deliver services that exceed expectations. We are
              dedicated to going above and beyond to provide top-tier solutions
              tailored to your unique needs.
            </p>
            <p>
              Through meticulous attention to detail, continuous improvement,
              and a passion for delivering outstanding results, we ensure that
              excellence defines every aspect of our work.
            </p>
          </div>
        </div>
        <div className="core-values-line"></div>
        <div className="values-item">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="okor-core-values-img"
          />
          <div className="texts">
            <h3>Collaboration</h3>
            <p>
              We believe that success is a shared journey. Collaboration is the
              cornerstone of our approach, as we work closely with you to
              understand your goals and challenges.
            </p>
            <p>
              By fostering open communication and building strong partnerships,
              we create solutions that align with your vision. Together, we
              achieve remarkable results that reflect your success as our
              ultimate achievement.
            </p>
          </div>
        </div>
      </div>
      <div className="core-values-line"></div>
      <CoreValuesBanner />
    </div>
  );
};

export default OurCoreValues;
