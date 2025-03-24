import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Pages/Index';
import Login from './Pages/Login';
import Aluno from './Pages/Aluno';
import Visitante from './Pages/Visitante';
import Planos from './Pages/Plano';
import Forms from './Components/Forms';
import Cadastro from './Pages/Cadastro';

const fields1 = [
	{ name: 'matricula', label: 'Matrícula', type: 'text' },
	{ name: 'nome', label: 'Nome', type: 'text' },
	{ name: 'data_nascimento', label: 'Data de Nascimento', type: 'date' },
	{ name: 'cpf', label: 'CPF', type: 'text' },
	{ name: 'email', label: 'Email', type: 'email' },
	{ name: 'telefone', label: 'Telefone', type: 'tel' },
	{ name: 'logradouro', label: 'Logradouro', type: 'text' },
	{ name: 'cep', label: 'CEP', type: 'text' },
	{ name: 'rua', label: 'Rua', type: 'text' },
	{ name: 'num_casa', label: 'Número da Casa', type: 'text' },
	{ name: 'bairro', label: 'Bairro', type: 'text' },
	{
	  name: 'cidade',
	  label: 'Cidade',
	  type: 'text',
	},
	{
	  name: 'plano_id',
	  label: 'Plano',
	  type: 'select',
	  options: [
		{ value: '1', label: 'Plano Básico' },
		{ value: '2', label: 'Plano Intermediário' },
		{ value: '3', label: 'Plano Premium' },
		// Adicione mais planos conforme necessário
	  ],
	},
  ];
  
const submitUrl1 = 'https://sua-api.com/enviar-formulario';
const AddPath1 = "/aluno/cadastro"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router= {
        		createBrowserRouter([
				  {
				    path: "/",
				    element: <Login />,
				  },
				  {
				  	path: "/main",
				  	element: <Index />
				  },
				  {
					path: "/aluno",
					element: <Aluno AddPath={AddPath1}/>
				  },
				  {
					path: "/visitante",
					element: <Visitante />
				  },
				  {
					path: "/planos",
					element: <Planos />
				  },
				  {
					path: "/aluno/cadastro",
					element: <Cadastro fields={fields1} submitUrl={submitUrl1} />
				  }
				])
			}
		/>
  </React.StrictMode>
)