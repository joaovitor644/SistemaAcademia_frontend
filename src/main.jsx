import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { createBrowserRouter, data, RouterProvider } from "react-router-dom";
import Index from './Pages/Index';
import Login from './Pages/Login';
import Aluno from './Pages/Aluno';
import Visitante from './Pages/Visitante';
import Planos from './Pages/Plano';
import Cadastro from './Pages/Cadastro';
import CadastroAluno from './Pages/CadastroAluno';
import ShowInfo from './Components/ShowInfo';
import ProfilePage from './Components/ProfilePage';
import Funcionario from './Pages/Funcionario';
import Aulas from './Pages/Aulas';
import Material from './Pages/Material';
import Avaliacao from './Pages/AvaliacaoFisica';
import Treinos from './Pages/Treino';
import CadastroAvFisica from './Pages/CadastroAvFisica'
import CadastroFuncionario from './Pages/CadastroFuncionario';
import EditarAluno from './Pages/EditarAluno';
import CadastroTreino from './Pages/CadastroTreino';
import CadastroVisitante from './Pages/CadastroVisitante';
import CadastroMaterial from './Pages/CadastroMaterial';
import CadastroPlano from './Pages/CadastroPlano';
import CadastroAula from './Pages/CadastroAula';

const submitUrl1 = 'http://localhost:5000/CadastrarPlano';
const planosApiUrl = 'http://localhost:5000/ListarPlano';

const AppRouter = () => {

  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/main", element: <Index /> },
        { path: "/aluno", element: <Aluno AddPath="/aluno/cadastro" /> },
        { path: "/visitante", element: <Visitante AddPath="/visitante/cadastro"/> },
        { path: "/visitante/cadastro", element: <CadastroVisitante submitUrl={"http://localhost:5000/CadastroVisitante"}/>},
        { path: "/planos", element: <Planos AddPath="/planos/cadastro"/> },
        { path: "/planos/cadastro", element: <CadastroPlano/>},
		    { path: "/aluno/cadastro", element: <CadastroAluno submitUrl={"http://localhost:5000/CadastrarAluno"}/> },
        { path: "/aluno/edit/:id" , element: <EditarAluno submitUrl={"http://localhost:5000/CadastrarAluno"} />},
        { path: "/funcionarios", element: <Funcionario/>},
        { path: "/aulas", element: <Aulas AddPath="/aulas/cadastro"/> },
        { path: "/aulas/cadastro", element: <CadastroAula/>},
        { path: "/material", element: <Material AddPath="/material/cadastro"/>},
        { path: "/material/cadastro", element: <CadastroMaterial />},
        { path: "/avaliacao", element: <Avaliacao/> },
        { path: "/treino", element: <Treinos/>},
        { path: "/dev", element:<CadastroTreino submitUrl={"http://localhost:5000/CadastroAvFisica"}  DataAluno={{
          "matricula": "123456",
          "nome": "João Silva",
          "data_nascimento": "1995-05-15",
          "cpf": "123.456.789-00",
          "email": "joao.silva@email.com",
          "telefone": "(11) 98765-4321",
          "logradouro": "Rua das Flores",
          "cep": "12345-678",
          "rua": "Rua das Flores",
          "num_casa": "123",
          "bairro": "Jardim Primavera",
          "cidade": "São Paulo",
          "plano_id": "1",
          "aulas": [
              "matematica",
              "fisica",
              "literatura"
          ]
      }
      }/> },
        
        { path: "/novo", element: <ShowInfo labels={["nome", "sobrenome"]} data={{nome: ["nome1"], sobrenome: ["dois"]}} /> }
      ])}
    />
  );
};
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
