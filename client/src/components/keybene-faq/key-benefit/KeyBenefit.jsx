import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './keyBenefit.scss';

const KeyBenefit = () => {
  return (
    <div className="key-benefit">
      <h3>Key Benefits</h3>
      <p>
        Partnering with Okor Del means gaining access to a team of dedicated
        professionals committed to your business success. We bring a wealth of
        expertise, innovative strategies, and tailored solutions to every
        project, ensuring your goals are met efficiently and effectively.
      </p>

      <div className="benefits">
        <div className="item">
          <IoIosCheckmarkCircleOutline className="icon" />
          <p>Every service is customized to meet your unique business needs.</p>
        </div>
        <div className="item">
          <IoIosCheckmarkCircleOutline className="icon" />
          <p>
            Access to experienced professionals with deep industry knowledge.
          </p>
        </div>
        <div className="item">
          <IoIosCheckmarkCircleOutline className="icon" />
          <p>
            Services designed to cater to businesses worldwide, regardless of
            location.
          </p>
        </div>
        <div className="item">
          <IoIosCheckmarkCircleOutline className="icon" />
          <p>Streamlined operations to save you time and resources.</p>
        </div>
        <div className="item">
          <IoIosCheckmarkCircleOutline className="icon" />
          <p>
            Use of cutting-edge technologies and ideas to keep you ahead of the
            competition.
          </p>
        </div>
        <div className="item">
          <IoIosCheckmarkCircleOutline className="icon" />
          <p>A dedicated team focused on your success at every step.</p>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefit;
