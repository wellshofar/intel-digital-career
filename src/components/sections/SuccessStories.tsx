
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Carlos, 52 anos",
    role: "Ex-gerente administrativo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    text: "Depois de 25 anos em uma grande empresa, tive que recomeçar. Com as ferramentas que aprendi aqui, construí minha consultoria 100% digital e hoje tenho uma renda maior que meu antigo salário."
  },
  {
    name: "Roberto, 58 anos",
    role: "Ex-professor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    text: "Achei que tecnologia não era para minha idade. Em 6 meses, montei um infoproduto usando WordPress e automações que me liberam tempo para viver, enquanto o sistema trabalha por mim."
  },
  {
    name: "João, 49 anos",
    role: "Ex-contador",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    text: "A mudança me assustava, mas o medo de ficar obsoleto era maior. Hoje tenho uma agência digital que fatura 5 dígitos mensais, tudo graças às automações que aprendi aqui."
  }
];

const SuccessStories = () => {
  return (
    <section 
      id="historias" 
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
            <span className="gradient-text">Eles começaram depois dos 50</span> e venceram
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Histórias reais de quem transformou experiência em um novo negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-black/50 border-neon-blue/30 hover:border-neon-blue/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={item.avatar} alt={item.name} />
                    <AvatarFallback className="bg-neon-blue/20">{item.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-orbitron text-white">{item.name}</h3>
                    <p className="text-sm text-white/70">{item.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{item.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
