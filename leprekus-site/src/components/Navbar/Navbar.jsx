import { HamburgerMenu } from "../hamburguerMenu/HamburgerMenu"
import instagramLight from '../../assets/instagramLight.png'
import youtubeLight from '../../assets/youtubeLight.png'
import githubLight from '../../assets/githubLight.png'
import './Navbar.css'
export const NavBar = () => {
    return (
        <>
        <HamburgerMenu/>
        <aside>
            <div className="title-container">
                <h1 className="header">Rodriguez</h1>
                <h1 className="header">Raul</h1>
            </div>
            <a className="icon" href=""><img src={githubLight} alt='icon'/></a>
            <a className="icon" href=""><img src={instagramLight} alt='icon'/></a>
            <a className="icon" href=""><img src={youtubeLight} alt='icon'/></a>
        </aside>
        </>
    )
}