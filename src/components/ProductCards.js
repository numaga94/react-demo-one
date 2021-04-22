import React, { useEffect, useState } from 'react';
import lamp from '../images/masonry/lamp-600.jpg';
import clock from '../images/masonry/rucksack-600.jpg';
import woodcraft from '../images/masonry/woodcraft-600.jpg';
import './ProductCards.css';

const data = [
  {
    name: 'Magazine',
    description:
      'Esse ad nostrud duis Lorem elit. Enim aliquip consectetur sint duis eiusmod ut duis do adipisicing. Elit aliqua esse culpa anim culpa ipsum est elit consectetur id.',
    imageSrc: clock,
    externalLink: 'https://numaga.fr',
  },
  {
    name: 'lamp',
    description:
      'Adipisicing aliqua officia dolore deserunt duis duis enim officia dolor aute elit. Excepteur adipisicing elit ullamco sit. Mollit nostrud elit voluptate ea anim minim magna quis velit eu ipsum.',
    imageSrc: lamp,
    externalLink: 'https://numaga.fr',
  },
  {
    name: 'wood craft',
    description:
      'Dolor ipsum ea sit nisi sint aliquip ipsum voluptate culpa et est voluptate adipisicing. Officia amet sint et ullamco consequat aliquip nulla officia nisi cupidatat. Labore laborum amet ullamco elit irure deserunt occaecat duis nostrud.',
    imageSrc: woodcraft,
    externalLink: 'https://numaga.fr',
  },
  {
    name: 'Magazine',
    description:
      'Esse ad nostrud duis Lorem elit. Enim aliquip consectetur sint duis eiusmod ut duis do adipisicing. Elit aliqua esse culpa anim culpa ipsum est elit consectetur id.',
    imageSrc: clock,
    externalLink: 'https://numaga.fr',
  },
  {
    name: 'lamp',
    description:
      'Adipisicing aliqua officia dolore deserunt duis duis enim officia dolor aute elit. Excepteur adipisicing elit ullamco sit. Mollit nostrud elit voluptate ea anim minim magna quis velit eu ipsum.',
    imageSrc: lamp,
    externalLink: 'https://numaga.fr',
  },
  {
    name: 'wood craft',
    description:
      'Dolor ipsum ea sit nisi sint aliquip ipsum voluptate culpa et est voluptate adipisicing. Officia amet sint et ullamco consequat aliquip nulla officia nisi cupidatat. Labore laborum amet ullamco elit irure deserunt occaecat duis nostrud.',
    imageSrc: woodcraft,
    externalLink: 'https://numaga.fr',
  },
];

function ProductCards() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    // column
    <div className="product_cards">
      <h1>Selected Products</h1>
      <div className="product__cards__container">
        {data.map((item, index) => {
          if (width <= 736) {
            return (
              <div key={index} className="product__card__wrapper">
                <figure className="product__item">
                  <img src={item.imageSrc} alt={item.name} />
                </figure>
                <div className="product__item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a href={item.externalLink} target="_blank" rel="noreferrer">
                    WHERE TO BUY ?
                  </a>
                </div>
              </div>
            );
          } else {
            if (index % 2) {
              return (
                // row
                <div key={index} className="product__card__wrapper">
                  <div className="product__item">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={item.externalLink} target="_blank" rel="noreferrer">
                      WEHRE TO BUY ?
                    </a>
                  </div>
                  <figure className="product__item">
                    <img src={item.imageSrc} alt={item.name} />
                  </figure>
                </div>
              );
            } else {
              return (
                <div key={index} className="product__card__wrapper">
                  <figure className="product__item">
                    <img src={item.imageSrc} alt={item.name} />
                  </figure>
                  <div className="product__item">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={item.externalLink} target="_blank" rel="noreferrer">
                      WHERE TO BUY ?
                    </a>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

export default ProductCards;
