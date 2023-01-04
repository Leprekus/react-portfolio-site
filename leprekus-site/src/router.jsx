import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Credits } from "./pages/Credits";
import Home from "./pages/Home";
import { Page } from "./components/Page";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { Projects } from "./pages/Projects";
import { ContactMe } from "./pages/ContactMe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/projects',
                element: <Projects/>,
            },
            {
                path: '/contact-me',
                element: <ContactMe/>,
            }
        ]
    }
])

export default router