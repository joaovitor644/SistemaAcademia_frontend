import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Pages/Index';
import Login from './Pages/Login';


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
				  }
				])
			}
		/>
  </React.StrictMode>
)