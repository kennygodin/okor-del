import { IoMdShare } from 'react-icons/io';
import ServicesHero from '../../components/hero/services/ServicesHero';
import './services.scss';
import { servicesData3 } from '../../data';
import AboutCard from '../../components/cards/about-cards/about-card/AboutCard';
import ServicesBanner from '../../components/banners/services-banner/ServicesBanner';

const Services = () => {
  const data = servicesData3;
  return (
    <div className="services">
      <ServicesHero
        title="The leading provider of client solutions."
        desc="With a passion built upon creative thinking"
      />
      <div className="services-breadcrumbs-wrapper">
        <div className="services-breadcrumbs">
          <span>Home</span>
          <span>Services</span>
        </div>
        <div className="services-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>

      <div className="services-card-items">
        {data.map((item) => (
          <AboutCard item={item} key={item.id} />
        ))}
      </div>
      <div className="services-line"></div>
      <ServicesBanner />
    </div>
  );
};

export default Services;
