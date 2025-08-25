import React from 'react';

interface CardContentProps {
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  title,
  date,
  time,
  location,
  host
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      
      <div className="space-y-2 text-gray-600">
        <p className="text-sm">
          {date} — {time}
        </p>
        <p className="text-sm">
          {location}
        </p>
        <p className="text-sm">
          Host: {host}
        </p>
      </div>
    </div>
  );
};