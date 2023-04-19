import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/svg/lcsItLogo.svg';
import burger from '../../assets/svg/burger.svg';

function Header() {
    const [scroll, setScroll] = useState(window.scrollY);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={!scroll ? "header" : "header header__active"}>
            <div className="header__logo">
                <img src={logo} alt="" className='header__logo-img' />
                <p className='header__logo-name'>LCS-IT</p>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list-item"> <a href="#contacts">Contacts</a> </li>
                    <li className="header__list-item"> <a href="#company">Company</a> </li>
                    <li className="header__list-item"> <a href="#outsourcing">Outsourcing</a> </li>
                    <li className="header__list-item"> <a href="#services">Services</a> </li>
                </ul>
            </nav>
            <img src={burger} alt="" className='header__burger' />
        </header>
    )
}

export default Header;