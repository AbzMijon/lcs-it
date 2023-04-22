import React from 'react';
import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/inst.svg';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import telegram from '../../../assets/svg/telegram.svg';
import gitHub from '../../../assets/svg/github.svg';
import './mobileMenu.scss';

function MobileMenu() {
    return (
        <div className='mobileMenu'>
            <ul className='mobileMenu__list'>
                <li className='mobileMenu__item'>
                    <a href="#software">Software development</a>
                </li>
                <li className='mobileMenu__item'>
                    <a href="#outsourcing">Outsourcing</a>
                </li>
                <li className='mobileMenu__item'>
                    <a href="#seo">SEO</a>
                </li>
                <li className='mobileMenu__item'>
                    <a href="#design">Design</a>
                </li>
                <li className='mobileMenu__item'>
                    <a href="#scheme">Scheme of Work</a>
                </li>
                <li className='mobileMenu__item'>
                    <a href="#services">Servises</a>
                </li>
                <li className='mobileMenu__item'>
                    <a href="#contacts">CONTACT US</a>
                </li>
            </ul>
            <ul className='mobileMenu__folow-list'>
                <li className='mobileMenu__folow-item'>
                    <img src={facebook} alt="" className='mobileMenu__folow-img' />
                </li>
                <li className='mobileMenu__folow-item'>
                    <img src={instagram} alt="" className='mobileMenu__folow-img' />
                </li>
                <li className='mobileMenu__folow-item'>
                    <img src={linkedIn} alt="" className='mobileMenu__folow-img' />
                </li>
                <li className='mobileMenu__folow-item'>
                    <img src={telegram} alt="" className='mobileMenu__folow-img' />
                </li>
                <li className='mobileMenu__folow-item'>
                    <img src={gitHub} alt="" className='mobileMenu__folow-img' />
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;