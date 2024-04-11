import {useState} from "react"
import { MenuItems } from "./MenuItems.js";
import { ReactComponent as Logo} from "./Logo.svg"
import "./Navbar.css"

export default function NavBar () {
    const [name, setName] = useState({ clicked: false})

    const handleClick  = () => {
        setName({ clicked: !name.clicked})
    }
    return (
        <nav className="NavbarItems">
            <div className="navbar-logo">
                <a href="#"><Logo alt="little-lemon logo"/></a>
            </div>
            <div className="menu-icon" onClick={handleClick} >
                <i className={name.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            <ul className={!name.clicked ? "nav-menu" : "nav-menu active"}>{MenuItems.map((item,index) => {
                return (

                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                             {item.title}
                             </a>
                        </li>
                )
            })}
            </ul>
        </nav>
    )
}
