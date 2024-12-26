import { Link } from 'react-router-dom';
import './coreValuesBanner.scss';

const CoreValuesBanner = () => {
  return (
    <div className="core-values-banner">
      <div className="content">
        <h4>Let’s deliver the right solution for your business</h4>
        <Link to="/contact-us">
          <button>Book a consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default CoreValuesBanner;
