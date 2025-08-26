import React from 'react';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';

interface CardProps {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
  onJoin?: () => void;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  date,
  time,
  location,
  host,
  onJoin
}) => {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      <CardHeader imageUrl={imageUrl} />
      <CardContent 
        title={title}
        date={date}
        time={time}
        location={location}
        host={host}
      />
      <CardFooter onJoin={onJoin} />
    </div>
  );
};