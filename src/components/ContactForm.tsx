
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import NeonButton from "./NeonButton";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([data]);

      if (error) throw error;

      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome completo" 
                  {...field}
                  className="bg-black/50 border border-neon-red/50 text-white" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  {...field}
                  className="bg-black/50 border border-neon-red/50 text-white" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp</FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="Seu WhatsApp" 
                  {...field}
                  className="bg-black/50 border border-neon-red/50 text-white" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <NeonButton 
          type="submit" 
          color="red" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Quero aprender agora'}
        </NeonButton>
      </form>
    </Form>
  );
};

export default ContactForm;
