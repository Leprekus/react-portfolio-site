import { Outlet } from "react-router";
import { Tooltip } from "@mui/material";
import briefcase from './assets/navbar-icons/briefcase.png'
import chat from './assets/navbar-icons/chat.png'
import technologies from './assets/navbar-icons/data-management.png'
import home from './assets/navbar-icons/home.png'
import user from './assets/navbar-icons/user.png'
export default function Root () {
    return (
        <main className=""> 
            <nav className="
            left-1/2
            -translate-x-1/2
            fixed
            top-4

          bg-purple-400 position
            rounded-lg
          "
          >
                <Tooltip title='Home'><button className="p-3.5 w-14 hover:bg-purple-200 rounded-lg transition-all duration-300"><img src={home}/></button></Tooltip>
                <Tooltip title='About Me'><button className="p-3.5 w-14 hover:bg-purple-200 rounded-lg transition-all duration-300"><img src={user}/></button></Tooltip>
                <Tooltip title='Technologies'><button className="p-3.5 w-14 hover:bg-purple-200 rounded-lg transition-all duration-300"><img src={technologies}/></button></Tooltip>
                <Tooltip title='Projects'><button className="p-3.5 w-14 hover:bg-purple-200 rounded-lg transition-all duration-300"><img src={briefcase}/></button></Tooltip>
                <Tooltip title='Contact Me'><button className="p-3.5 w-14 hover:bg-purple-200 rounded-lg transition-all duration-300"><img src={chat}/></button></Tooltip>
            </nav>
            <Outlet/>
        </main>
    )
}