import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Credits } from "./pages/Credits";
import Home from "./pages/Home";
import { HomePageNew } from "./pages/HomePageNew";
import { Root } from "./Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePageNew/>,
            }
        ]
    }
])

export default router