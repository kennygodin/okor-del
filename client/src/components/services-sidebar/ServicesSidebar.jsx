import { Link, useLocation } from 'react-router-dom';
import './servicesSidebar.scss';

const ServicesSidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="services-sidebar">
      <Link to="/services/logistics-services">
        <p
          className={
            pathname.includes('logistics-services')
              ? 'sidebar-item active'
              : 'sidebar-item'
          }
        >
          Logistics Services
        </p>
      </Link>
      <Link to="/services/branding-and-sales">
        <p
          className={
            pathname.includes('branding-and-sales')
              ? 'sidebar-item active'
              : 'sidebar-item'
          }
        >
          Branding and Sales
        </p>
      </Link>
      <Link to="/services/business-management">
        <p
          className={
            pathname.includes('business-management')
              ? 'sidebar-item active'
              : 'sidebar-item'
          }
        >
          Business Management
        </p>
      </Link>

      <Link to="/services/marketing">
        <p
          className={
            pathname.includes('marketing')
              ? 'sidebar-item active'
              : 'sidebar-item'
          }
        >
          Marketing Services
        </p>
      </Link>
      <Link to="/services/consultation">
        <p
          className={
            pathname.includes('consultation')
              ? 'sidebar-item active'
              : 'sidebar-item'
          }
        >
          Consultation
        </p>
      </Link>
    </div>
  );
};

export default ServicesSidebar;
