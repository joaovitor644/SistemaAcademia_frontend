import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Pages/Index';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router= {
        		createBrowserRouter([
				  {
				    path: "/",
				    element: <Index />,
				  }
				])
			}
		/>
  </React.StrictMode>
)