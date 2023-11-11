import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Project from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ErrorPage from './pages/Error.jsx';
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
      <Footer />
    </div>,
    errorElement: <ErrorPage />
  },

 { 
    path: "/about",
    element: 
    <div>
      <Header />
      <About />
      <Footer />
    </div>,
    errorElement: <ErrorPage />
  },

  {
    path: "/projects",
    element:
    <div>
      <Header />
      <Project />
      <Footer />
    </div>,
    errorElement: <ErrorPage />
  },

  {
    path: "/contact",
    element:
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
