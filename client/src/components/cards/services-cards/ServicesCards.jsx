import { servicesData1 } from '../../../data';
import ServicesCard from './services-card/ServicesCard';
import './servicesCards.scss';

const ServicesCards = () => {
  const data = servicesData1;
  return (
    <div className="services-cards">
      {data.map((item) => (
        <ServicesCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ServicesCards;
