
import React from 'react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <h1 className="text-2xl md:text-3xl font-bold font-orbitron gradient-text">
        Automação 45+
      </h1>
      <p className="text-xs md:text-sm text-white/80 font-orbitron">
        Nova profissão, novo futuro
      </p>
    </div>
  );
};

export default Logo;
