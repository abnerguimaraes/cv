import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/layout/layout';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Education from './pages/education/Education';
import Contact from './pages/contact/Contact';
import classes from './app.module.css';
import AppContextProvider from './store/appContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, path: '/resumo', element: <About /> },
        { index: false, path: '/experience', element: <Experience />},
        { index: false, path: '/education', element: <Education />},
        { index: false, path: '/contact', element: <Contact />},
      ],
    },
  ]);

  return (
    <AppContextProvider>
      <div className={classes.main}>
        <RouterProvider router={router} />
      </div>
    </AppContextProvider>
  )
}

export default App
