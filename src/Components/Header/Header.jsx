import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/svg/lcsItLogo.svg';

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
                    <li className="header__list-item">Contacts</li>
                    <li className="header__list-item">Company</li>
                    <li className="header__list-item">Outsourcing</li>
                    <li className="header__list-item">Services</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;