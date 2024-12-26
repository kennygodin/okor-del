import './requestCall.scss';
import { IoIosInfinite } from 'react-icons/io';

const RequestCall = () => {
  return (
    <div className="request-call">
      <div className="request-container">
        <div className="form-container">
          <form>
            <div className="item">
              <label>Name</label>
              <input placeholder="Enter your name" type="text" />
            </div>
            <div className="item">
              <label>I would like to discuss:</label>
              <select>
                <option value="Logistics services">Logistics services</option>
                <option value="Branding and sales">Branding and sales</option>
                <option value="business management">Business mnagement</option>
                <option value="marketing">Marketing</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div className="item">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="item">
              <label>Phone number</label>
              <input type="text" />
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="content">
          <h4>Request a call back</h4>
          <div className="title">
            We will develop a personalized plan to increase growth and make your
            business a success.
          </div>

          <div className="infinite-icon-container">
            <div className="line"></div>
            <IoIosInfinite className="infinite-icon" />
            <div className="line"></div>
          </div>

          <p>
            Would you like to speak to one of our consultants over the phone?
            Just submit your details and we’ll be in touch shortly. You can also
            email us if you would prefer.
          </p>
          <p>
            We inspire clients to make their most challenging business decisions
            with confidence. Send us a message, or phone +358 102 122 670
            between 09:00 and 18:00 Monday to Friday — we would be delighted to
            speak about how we could help your firm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestCall;
