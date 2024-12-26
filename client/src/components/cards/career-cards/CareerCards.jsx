import './careerCards.scss';
import { careerData } from '../../../data';
import CareerCard from './career-card/CareerCard';

const CareerCards = () => {
  const data = careerData;
  return (
    <div className="career-cards">
      {data.map((item) => (
        <CareerCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CareerCards;
