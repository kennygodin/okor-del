import { useState } from 'react';
import './requestCall.scss';
import { IoIosInfinite } from 'react-icons/io';

const apiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_LOCAL_API
  : import.meta.env.VITE_REMOTE_API;

const RequestCall = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!purpose) {
      alert('Please select a purpose.');
      return;
    }

    setError(false);
    setSuccess(false);
    setIsSending(true);

    try {
      const response = await fetch(`${apiUrl}request-callback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          purpose,
          phoneNumber,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPurpose('');
        setPhoneNumber('');
      } else {
        setError(true);
        console.error('Error:', await response.text());
      }
    } catch (error) {
      setError(true);
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="request-call">
      <div className="request-container">
        <div className="form-container">
          <form onSubmit={submitForm}>
            <div className="item">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                type="text"
                required
              />
            </div>
            <div className="item">
              <label>I would like to discuss:</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="Logistics services">Logistics services</option>
                <option value="Branding and sales">Branding and sales</option>
                <option value="Business management">Business management</option>
                <option value="Marketing">Marketing</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div className="item">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <div className="item">
              <label>Phone number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                required
              />
            </div>
            {isSending && <div className="sending">Sending...</div>}
            {success && <div className="sending">Message sent.</div>}
            {error && (
              <div className="error">Uh um... Something went wrong.</div>
            )}
            <button disabled={isSending} type="submit">
              {success ? 'Message sent' : 'Submit'}
            </button>
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
