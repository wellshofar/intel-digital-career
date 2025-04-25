
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NeonButton from '@/components/NeonButton';
import NeonCard from '@/components/NeonCard';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactForm from '@/components/ContactForm';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type SiteContent = {
  [key: string]: string;
};

const Index = () => {
  const { toast } = useToast();
  const [content, setContent] = useState<SiteContent>({});
  
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('key, value');

      if (error) throw error;

      const contentMap = data.reduce((acc: SiteContent, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});

      setContent(contentMap);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  useEffect(() => {
    if (content.cta_form_script) {
      const script = document.createElement('script');
      script.src = content.cta_form_script;
      script.async = true;
      
      const formContainer = document.getElementById('chatzap-form-container');
      if (formContainer) {
        formContainer.appendChild(script);
      }
      
      return () => {
        if (formContainer && formContainer.contains(script)) {
          formContainer.removeChild(script);
        }
      };
    }
  }, [content.cta_form_script]);

  const handleLeadClick = () => {
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 max-w-7xl">
        <section 
          id="início" 
          className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-neon-orange to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-neon-red to-transparent"></div>
          
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 leading-tight animate-text-glow">
                Comece sua <span className="gradient-text">nova profissão</span> com Automações Inteligentes
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Aprenda a criar fluxos com Make, bots com Typebot e transforme o digital em sua nova carreira
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
                {content.cta_primary_text || 'Quero aprender agora'}
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
              {[
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
              ].map((item, index) => (
                <NeonCard key={index} color={item.color as 'blue' | 'red' | 'orange'}>
                  <h3 className="text-xl font-orbitron mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>
        
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
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
