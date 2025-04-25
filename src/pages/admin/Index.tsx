
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AdminIndex = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-orbitron text-white mb-6">Painel Administrativo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-lg border border-neon-red/30">
            <h2 className="text-xl font-orbitron text-white mb-4">Conteúdo do Site</h2>
            <Button
              onClick={() => navigate('/admin/content')}
              className="w-full bg-neon-red/20 hover:bg-neon-red/30 text-white"
            >
              Gerenciar Conteúdo
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminIndex;
