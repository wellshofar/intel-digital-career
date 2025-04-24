
import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

type SocialIconsProps = {
  className?: string;
};

const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-neon-orange transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-neon-red transition-colors duration-300"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </a>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-neon-blue transition-colors duration-300"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
