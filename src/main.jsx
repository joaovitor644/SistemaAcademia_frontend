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

const submitUrl1 = 'http://localhost:5000/CadastrarPlano';
const planosApiUrl = 'http://localhost:5000/ListarPlano';

const AppRouter = () => {

  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/main", element: <Index /> },
        { path: "/aluno", element: <Aluno AddPath="/aluno/cadastro" /> },
        { path: "/visitante", element: <Visitante /> },
        { path: "/planos", element: <Planos /> },
		    { path: "/aluno/cadastro", element: <CadastroAluno submitUrl={"http://localhost:5000/CadastrarAluno"}/> },
        { path: "/funcionarios", element: <Funcionario/>},
        { path: "/aulas", element: <Aulas/> },
        { path: "/material", element: <Material/>},
        { path: "/avaliacao", element: <Avaliacao/> },
        { path: "/treino", element: <Treinos/>},
        { path: "/dev", element:<CadastroFuncionario submitUrl={"http://localhost:5000/CadastroAvFisica"}/> },
        
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
