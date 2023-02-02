import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
        {
            path: '/',
            element: <div>mememeeme</div>
        }
    ]
  },
]);

export default router;
