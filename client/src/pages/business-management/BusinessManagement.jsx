import { IoMdShare } from 'react-icons/io';
import ServicesHero from '../../components/hero/services/ServicesHero';
import './businessManagement.scss';
import ServicesSidebar from '../../components/services-sidebar/ServicesSidebar';
import ServicesBanner from '../../components/banners/services-banner/ServicesBanner';
import { Link } from 'react-router-dom';

const BusinessManagement = () => {
  return (
    <div className="business-management">
      <ServicesHero
        title="The cornerstone of efficient business operations."
        desc="Driving success through strategic and focused management"
      />
      <div className="business-management-breadcrumbs-wrapper">
        <div className="business-management-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/services">
            <span>Services</span>
          </Link>
          <span>Busines Management</span>
        </div>
        <div className="business-management-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="business-management-content">
        <ServicesSidebar />
        <div className="main-content">
          <h5>
            We take a comprehensive approach to business management, helping you
            streamline operations, solve challenges, and achieve strategic
            success.
          </h5>
          <div className="main-item">
            <div className="texts">
              <h4>Managerial and Administrative Services</h4>
              <p>
                Ensure project success by planning, executing, and delivering on
                time and within scope, proactively identifying and mitigating
                risks, and maintaining high standards through quality assurance
                that consistently meets and exceeds expectations.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/6804075/pexels-photo-6804075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-business-management-image"
              />
            </div>
          </div>

          <div className="main-item">
            <div className="texts">
              <h4>Business Strategy Development</h4>
              <p>
                Develop actionable plans aligned with your long-term vision,
                leverage market and competitive analysis to position your
                business effectively, and conduct SWOT analyses to capitalize on
                strengths and tackle challenges strategically.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/6285124/pexels-photo-6285124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-business-management-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="services-line"></div>
      <ServicesBanner />
    </div>
  );
};

export default BusinessManagement;
