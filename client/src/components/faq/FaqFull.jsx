import { useState } from 'react';

import './faqFull.scss';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { faqData } from '../../data';

const FaqFull = () => {
  const [selected, setSelected] = useState(null);
  const data = faqData;

  const toggle = (i) => {
    if (selected === i) {
      return null;
    }

    setSelected(i);
    return i;
  };

  return (
    <div className="faq-full">
      <div className="faq-full-accordion">
        {data.map((item, i) => (
          <div key={item.id} className="item">
            <div onClick={() => toggle(i)} className="title">
              <p>{item.question}</p>
              {selected === i ? (
                <FiMinus className="icon" />
              ) : (
                <GoPlus className="icon" />
              )}
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <div className="answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqFull;
