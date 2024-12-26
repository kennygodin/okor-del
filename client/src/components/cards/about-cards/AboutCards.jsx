import { aboutData } from '../../../data';
import AboutCard from './about-card/AboutCard';
import './aboutCards.scss';

const AboutCards = () => {
  const data = aboutData;
  return (
    <div className="about-cards">
      {data.map((item) => (
        <AboutCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AboutCards;
