// src/components/FutureSection.jsx
import React from 'react';
import Sticker from './Sticker';

const FutureSection = ({ future }) => {
  const futureItems = [
    { number: '01', title: 'A PLACE WE HAVEN\'T VISITED', sticker: '/assets/stickers/map.svg' },
    { number: '02', title: 'A FOOD WE HAVEN\'T TRIED', sticker: '/assets/stickers/coffee-cup.svg' },
    { number: '03', title: 'A PHOTO WE HAVEN\'T TAKEN', sticker: '/assets/stickers/camera.svg' },
    { number: '04', title: 'A MEMORY WE HAVEN\'T MADE', sticker: '/assets/stickers/star.svg' },
  ];

  return (
    <div className="future-section">
      <h2 className="section-title">THINGS WE HAVEN'T DONE YET</h2>
      
      <div className="future-board">
        {futureItems.map((item, index) => (
          <div 
            key={item.number}
            className={`future-card future-card-${index}`}
          >
            <Sticker
              src={item.sticker}
              className="future-sticker"
              rotation={index % 2 === 0 ? -8 : 6}
              scale={0.4}
            />
            
            <span className="future-number">{item.number}</span>
            <h3 className="future-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureSection;