
import React from 'react';
import { cn } from '@/lib/utils';

type FloatingWhatsAppProps = {
  phoneNumber?: string;
  message?: string;
  className?: string;
};

const FloatingWhatsApp = ({
  phoneNumber = "5511999999999",
  message = "Olá! Gostaria de saber mais sobre o curso de Automação 45+",
  className,
}: FloatingWhatsAppProps) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full',
        'shadow-lg hover:scale-110 transition-transform duration-300',
        'flex items-center justify-center',
        className
      )}
      aria-label="Contato via WhatsApp"
    >
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 1.002C5.926 1.002 1 5.928 1 12.002c0 2.125.605 4.189 1.75 5.971l-1.697 5.067 5.262-1.669a10.963 10.963 0 005.68 1.627h.005c6.076 0 11.002-4.926 11.002-11.001C22.002 5.928 18.077 1.002 12 1.002zM12 20.065h-.004a9.137 9.137 0 01-4.83-1.389l-.345-.204-3.584 1.137 1.176-3.512-.221-.358a8.99 8.99 0 01-1.391-4.737c0-5.052 4.12-9.172 9.172-9.172 2.452 0 4.756.955 6.489 2.688a9.078 9.078 0 012.689 6.492c-.001 5.051-4.121 9.155-9.175 9.155z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
