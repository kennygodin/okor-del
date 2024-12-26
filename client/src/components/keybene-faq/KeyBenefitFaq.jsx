import Faq from './faq/Faq';
import KeyBenefit from './key-benefit/KeyBenefit';
import './keyBenefitFaq.scss';

const KeyBenefitFaq = () => {
  return (
    <div className="keybene-faq">
      <KeyBenefit />
      <Faq />
    </div>
  );
};

export default KeyBenefitFaq;
