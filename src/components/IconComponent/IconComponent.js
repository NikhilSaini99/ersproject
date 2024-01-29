/* eslint-disable @next/next/no-img-element */
import React from 'react';

const IconComponent = ({ src, width, height, color }) => {
  return (
    <img 
      src={src} 
      alt="" 
      style={{ 
        maxWidth: width, 
        maxHeight: height, 
        objectFit:"contain",
        filter: "grayscale(100%)"
      }} 
    />
  );
};

export default IconComponent;