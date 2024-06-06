import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Stack from './page/Stack.jsx';
import Explore from './page/Explore.jsx';
import Work from './page/Work.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "stack",
        element: <Stack />,
      },
      {
        path: "/work",
        element: < Work/>
        
        
      }
    ] 
    
  },
  // {
  //   path: "/stack",
  //   element: <Stack />,
    
    
  // },
 
  // {
  //   path: "/about",
  //   element: < Projectdetails/>,
    
    
  // },
 

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
