import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
// import images
import image1 from '../images/img-1.jpg';
import image9 from '../images/img-9.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image8 from '../images/img-8.jpg';

// import videos
import video1 from '../videos/fr-3.mp4';
import video2 from '../videos/fr-2.mp4';

const data = {
  cardsTitle: 'Featured Collections',
  cards: [
    {
      poster: image1,
      src: video1,
      text: 'Tourisme et Littérature',
      label: 'Culture',
      path: '/product',
      featured: true,
    },
    {
      poster: image9,
      src: video2,
      text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
      label: 'Amazon',
      path: '/product',
      featured: true,
    },
    {
      src: image2,
      text: 'Travel through the Islands of Bali in a Private Cruise',
      label: 'Bali',
      path: '/product',
      featured: false,
    },
    {
      src: image3,
      text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
      label: 'Atlantic',
      path: '/product',
      featured: false,
    },
    {
      src: image4,
      text: 'Experience Football on Top of the Himilayan Mountains',
      label: 'Himilayan',
      path: '/product',
      featured: false,
    },
    {
      src: image8,
      text: 'Ride through the Sahara Desert on a guided camel tour',
      label: 'Sahara',
      path: '/product',
      featured: false,
    },
  ],
};

function Cards() {
  const featured = data.cards.filter((item) => item.featured);
  const normal = data.cards.filter((item) => !item.featured);

  return (
    <div className="cards">
      <h1>{data.cardsTitle}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem cards={featured} />
          </ul>
          <ul className="cards__items">
            <CardItem cards={normal} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
