import React, { useState } from 'react';
import "../Assets/ProfilePage.css"
const ProfilePage = ({ProfileData}) => {
  const [activeTab, setActiveTab] = useState('Endereço');

  // Dados fictícios para cada seção
  const data = {
    Endereço: ['Rua: Av. Paulista', 'Cidade: São Paulo', 'CEP: 01310-000'],
    Contrato: ['Tipo: CLT', 'Início: 01/01/2020', 'Status: Ativo'],
    Perfil: ['Cargo: Gerente', 'Departamento: TI', 'Acesso: Total'],
  };

  return (
    <div className="profile-page">
      {/* Barra de Navegação (Tabs) */}
      <div className="tabs">
        {Object.keys(data).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="content">
        <ul>
          {data[activeTab].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;