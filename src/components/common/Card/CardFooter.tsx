import React from 'react';

interface CardFooterProps {
  onJoin?: () => void;
}

export const CardFooter: React.FC<CardFooterProps> = ({ onJoin }) => {
  return (
    <div className="px-6 pb-6">
      <button
        onClick={onJoin}
        className="w-full bg-blue-500  text-white font-medium py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200"
      >
        Join
      </button>
    </div>
  );
};