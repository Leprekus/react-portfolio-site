import { Outlet } from "react-router";

export default function Root () {
    return (
        <main>
            
            <nav className="bg-purple-400">
                <h3 className="">Raul<br/>Rodriguez</h3>
                <button>Work with me</button>
            </nav>
            <Outlet/>
        </main>
    )
}