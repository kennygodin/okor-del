import './careerVacancies.scss';
import CareerVacancy from './career-vacancy/CareerVacancy';
import { careerVacancyData } from '../../../data';

const CareerVacancies = () => {
  const data = careerVacancyData;
  return (
    <div className="career-vacancies-cards">
      {data.map((item) => (
        <CareerVacancy item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CareerVacancies;
