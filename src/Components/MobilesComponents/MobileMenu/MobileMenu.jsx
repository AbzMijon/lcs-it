import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/inst.svg';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import telegram from '../../../assets/svg/telegram.svg';
import gitHub from '../../../assets/svg/github.svg';
import './mobileMenu.scss';

function MobileMenu({ setMobileMenu }) {

    const handleItem = () => {
        setMobileMenu(false);
    }

    return (
        <div className='mobileMenu'>
            <ul className='mobileMenu__list'>
                <li className='mobileMenu__item' onClick={handleItem}>
                    <a href="#software">Software development</a>
                </li>
                <li className='mobileMenu__item' onClick={handleItem}>
                    <a href="#outsourcing">Outsourcing</a>
                </li>
                <li className='mobileMenu__item' onClick={handleItem}>
                    <a href="#seo">SEO</a>
                </li>
                <li className='mobileMenu__item' onClick={handleItem}>
                    <a href="#design">Design</a>
                </li>
                <li className='mobileMenu__item' onClick={handleItem}>
                    <a href="#scheme">Scheme of Work</a>
                </li>
                <li className='mobileMenu__item' onClick={handleItem}>
                    <a href="#business">Business model</a>
                </li>
                <li className='mobileMenu__item' onClick={handleItem}>
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