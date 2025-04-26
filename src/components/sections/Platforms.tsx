import React from 'react';
import NeonCard from '@/components/NeonCard';
import { LayoutGrid, ShoppingBag } from 'lucide-react';

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
            <span className="gradient-text">Com ferramentas simples</span>, você pode começar hoje mesmo
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tecnologias acessíveis para qualquer pessoa, independente de experiência prévia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <NeonCard color="blue">
            <div className="flex flex-col items-center p-6">
              <div className="w-full h-20 mb-6 flex items-center justify-center bg-white/5 rounded-lg p-4">
                <LayoutGrid size={48} className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-orbitron mb-3">WordPress</h3>
              <p className="text-white/80 text-center">
                Sistema de gerenciamento de conteúdo ideal para criar seu site profissional rapidamente.
              </p>
            </div>
          </NeonCard>
          
          <NeonCard color="orange">
            <div className="flex flex-col items-center p-6">
              <div className="w-full h-20 mb-6 flex items-center justify-center bg-white/5 rounded-lg p-4">
                <ShoppingBag size={48} className="text-neon-orange" />
              </div>
              <h3 className="text-xl font-orbitron mb-3">WooCommerce</h3>
              <p className="text-white/80 text-center">
                Solução de e-commerce para vender produtos e serviços online com facilidade.
              </p>
            </div>
          </NeonCard>
          
          <NeonCard color="red">
            <div className="flex flex-col items-center p-6">
              <div className="w-full h-20 mb-6 flex items-center justify-center bg-white/5 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/9f7be105-33d8-496e-a7a9-676f14d71f44.png"
                  alt="Logo Make" 
                  className="max-h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-orbitron mb-3">Make (Integromat)</h3>
              <p className="text-white/80 text-center">
                Ferramenta para automatizar processos e conectar aplicativos sem precisar programar.
              </p>
            </div>
          </NeonCard>
          
          <NeonCard color="blue">
            <div className="flex flex-col items-center p-6">
              <div className="w-full h-20 mb-6 flex items-center justify-center bg-white/5 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/cdc3960e-9775-4e9f-9c21-bc7883bdadd5.png"
                  alt="Logo Typebot" 
                  className="max-h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-orbitron mb-3">Typebot</h3>
              <p className="text-white/80 text-center">
                Crie chatbots conversacionais para atendimento e captura de leads de forma simples.
              </p>
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
