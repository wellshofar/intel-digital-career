
import React from 'react';
import NeonCard from '@/components/NeonCard';

const Platforms = () => {
  return (
    <section 
      id="plataformas" 
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
            <span className="gradient-text">Plataformas</span> que você vai dominar
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Mesmo sem nenhuma experiência anterior
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NeonCard color="blue">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img 
                  src="https://d3k4cmzkhxudj4.cloudfront.net/pre-build/make-color.webp" 
                  alt="Logo Make.com" 
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="text-xl font-orbitron mb-3">Make</h3>
              <p className="text-white/80 text-center">
                Crie fluxos automatizados entre apps sem saber programar. Conecte aplicativos e serviços web para automatizar processos complexos.
              </p>
            </div>
          </NeonCard>
          
          <NeonCard color="orange">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img 
                  src="https://www.typebotworkflow.com/img/logo.svg" 
                  alt="Logo Typebot" 
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="text-xl font-orbitron mb-3">Typebot</h3>
              <p className="text-white/80 text-center">
                Crie robôs de atendimento em sites, WhatsApp e landing pages. Automatize comunicações e atendimentos com uma interface intuitiva.
              </p>
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
