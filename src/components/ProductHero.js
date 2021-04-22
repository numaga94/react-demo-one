import React from 'react';
import video from '../videos/fr-2.mp4';
import './ProductHero.css';

function ProductHero() {
  const handleOnMouseOver = (e) => {
    e.currentTarget.play(true);
  };

  const handleOnMouseOut = (e) => {
    e.currentTarget.pause();
  };

  return (
    <div className="product__container">
      <figure className="product__video-wrap">
        <video autoPlay loop preload="none" controls onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
          <source src={video} />
        </video>
      </figure>
    </div>
  );
}

export default ProductHero;
