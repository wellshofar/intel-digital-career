
import React from 'react';
import { cn } from '@/lib/utils';

type NeonButtonProps = {
  children: React.ReactNode;
  color?: 'blue' | 'red' | 'orange';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const NeonButton = ({ 
  children, 
  color = 'red', 
  className,
  onClick,
  type = 'button'
}: NeonButtonProps) => {
  const colorStyles = {
    blue: 'border-neon-blue hover:bg-neon-blue/20 shadow-neon hover:shadow-[0_0_10px_#00BFFF,_0_0_20px_#00BFFF]',
    red: 'border-neon-red hover:bg-neon-red/20 shadow-neon-red hover:shadow-[0_0_10px_#FF3131,_0_0_20px_#FF3131]',
    orange: 'border-neon-orange hover:bg-neon-orange/20 shadow-neon-orange hover:shadow-[0_0_10px_#FFA500,_0_0_20px_#FFA500]',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'px-6 py-3 border-2 rounded-md text-white font-orbitron font-bold',
        'transition-all duration-300 transform hover:scale-105 focus:outline-none',
        colorStyles[color],
        className
      )}
    >
      {children}
    </button>
  );
};

export default NeonButton;
