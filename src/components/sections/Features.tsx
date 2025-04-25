
import React from 'react';
import NeonCard from '@/components/NeonCard';

const features = [
  {
    title: "Criar automações no Make",
    description: "Aprenda a construir fluxos automatizados entre aplicativos sem precisar de conhecimento em programação.",
    color: "blue"
  },
  {
    title: "Fazer bots com Typebot",
    description: "Construa chatbots inteligentes para sites, WhatsApp e muito mais.",
    color: "orange"
  },
  {
    title: "Landing Pages que convertem",
    description: "Crie páginas otimizadas para conversão utilizando técnicas modernas de design.",
    color: "red"
  },
  {
    title: "Captura de leads inteligente",
    description: "Implemente sistemas automáticos para capturar e processar leads de maneira eficiente.",
    color: "blue"
  },
  {
    title: "Conectar WhatsApp, E-mail e Instagram",
    description: "Integre diferentes canais de comunicação em uma única plataforma automatizada.",
    color: "orange"
  },
  {
    title: "Automação de processos",
    description: "Otimize seu trabalho eliminando tarefas repetitivas através de automações inteligentes.",
    color: "red"
  }
];

const Features = () => {
  return (
    <section 
      id="o que aprenderá" 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
            <span className="gradient-text">O que você vai aprender</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <NeonCard key={index} color={item.color as 'blue' | 'red' | 'orange'}>
              <h3 className="text-xl font-orbitron mb-3">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
