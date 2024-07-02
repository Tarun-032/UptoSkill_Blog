import React from 'react';
import './CardSection.css';

import card1 from '../../../assets/Cards/card1.jpeg';
import card2 from '../../../assets/Cards/card2.jpeg';
import card3 from '../../../assets/Cards/card3.jpeg';
import card4 from '../../../assets/Cards/card1.jpeg';
import card5 from '../../../assets/Cards/card2.jpeg';
import card6 from '../../../assets/Cards/card3.jpeg';

const cards = [
  {
    image: card1,
    description: 'This is a short description for card 1.',
  },
  {
    image: card2,
    description: 'This is a short description for card 2.',
  },
  {
    image: card3,
    description: 'This is a short description for card 3.',
  },
  {
    image: card4,
    description: 'This is a short description for card 4.',
  },
  {
    image: card5,
    description: 'This is a short description for card 5.',
  },
  {
    image: card6,
    description: 'This is a short description for card 6.',
  },
];

function CardSection() {
  return (
    <section className="card-section">
      <h2 className="section-title">Latest Reads</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
            <div className="card-description">
              {card.description}
            </div>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardSection;
