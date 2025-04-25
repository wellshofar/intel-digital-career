
import React from 'react';
import NeonButton from '@/components/NeonButton';

type CtaProps = {
  content: {
    cta_secondary_text?: string;
  };
};

const Cta = ({ content }: CtaProps) => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-black via-black to-black">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Pronto para transformar sua carreira?</span>
          </h2>
          
          <p className="text-lg text-white/80 mb-8">
            Dê o próximo passo na sua carreira digital. Aprenda automações e conquiste independência profissional.
          </p>
          
          <NeonButton color="red" className="text-lg">
            {content.cta_secondary_text || 'Começar minha jornada agora'}
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default Cta;
