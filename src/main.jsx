import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
// import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ProjectPort from './pages/ProjectPortfolio';
import ProjectGit from './pages/ProjectGit';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      // {
      //   path: '/About',
      //   element: <About />,
      // },
      {
        path: '/ProjectPortfolio',
        element: <ProjectPort />,
      },
      {
        path: '/ProjectGit',
        element: <ProjectGit />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
