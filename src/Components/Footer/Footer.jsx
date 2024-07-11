import './footer.scss';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/inst.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import telegram from '../../assets/svg/telegram.svg';
import gitHub from '../../assets/svg/github.svg';
import logo from '../../assets/svg/lcsItLogo.svg';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t: tHeader } = useTranslation('header');
    const { t: tFooter } = useTranslation('footer');

    return (
        <footer className='footer'>
            <div className="footer__content">
                <a href='#company' className="footer__logo">
                    <img src={logo} alt="" className='footer__logo-img' loading="lazy" />
                    <p className='footer__logo-name'>{tHeader('logo')}</p>
                </a>
                <div className="footer__adress">
                    <p className='footer__adress-title'>{tFooter('adress.title')}</p>
                    <ul className='footer__adress-list'>
                        <li className='footer__adress-item'>{tFooter('adress.adress')}</li>
                        <li className='footer__adress-item'>{tFooter('adress.email')}</li>
                        <li className='footer__adress-item'> <a href="tel:+44 2030 318 063">{tFooter('adress.phone')}</a> </li>
                    </ul>
                </div>
                <div className="footer__about">
                    <p className='footer__about-title'>{tFooter('about.title')}</p>
                    <ul className="footer__about-list">
                        <li className='footer__about-item'> <a href="#company">{tFooter('about.list.item1')}</a></li>
                        <li className='footer__about-item'> <a href="#services">{tFooter('about.list.item2')}</a></li>
                        <li className='footer__about-item'> <a href="#outsourcing">{tFooter('about.list.item3')}</a></li>
                        <li className='footer__about-item'> <a href="#contacts">{tFooter('about.list.item4')}</a> </li>
                    </ul>
                </div>
                <div className="footer__folow">
                    <p className='footer__folow-title'>{tFooter('followUs.title')}</p>
                    <ul className='footer__folow-list'>
                        <li className='footer__folow-item'>
                            <a href='https://www.linkedin.com/company/lcs-it-ltd/?originalSubdomain=uk'>
                                <img src={linkedIn} alt="" className='footer__folow-img' loading="lazy" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__container-down">
                <ul className="footer__terms-list">
                    <li className="footer__terms-item footer__terms-item--reversed">{tFooter('terms.reserved')}</li>
                    <li className="footer__terms-item">{tFooter('terms.policy')}</li>
                    <li className="footer__terms-item footer__terms-item-terms">{tFooter('terms.term')}</li>
                    <li className="footer__terms-item footer__terms-item--mob">
                        <a href='#company' className="footer__terms-logo">
                            <img src={logo} alt="" className='footer__terms-img' />
                            <p className='footer__terms-name'>{tHeader('logo')}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;