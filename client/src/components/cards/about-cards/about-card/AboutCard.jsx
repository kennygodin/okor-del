import { Link } from 'react-router-dom';
import './aboutCard.scss';

const AboutCard = ({ item }) => {
  return (
    <div className="about-card">
      <img src={item.src} alt="okor-del-img" />
      <Link to={item.link}>
        <p className="about-card-title">{item.title}</p>
      </Link>
      <p className="about-card-desc">{item.description}</p>
    </div>
  );
};

export default AboutCard;
