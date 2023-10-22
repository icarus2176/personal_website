import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import Home from './pages/Home .tsx';
import About from '.pages/About.tsx';
import Project from './pages/Project.tsx';
import Contact from './pages/Contact.tsx'
import ErrorPage from './pages/Error.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

 { 
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },

  {
    path: "/projects",
    element: <Project />,
    errorElement: <ErrorPage />
  },

  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
