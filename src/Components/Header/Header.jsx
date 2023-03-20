import React from 'react';
import './header.scss';
import logo from '../../assets/svg/lcsItLogo.svg';

function Header() {
    return (
        <header className="header">
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