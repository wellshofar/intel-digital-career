
import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

type SocialIconsProps = {
  className?: string;
};

const SocialIcons = ({ className }: SocialIconsProps) => {
  const [socialUrls, setSocialUrls] = React.useState({
    instagram_url: 'https://instagram.com',
    youtube_url: 'https://youtube.com',
    facebook_url: 'https://facebook.com'
  });

  React.useEffect(() => {
    fetchSocialUrls();
  }, []);

  const fetchSocialUrls = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .in('key', ['instagram_url', 'youtube_url', 'facebook_url']);

      if (error) throw error;

      const urls = data.reduce((acc: any, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});

      setSocialUrls(prev => ({ ...prev, ...urls }));
    } catch (error) {
      console.error('Error fetching social URLs:', error);
    }
  };

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <a 
        href={socialUrls.instagram_url}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-neon-orange transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a 
        href={socialUrls.youtube_url}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-neon-red transition-colors duration-300"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </a>
      <a 
        href={socialUrls.facebook_url}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-neon-blue transition-colors duration-300"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
