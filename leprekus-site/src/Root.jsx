import { Outlet } from "react-router";
import { Tooltip } from "@mui/material";
import briefcase from './assets/navbar-icons/briefcase.png'
import chat from './assets/navbar-icons/chat.png'
import technologies from './assets/navbar-icons/data-management.png'
import home from './assets/navbar-icons/home.png'
import user from './assets/navbar-icons/user.png'
import { NavLink} from "react-router-dom";
export default function Root () {
    // color bg-[#190e2f] 
    const active = {
        color: '#f472b6'
    }
    return (
        <main to='/' className="h-full"> 
            <nav to='/' className="
                    
            md:flex fixed justify-between p-10 
            md:bg-[#20232f] h-20 w-full items-center  z-10
          "
          >
                <div className=" fixed bottom-0 bg-gray-900 right-0 h-20 z-10
                flex justify-evenly items-center gap-2 w-full md:hidden">
                    <Tooltip title='Home'><NavLink to='/' className="w-10" style={({ isActive }) => isActive ? active: undefined}><img src={home}/></NavLink></Tooltip>
                    <Tooltip title='About Me'><NavLink to='/about' className="w-10" style={({ isActive }) => isActive ? active: undefined}><img src={user}/></NavLink></Tooltip>
                    <Tooltip title='Technologies'><NavLink to='/skills' className="w-10" style={({ isActive }) => isActive ? active: undefined}><img src={technologies}/></NavLink></Tooltip>
                    <Tooltip title='Projects'><NavLink to='/projects' className="w-10" style={({ isActive }) => isActive ? active: undefined}><img src={briefcase}/></NavLink></Tooltip>
                    <Tooltip title='Contact Me'><NavLink to='/contact' className="w-10" style={({ isActive }) => isActive ? active: undefined}><img src={chat}/></NavLink></Tooltip>
                </div>

            <div className="hidden md:block">
                <h2>Portfolio.</h2>
            </div>
            <div className="hidden md:flex gap-6">
                <NavLink to='/' className='' style={({isActive}) => isActive ? active : undefined}>Home</NavLink>
                <NavLink to='/about' className='' style={({isActive}) => isActive ? active : undefined}>About</NavLink>
                <NavLink to='/skills' className='' style={({isActive}) => isActive ? active : undefined}>Skills</NavLink>
                <NavLink to='/projects' className='' style={({isActive}) => isActive ? active : undefined}>Portfolio</NavLink>
                <NavLink to='/contact' className='' style={({isActive}) => isActive ? active : undefined}>Contact</NavLink>
            </div>
            </nav>
            {/* <nav to='/' className="
            hidden

            md:
            bg-gray-900
            h-20
            w-full
            flex
            items-center
            justify-between
          "
          >
            <div className="">
                <h2>Portfolio.</h2>
            </div>
            <div className="flex gap-6">
                <NavLink to='/' className='' style={({isActive}) => isActive ? active : undefined}>Home</NavLink>
                <NavLink to='/about' className='' style={({isActive}) => isActive ? active : undefined}>About</NavLink>
                <NavLink to='/skills' className='' style={({isActive}) => isActive ? active : undefined}>Skills</NavLink>
                <NavLink to='/projects' className='' style={({isActive}) => isActive ? active : undefined}>Portfolio</NavLink>
                <NavLink to='/contact' className='' style={({isActive}) => isActive ? active : undefined}>Contact</NavLink>
            </div>
            </nav> */}
            <div className='md:relative top-20'>
                <Outlet />
            </div>
        </main>
    )
}