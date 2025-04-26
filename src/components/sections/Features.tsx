
import React from 'react';
import NeonCard from '@/components/NeonCard';

const features = [
  {
    title: "Medo da mudança",
    description: "Supere o receio de recomeçar com um caminho claro e apoio de quem já passou por isso.",
    color: "blue"
  },
  {
    title: "Receio com tecnologia",
    description: "Aprenda ferramentas com interfaces intuitivas, criadas para serem usadas por não-programadores.",
    color: "orange"
  },
  {
    title: "Falta de tempo",
    description: "Metodologias que se adaptam à sua rotina, sem exigir dedicação integral para aprender.",
    color: "red"
  },
  {
    title: "Cansado de depender de terceiros",
    description: "Domine o próprio negócio sem depender de profissionais externos para cada pequena mudança.",
    color: "blue"
  },
  {
    title: "Insegurança para começar",
    description: "Tenha acesso a roteiros detalhados que minimizam o risco e aumentam suas chances de sucesso.",
    color: "orange"
  },
  {
    title: "Dificuldade em se adaptar",
    description: "Transforme sua experiência de vida em vantagens competitivas no mundo digital.",
    color: "red"
  }
];

const Features = () => {
  return (
    <section 
      id="o-problema" 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
            <span className="gradient-text">Sente que está na hora</span> de virar o jogo?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Esses são os desafios que homens com mais de 45 anos enfrentam ao pensar em mudar de carreira
          </p>
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
