import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/svg/lcsItLogo.svg';
import burger from '../../assets/svg/burger.svg';
import burgerClose from '../../assets/svg/burgerClose.svg';
import MobileMenu from '../MobilesComponents/MobileMenu/MobileMenu';

function Header() {

    const [scroll, setScroll] = useState(window.scrollY);
    const [mobileMenu, setMobileMenu] = useState(false);
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
            {mobileMenu ?
                <img src={burgerClose} alt="" className='header__burger header__burger--close' onClick={() => setMobileMenu(false)} />
            :    
                <img src={burger} alt="" className='header__burger' onClick={() => setMobileMenu(true)} />
            }
            {mobileMenu &&
                <MobileMenu setMobileMenu={setMobileMenu} />
            }
        </header>
    )
}

export default Header;