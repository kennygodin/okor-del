import './contactUsHero.scss';

const ContactUsHero = ({ title, desc }) => {
  return (
    <div className="contact-us-hero">
      <div className="contact-us-hero-content">
        <p className="contact-us-hero-subtitle">{desc}</p>
        <p className="contact-us-hero-maintitle">{title}</p>
      </div>
    </div>
  );
};

export default ContactUsHero;
