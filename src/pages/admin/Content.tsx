
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type ContentItem = {
  id: string;
  key: string;
  value: string;
};

const ContentPage = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('id, key, value')
        .order('key');

      if (error) throw error;
      
      // Check if we have the required fields in the database already
      const requiredFields = ['youtube_url', 'cta_primary_link'];
      const existingKeys = data.map((item) => item.key);
      
      // Add any missing required fields to the database
      for (const field of requiredFields) {
        if (!existingKeys.includes(field)) {
          let defaultValue = '';
          if (field === 'youtube_url') defaultValue = 'https://youtu.be/6cBDoNKgqmw';
          if (field === 'cta_primary_link') defaultValue = 'https://chatzapbot.com.br/?post_type=product&p=426&preview=true';
          
          await supabase
            .from('site_content')
            .insert({ key: field, value: defaultValue });
        }
      }
      
      // Fetch again if we added new fields
      if (requiredFields.some(field => !existingKeys.includes(field))) {
        const { data: refreshedData } = await supabase
          .from('site_content')
          .select('id, key, value')
          .order('key');
          
        if (refreshedData) setContent(refreshedData);
      } else {
        setContent(data);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: "Erro ao carregar conteúdo",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (key: string, value: string) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .update({ value })
        .eq('key', key);

      if (error) throw error;

      toast({
        title: "Conteúdo atualizado",
        description: "As alterações foram salvas com sucesso.",
      });
    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Erro ao atualizar conteúdo",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const contentLabels: Record<string, string> = {
    youtube_url: 'URL do Vídeo do YouTube',
    instagram_url: 'URL do Instagram',
    facebook_url: 'URL do Facebook',
    bio_image: 'URL da Foto da Biografia',
    cta_form_script: 'Script do Formulário CTA',
    cta_primary_text: 'Texto do Botão Principal',
    cta_primary_link: 'Link de Cadastro',
    cta_secondary_text: 'Texto do Botão Secundário'
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-orbitron text-white mb-6">Gerenciar Conteúdo</h1>
        
        {isLoading ? (
          <div className="text-white">Carregando...</div>
        ) : (
          <div className="space-y-6">
            {content.map((item) => (
              <div key={item.key} className="bg-black/50 p-6 rounded-lg border border-neon-red/30">
                <label className="block text-white mb-2 font-orbitron">
                  {contentLabels[item.key] || item.key}
                </label>
                <div className="flex gap-4">
                  <Input
                    defaultValue={item.value}
                    onBlur={(e) => handleUpdate(item.key, e.target.value)}
                    className="bg-dark text-white border-neon-red/30"
                  />
                  <Button
                    onClick={() => handleUpdate(item.key, item.value)}
                    className="bg-neon-red/20 hover:bg-neon-red/30 text-white"
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ContentPage;
