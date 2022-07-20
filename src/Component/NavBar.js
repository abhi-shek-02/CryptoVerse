import React from 'react'
import { NavLink } from 'react-router-dom'
// import { logo } from '../Img/cryptocurrency.png'
import '../Img/cryptocurrency.png'
import icon from '../Img/cryptocurrency.png';
import '../Component/NavBar.css'
const NavBar = () => {
    return (
        <nav className="nav-main">
            < img src={icon} alt="Error" className="icon" />
            <h1 style={{ color: 'white' }}>CryptoVerse</h1>
            <div className="links">
                <NavLink to='/' className="same1">Home</NavLink>
                <NavLink to='/news' className="same1">News</NavLink>
                <NavLink to='/cryptoCurrencies' className="same1">CryptoCurrencies</NavLink>
            </div>
        </nav>
    )
}

export default NavBar




































