import React from 'react';
import { Button } from '../Button';

interface CardFooterProps {
  onJoin?: () => void;
}

export const CardFooter: React.FC<CardFooterProps> = ({ onJoin }) => {
  return (
    <div className="px-6 pb-6">
      <Button
        onClick={onJoin}
        type="button"
        variant='outline'
        className="w-full"
      >
        Book
      </Button>
    </div>
  );
};