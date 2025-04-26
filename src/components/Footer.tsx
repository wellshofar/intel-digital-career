
import React from 'react';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-12 pb-6">
      <div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-neon-blue via-neon-red to-neon-orange"
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Wellington Luiz — Consultoria em Automação e Negócios Digitais
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron mb-4 gradient-text">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre Mim', 'O Problema', 'Plataformas', 'Histórias'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron mb-4 gradient-text">Contato</h3>
            <p className="text-white/70 mb-4">Siga-nos nas redes sociais:</p>
            <SocialIcons />
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Wellington Luiz – Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-white/60 text-sm italic">
            "Você tem a experiência. Eu te ajudo a transformar isso em liberdade."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
