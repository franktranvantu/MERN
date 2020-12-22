import React, { useState } from 'react';
import './TinderCards.css';

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Frank',
      url: ''
    }
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <h1>{person.name}</h1>
        ))}
      </div>

    </div>
  )
}
