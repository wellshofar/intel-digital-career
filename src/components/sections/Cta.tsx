
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
            <span className="gradient-text">Receba gratuitamente o Guia dos Primeiros Passos</span>
          </h2>
          
          <p className="text-lg text-white/80 mb-8">
            Descubra como montar um negócio lucrativo e autônomo em até 90 dias. Comece sua jornada para a independência profissional agora.
          </p>
          
          <div id="chatzap-form-container" className="mb-8">
            {/* Script form will be injected here */}
          </div>
          
          <NeonButton color="red" className="text-lg">
            {content.cta_secondary_text || 'Entrar para a Comunidade'}
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default Cta;
