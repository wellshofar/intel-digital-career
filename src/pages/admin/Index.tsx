
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Settings, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminIndex = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-orbitron text-white mb-6">
          Painel Administrativo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-8 rounded-lg border border-neon-blue/30 hover:border-neon-blue/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-8 h-8 text-neon-blue" />
              <h2 className="text-xl font-orbitron text-white">Conteúdo do Site</h2>
            </div>
            <p className="text-white/80 mb-6">
              Gerencie textos, imagens e links do site
            </p>
            <Button
              onClick={() => navigate('/admin/content')}
              className="w-full bg-neon-blue/20 hover:bg-neon-blue/30 text-white"
            >
              Gerenciar Conteúdo
            </Button>
          </div>

          <div className="bg-black/50 p-8 rounded-lg border border-neon-orange/30 hover:border-neon-orange/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Settings className="w-8 h-8 text-neon-orange" />
              <h2 className="text-xl font-orbitron text-white">Configurações</h2>
            </div>
            <p className="text-white/80 mb-6">
              Configure preferências e integrações
            </p>
            <Button
              onClick={() => navigate('/admin/settings')}
              className="w-full bg-neon-orange/20 hover:bg-neon-orange/30 text-white"
            >
              Acessar Configurações
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminIndex;
