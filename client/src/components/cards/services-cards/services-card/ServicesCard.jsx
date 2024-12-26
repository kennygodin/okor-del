import { Link } from 'react-router-dom';
import './servicesCard.scss';
import { IoMdArrowDropright } from 'react-icons/io';

const ServicesCard = ({ item }) => {
  return (
    <div className="services-card">
      <p className="services-card-title">
        <Link to={item.link}>{item.title}</Link>
      </p>

      <img src={item.src} alt="okor-del-img" />
      <p className="services-card-desc">{item.description}</p>
      <Link to={item.link}>
        <div className="services-card-button">
          <p>Discover</p>
          <IoMdArrowDropright />
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
