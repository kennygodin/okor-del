import './careerVacancy.scss';

const CareerVacancy = ({ item }) => {
  return (
    <div className="career-vacancy-card">
      <p className="career-vacancy-card-role" style={{ color: item.color }}>
        {item.role}
      </p>
      <p className="career-vacancy-card-desc">{item.description}</p>
      <p className="career-vacancy-card-date">
        Closing date: {item.closingDate}
      </p>
    </div>
  );
};

export default CareerVacancy;
