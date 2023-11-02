import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Project from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx'
import Header from './components/Header.tsx';
import ErrorPage from './pages/Error.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Header />
      <Home />
    </div>,
    errorElement: <ErrorPage />
  },

 { 
    path: "/about",
    element: 
    <div>
      <Header />
      <About />
    </div>,
    errorElement: <ErrorPage />
  },

  {
    path: "/projects",
    element:
    <div>
      <Header />
      <Project />
    </div>,
    errorElement: <ErrorPage />
  },

  {
    path: "/contact",
    element:
    <div>
      <Header />
      <Contact />
    </div>,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
