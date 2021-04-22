import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import video1 from '../videos/video-1.mp4';
import video2 from '../videos/video-2.mp4';
import video3 from '../videos/video-3.mp4';

const data = [
  {
    city: 'Mont-Saint-Michel',
    description: 'Veniam magna ut irure enim minim do esse.',
    video: video1,
  },
  {
    city: 'Pont du Gard',
    description: 'Officia fugiat do excepteur eiusmod.',
    video: video2,
  },
  {
    city: 'Tour Eiffel',
    description: 'Magna esse ullamco pariatur ex minim.',
    video: video3,
  },
];

function HeroSection() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount >= 2) {
        return 0;
      }
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 2;
      }
      return prevCount - 1;
    });
  };

  return (
    <div className="hero-container">
      <video src={data[count].video} autoPlay loop muted />
      <h1>{data[count].city}</h1>
      <p>{data[count].description}</p>
      {/* <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick={console.log('hey')}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */}
      <div className="hero-btns-direction">
        <Button className="btns" buttonStyle="btn--trans" buttonSize="btn--small" onClick={handleIncrement}>
          <i className="fas fa-angle-double-left"></i>
        </Button>
        <p>
          <i className="fas fa-ellipsis-h"></i>
        </p>
        <Button className="btns" buttonStyle="btn--trans" buttonSize="btn--small" onClick={handleDecrement}>
          <i className="fas fa-angle-double-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
