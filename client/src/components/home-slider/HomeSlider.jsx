import { useEffect, useState } from 'react';
import { sliderData } from '../../data';
import './homeSlider.scss';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
  const data = sliderData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        setAnimate(false);
        setTimeout(() => {
          setCurrentSlide((prevValue) =>
            prevValue === data.length - 1 ? 0 : prevValue + 1
          );
          setAnimate(true);
        }, 500);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [hovered, data.length]);

  return (
    <div
      className="home-slider"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="slider-arrows">
        <div
          onClick={() => {
            setAnimate(false);
            setTimeout(() => {
              setCurrentSlide(
                currentSlide === 0 ? data.length - 1 : currentSlide - 1
              );
              setAnimate(true);
            }, 500);
          }}
          className="arrow"
        >
          <LuChevronLeft size={25} />
        </div>
        <div
          className="arrow"
          onClick={() => {
            setAnimate(false);
            setTimeout(() => {
              setCurrentSlide(
                currentSlide === data.length - 1 ? 0 : currentSlide + 1
              );
              setAnimate(true);
            }, 500);
          }}
        >
          <LuChevronRight size={25} />
        </div>
      </div>
      <div className={`slide-content ${animate ? 'animate' : ''}`}>
        <p className="slide-content-title">{data[currentSlide].title}</p>
        <p className="slide-content-desc">{data[currentSlide].description}</p>
        <Link to="/contact-us">
          <button>Work with us today</button>
        </Link>
      </div>
      <div className="slider-img-container">
        <img src={data[currentSlide].src} alt="okor-del-slider-img" />
        <div className="img-overlay"></div>
      </div>
    </div>
  );
};

export default HomeSlider;
