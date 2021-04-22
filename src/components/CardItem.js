import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ cards }) {
  const handleOnMouseOver = (e) => {
    e.currentTarget.play(true);
  };

  const handleOnMouseOut = (e) => {
    e.currentTarget.pause();
  };

  return (
    <>
      {cards.map((card, index) => {
        if (card.src.includes('mp4') || card.src.includes('https')) {
          return (
            <li key={index} className="cards__item">
              <div className="cards__item__link">
                <Link to={card.path}>
                  <figure className="cards__item__pic-wrap" data-category={card.label}>
                    <div className="cards__item__video">
                      <video
                        autoPlay
                        loop
                        preload="none"
                        muted // Needs to be there to be able to play
                        poster={card.poster}
                        // onTouchMove={handleOnMouseOver}
                        onMouseOver={handleOnMouseOver}
                        onMouseOut={handleOnMouseOut}>
                        <source src={card.src} type="video/mp4" />
                      </video>
                    </div>
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">{card.text}</h5>
                  </div>
                </Link>
              </div>
            </li>
          );
        } else {
          return (
            <li key={index} className="cards__item">
              <div className="cards__item__link">
                <Link to={card.path}>
                  <figure className="cards__item__pic-wrap" data-category={card.label}>
                    <img className="cards__item__img" alt="Travel" src={card.src} />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">{card.text}</h5>
                  </div>
                </Link>
              </div>
            </li>
          );
        }
      })}
    </>
  );
}

export default CardItem;
