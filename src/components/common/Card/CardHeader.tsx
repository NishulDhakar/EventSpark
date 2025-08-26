import React from 'react';

interface CardHeaderProps {
  imageUrl: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full">
      <img
        src={imageUrl}
        alt="Event"
        className="w-full h-full object-cover"
      />
    </div>
  );
};