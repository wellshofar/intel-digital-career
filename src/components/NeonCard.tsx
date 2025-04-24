
import React from 'react';
import { cn } from '@/lib/utils';

type NeonCardProps = {
  children: React.ReactNode;
  color?: 'blue' | 'red' | 'orange';
  className?: string;
};

const NeonCard = ({ children, color = 'blue', className }: NeonCardProps) => {
  const colorStyles = {
    blue: 'border-neon-blue shadow-neon',
    red: 'border-neon-red shadow-neon-red',
    orange: 'border-neon-orange shadow-neon-orange',
  };
  
  return (
    <div
      className={cn(
        'p-6 border-2 rounded-lg bg-black/50 backdrop-blur-sm',
        'transition-all duration-300 hover:scale-[1.02]',
        colorStyles[color],
        className
      )}
    >
      {children}
    </div>
  );
};

export default NeonCard;
