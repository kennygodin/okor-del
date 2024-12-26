import { IoMdShare } from 'react-icons/io';
import ServicesHero from '../../components/hero/services/ServicesHero';
import './consultation.scss';
import ServicesSidebar from '../../components/services-sidebar/ServicesSidebar';
import ServicesBanner from '../../components/banners/services-banner/ServicesBanner';
import { Link } from 'react-router-dom';

const Consultation = () => {
  return (
    <div className="consultation">
      <ServicesHero
        title="Your dependable in achieving business excellence."
        desc="Expert insights for transformative business growth"
      />
      <div className="consultation-breadcrumbs-wrapper">
        <div className="consultation-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/services">
            <span>Services</span>
          </Link>
          <span>Consultation</span>
        </div>
        <div className="consultation-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="consultation-content">
        <ServicesSidebar />
        <div className="main-content">
          <h5>
            Delivering goods is not just about transportation; it’s about
            creating an experience that resonates with your customers. Our
            logistics solutions combine efficiency, reliability, and innovation
            to ensure seamless operations.
          </h5>
          <div className="main-item">
            <div className="texts">
              <h4>Performance Analysis and Optimization</h4>
              <p>
                Analyze and optimize performance by tracking KPIs, evaluating
                business metrics, and identifying opportunities to improve
                processes and boost productivity, while building customer
                support systems that deliver exceptional experiences and foster
                lasting loyalty.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/8424484/pexels-photo-8424484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-consultation-image"
              />
            </div>
          </div>

          <div className="main-item">
            <div className="texts">
              <h4>Recruitment Services</h4>
              <p>
                Source and select qualified candidates to meet organizational
                needs, create efficient onboarding processes for seamless
                integration, and implement strategies focused on employee
                retention and talent development.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/5989927/pexels-photo-5989927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-consultation-image"
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

export default Consultation;
