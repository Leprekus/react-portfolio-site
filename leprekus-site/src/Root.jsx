import { NavBar } from "./components/Navbar/Navbar"
import { Outlet } from 'react-router-dom'

export const Root = () => {
    return (
        <div> 
            <NavBar/>
            <Outlet/>
        </div>
    )
}