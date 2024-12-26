import './careerCard.scss';

const CareerCard = ({ item }) => {
  return (
    <div className="career-card">
      <img src={item.src} alt="okor-del-img" />
      <p className="career-card-title">{item.title}</p>
      <p className="career-card-desc">{item.description}</p>
    </div>
  );
};

export default CareerCard;
