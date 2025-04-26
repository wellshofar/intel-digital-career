
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Instagram } from 'lucide-react';

type MentorProps = {
  content: {
    bio_image?: string;
    instagram_url?: string;
  };
};

const Mentor = ({ content }: MentorProps) => {
  return (
    <section 
      id="sobre-mim" 
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:items-end order-2 md:order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full animate-glow"></div>
              <Avatar className="w-full h-full border-4 border-neon-blue/20">
                {content.bio_image ? (
                  <AvatarImage 
                    src={content.bio_image} 
                    alt="Wellington Luiz"
                    className="object-cover"
                  />
                ) : (
                  <AvatarFallback className="bg-neon-blue/5 text-white text-4xl">
                    WL
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>
          
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            <h3 className="text-xl font-orbitron mb-4">Wellington Luiz</h3>
            
            <p className="text-white/80 mb-6">
              Sou especialista em automação, WordPress, WooCommerce e marketing digital com APIs. 
              Ajudo homens com mais de 45 a recomeçarem com um negócio próprio, sustentável e sem depender de ninguém.
              Quero provar que experiência é um superpoder — e dá pra viver com liberdade, mesmo começando do zero.
            </p>
            
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href={content.instagram_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
                <span>@eusouwellingtonluiz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
