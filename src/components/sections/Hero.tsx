
import React from 'react';
import NeonButton from '@/components/NeonButton';
import ContactForm from '@/components/ContactForm';

type HeroProps = {
  content: {
    youtube_url?: string;
    cta_primary_text?: string;
  };
};

const Hero = ({ content }: HeroProps) => {
  return (
    <section 
      id="início" 
      className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-neon-orange to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-neon-red to-transparent"></div>
      
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 leading-tight animate-text-glow">
            Transforme sua <span className="gradient-text">experiência</span> em um negócio próprio
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Nunca é tarde para construir sua liberdade. Comece agora mesmo com ferramentas digitais acessíveis.
          </p>
          
          <div className="hidden sm:block lg:hidden">
            <div className="aspect-video w-full max-w-md mx-auto mb-8 rounded-lg overflow-hidden neon-border-blue">
              <iframe 
                width="100%" 
                height="100%" 
                src={content.youtube_url} 
                title="Vídeo de Boas-vindas" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <NeonButton color="red" className="text-lg">
            {content.cta_primary_text || 'Quero Começar Agora'}
          </NeonButton>
        </div>
        
        <div className="space-y-6">
          <div className="hidden lg:block">
            <div className="aspect-video w-full rounded-lg overflow-hidden neon-border-blue">
              <iframe 
                width="100%" 
                height="100%" 
                src={content.youtube_url} 
                title="Vídeo de Boas-vindas" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="neon-border-red rounded-lg p-4">
            <h3 className="text-xl font-orbitron mb-4 text-center">Entre em contato</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
