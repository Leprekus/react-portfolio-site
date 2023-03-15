import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Success from './pages/Success';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
        {
            path: '/',
            element: <Landing/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/skills',
            element: <Skills/>
        },
        {
            path: '/portfolio',
            element: <Projects/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/Success',
            element: <Success/>
        },
    ]
  },
]);

export default router;
