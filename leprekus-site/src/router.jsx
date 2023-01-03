import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Credits } from "./pages/Credits";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    }
])

export default router