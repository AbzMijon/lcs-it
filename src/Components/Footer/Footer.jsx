import React from 'react';
import './footer.scss';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/inst.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import telegram from '../../assets/svg/telegram.svg';
import gitHub from '../../assets/svg/github.svg';
import logo from '../../assets/svg/lcsItLogo.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={logo} alt="" className='footer__logo-img' />
                    <p className='footer__logo-name'>LCS-IT</p>
                </div>
                <div className="footer__adress">
                    <p className='footer__adress-title'>Adress</p>
                    <ul className='footer__adress-list'>
                        <li className='footer__adress-item'>1 Knightsbridge Green London SW1X 7NE United Kingdom</li>
                        <li className='footer__adress-item'>info@lcs-it.com</li>
                        <li className='footer__adress-item'>+44(0)2070 528 406</li>
                    </ul>
                </div>
                <div className="footer__about">
                    <p className='footer__about-title'>About</p>
                    <ul className="footer__about-list">
                        <li className='footer__about-item'>Contacts</li>
                        <li className='footer__about-item'>Company</li>
                        <li className='footer__about-item'>Outsourcing</li>
                        <li className='footer__about-item'>Services</li>
                    </ul>
                </div>
                <div className="footer__folow">
                    <p className='footer__folow-title'>Follow Us</p>
                    <ul className='footer__folow-list'>
                        <li className='footer__folow-item'>
                            <img src={facebook} alt="" className='footer__folow-img' />
                        </li>
                        <li className='footer__folow-item'>
                            <img src={instagram} alt="" className='footer__folow-img' />
                        </li>
                        <li className='footer__folow-item'>
                            <img src={linkedIn} alt="" className='footer__folow-img' />
                        </li>
                        <li className='footer__folow-item'>
                            <img src={telegram} alt="" className='footer__folow-img' />
                        </li>
                        <li className='footer__folow-item'>
                            <img src={gitHub} alt="" className='footer__folow-img' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__container-down">
                <ul className="footer__terms-list">
                    <li className="footer__terms-item">All right reserved 2022 Ⓒ LCS-IT</li>
                    <li className="footer__terms-item">Privacy policy</li>
                    <li className="footer__terms-item">Therm of use</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;