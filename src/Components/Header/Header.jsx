import { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/svg/lcsItLogo.svg';
import burger from '../../assets/svg/burger.svg';
import burgerClose from '../../assets/svg/burgerClose.svg';
import MobileMenu from '../MobilesComponents/MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFilterTranslation } from '../../i18n/hooks.js';

function Header() {

    const [scroll, setScroll] = useState(window.scrollY);
    const [mobileMenu, setMobileMenu] = useState(false);
    const headerList = useSelector((state) => state.headerReducer.menuList);
    const { t } = useTranslation('header');

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scroll || mobileMenu ? "header header__active" : "header"}>
            <div className="header__logo">
                <img src={logo} alt="" className='header__logo-img' />
                <p className='header__logo-name'>{t('logo')}</p>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    {headerList && headerList.map((headerMenuItem) => (
                        <li className="header__list-item" key={headerMenuItem.id}> <a href={headerMenuItem.scrollToSection}>{t(`headerList.${headerMenuItem.title}`)}</a> </li>
                    ))}
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