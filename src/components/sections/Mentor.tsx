
import React from 'react';

type MentorProps = {
  content: {
    bio_image?: string;
    instagram_url?: string;
  };
};

const Mentor = ({ content }: MentorProps) => {
  return (
    <section 
      id="mentor" 
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full animate-glow"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-neon-blue via-neon-red to-neon-orange overflow-hidden">
              <img 
                src={content.bio_image} 
                alt="Wellington Luiz" 
                className="w-full h-full object-cover rounded-full p-1"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
            <span className="gradient-text">Sobre o mentor</span>
          </h2>
          <h3 className="text-xl font-orbitron mb-4">Wellington Luiz</h3>
          
          <p className="text-white/80 mb-6">
            Especialista em soluções digitais, automações e marketing para iniciantes.
            Atua há mais de 10 anos ajudando pessoas a transformarem seu conhecimento em negócio no digital.
          </p>
          
          <div className="flex gap-4">
            <a 
              href={content.instagram_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-white transition-colors duration-300"
            >
              @eusouwellingtonluiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
