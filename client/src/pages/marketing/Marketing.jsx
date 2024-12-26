import { IoMdShare } from 'react-icons/io';
import ServicesHero from '../../components/hero/services/ServicesHero';
import './marketing.scss';
import ServicesSidebar from '../../components/services-sidebar/ServicesSidebar';
import ServicesBanner from '../../components/banners/services-banner/ServicesBanner';
import { Link } from 'react-router-dom';

const Marketing = () => {
  return (
    <div className="marketing">
      <ServicesHero
        title="Turning ideas into impactful marketing solutions."
        desc="Amplify your audience reach with innovative strategies"
      />
      <div className="marketing-breadcrumbs-wrapper">
        <div className="marketing-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/services">
            <span>Services</span>
          </Link>
          <span>Marketing Services</span>
        </div>
        <div className="marketing-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="marketing-content">
        <ServicesSidebar />
        <div className="main-content">
          <h5>
            Delivering goods is not just about transportation; it’s about
            creating an experience that resonates with your customers. Our
            logistics solutions combine efficiency, reliability, and innovation
            to ensure seamless operations.
          </h5>
          {/* <div className="main-item">
            <div className="texts">
              <h4>Delivery of Goods and Products</h4>
              <p>
                We guarantee timely, safe, and hassle-free transportation of
                your goods, providing peace of mind for your business and your
                customers.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/7363128/pexels-photo-7363128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-logistics-image"
              />
            </div>
          </div> */}

          <div className="main-item">
            <div className="texts">
              <h4>Sales and Marketing</h4>
              <p>
                Every delivery is an opportunity to elevate your brand. We embed
                marketing strategies into logistics processes, ensuring your
                services leave a lasting impression.
              </p>
            </div>
            <div className="contentImg">
              <img
                src="https://images.pexels.com/photos/5025633/pexels-photo-5025633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="okor-logistics-image"
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

export default Marketing;
