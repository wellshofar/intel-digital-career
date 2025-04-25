
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { supabase } from '@/integrations/supabase/client';
import Hero from '@/components/sections/Hero';
import Platforms from '@/components/sections/Platforms';
import Features from '@/components/sections/Features';
import Mentor from '@/components/sections/Mentor';
import Cta from '@/components/sections/Cta';

type SiteContent = {
  [key: string]: string;
};

const Index = () => {
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

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 max-w-7xl">
        <Hero content={content} />
        <Platforms />
        <Features />
        <Mentor content={content} />
        <Cta content={content} />
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
