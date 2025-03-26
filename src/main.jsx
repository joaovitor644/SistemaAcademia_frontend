import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Pages/Index';
import Login from './Pages/Login';
import Aluno from './Pages/Aluno';
import Visitante from './Pages/Visitante';
import Planos from './Pages/Plano';
import Cadastro from './Pages/Cadastro';
import CadastroAluno from './Pages/CadastroAluno';

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
      ])}
    />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
