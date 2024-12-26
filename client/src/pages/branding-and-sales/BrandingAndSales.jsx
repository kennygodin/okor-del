import { IoMdShare } from 'react-icons/io';
import ServicesHero from '../../components/hero/services/ServicesHero';
import './brandingAndSales.scss';
import ServicesSidebar from '../../components/services-sidebar/ServicesSidebar';
import ServicesBanner from '../../components/banners/services-banner/ServicesBanner';
import { Link } from 'react-router-dom';

const BrandingAndSales = () => {
  return (
    <div className="branding-and-sales">
      <ServicesHero
        title="Unleash the full potential of your brand identity today."
        desc="Empowering brands with bold creativity and vision"
      />
      <div className="branding-and-sales-breadcrumbs-wrapper">
        <div className="branding-and-sales-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/services">
            <span>Services</span>
          </Link>
          <span>Branding and Sales</span>
        </div>
        <div className="branding-and-sales-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="branding-and-sales-content">
        <ServicesSidebar />
        <div className="main-content">
          <h5>
            Your brand is your story, and we make sure it’s told the right way.
            Our branding and marketing solutions are crafted to captivate your
            audience, boost engagement, and drive sales.
          </h5>
          <div className="main-item">
            <div className="texts">
              <h4>Brand Development</h4>
              <p>
                Craft a strong brand strategy to define your identity and foster
                meaningful connections with your audience, complemented by a
                captivating visual identity featuring stunning logos, themes,
                and designs that embody your brand’s essence, while delivering
                compelling and consistent narratives to tell your story
                effectively through brand messaging.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-branding-image"
              />
            </div>
          </div>

          <div className="main-item">
            <div className="texts">
              <h4>Sales and Marketing Solutions</h4>
              <p>
                Drive customer engagement and conversions through strategic
                inbound and outbound sales, while leveraging digital marketing
                tools such as social media management to build a loyal
                community, SEO and SEM to enhance visibility and attract quality
                leads, email marketing for personalized campaigns that inspire
                action, and pay-per-click advertising to optimize ROI with
                targeted ads.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="okor-branding-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="services-line"></div>
      <ServicesBanner />
    </div>
  );
};

export default BrandingAndSales;
