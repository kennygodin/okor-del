import { Link } from 'react-router-dom';
import './servicesDropdown.scss';

const ServicesDropdown = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="services-dropdown"
    >
      <Link to="/services/logistics-services">
        <p>Logistics Services</p>
      </Link>
      <Link to="/services/branding-and-sales">
        <p>Branding and Sales</p>
      </Link>
      <Link to="/services/business-management">
        <p>Business Management</p>
      </Link>
      <Link to="/services/marketing">
        <p>Marketing</p>
      </Link>
      <Link to="/services/consultation">
        <p>Consultation</p>
      </Link>
    </div>
  );
};

export default ServicesDropdown;
