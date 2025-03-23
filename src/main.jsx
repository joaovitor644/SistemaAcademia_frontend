import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Pages/Index';
import Login from './Pages/Login';
import Aluno from './Pages/Aluno';
import Visitante from './Pages/Visitante';
import Planos from './Pages/Plano';

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
					element: <Aluno />
				  },
				  {
					path: "/visitante",
					element: <Visitante />
				  },
				  {
					path: "/planos",
					element: <Planos />
				  },
				])
			}
		/>
  </React.StrictMode>
)