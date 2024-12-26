import HomeBanner from '../../components/banners/home-banner/HomeBanner';
import ServicesCards from '../../components/cards/services-cards/ServicesCards';
import ServicesCards2 from '../../components/cards/services-cards/ServicesCards2';
import HomeSlider from '../../components/home-slider/HomeSlider';
import KeyBenefitFaq from '../../components/keybene-faq/KeyBenefitFaq';
import RequestCall from '../../components/request-call/RequestCall';

import './home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <HomeSlider />
      <ServicesCards />
      <HomeBanner />
      <ServicesCards2 />
      <KeyBenefitFaq />
      <RequestCall />
    </div>
  );
};

export default Home;
