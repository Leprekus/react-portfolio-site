import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing';
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
    ]
  },
]);

export default router;
