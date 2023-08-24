/* import Menu from "../Menu/Menu" */
/* import { Header } from "./components/Header/Header" */
import "./Header.scss";
import { Link } from "react-router-dom" 

const Header = () => {

    return (
        <header className="header bg-blue-400">
            <div className="header_container">

                <h1 className="header_logo">MI GRANJA POKEMON</h1>

                <nav className="navbar">
                    <Link  to="/pokeApi"className="nav__link" href="#">nosotros</Link>
                    <Link to="/ItemListContainer"className="nav__link" href="#">productos</Link>
                    <Link to="/Contacto"className="nav__link" href="#">servicios</Link>
                    <Link to="/home"className="nav__link" href="#">contacto</Link>
                </nav>

            </div>
        </header>

    )
}


export  default Header
/* 
import { useContext } from 'react'
import Menu from '../Menu/Menu'
import './Header.scss'
import { DarkModeContext } from '../../context/DarkModeContext'
import CartWidget from '../CartWidget/CartWidget'

export const Header = () => {
    // const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <header className="header bg-blue-400">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>
                {/* <button onClick={toggleDarkMode}>{darkMode ? 'Modo Oscuro' : 'Modo Light'}</button> }
                <CartWidget />
                <Menu />
            </div>
        </header>
    )
}*/