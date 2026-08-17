// src/components/Sticker.jsx
import React from 'react';

const Sticker = ({ 
  src, 
  className = '', 
  rotation = 0, 
  scale = 1, 
  animation = null,
  opacity = 1,
  alt = '',
  onClick = null,
  style = {}
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`sticker ${animation ? `sticker-${animation}` : ''} ${onClick ? 'sticker-clickable' : ''} ${className}`}
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity,
        ...style
      }}
      onClick={onClick}
    />
  );
};

export default Sticker;