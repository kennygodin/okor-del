import { servicesData2 } from '../../../data';
import ServicesCard from './services-card/ServicesCard';
import './servicesCards2.scss';

const ServicesCards2 = () => {
  const data = servicesData2;
  return (
    <div className="services-cards-two">
      {data.map((item) => (
        <ServicesCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ServicesCards2;
