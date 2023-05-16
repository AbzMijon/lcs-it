import './mobileMenu.scss';
import { useSelector } from 'react-redux';

function MobileMenu({ setMobileMenu }) {

    const mobileMenu = useSelector((state) => state.headerReducer.mobileMenuList);
    const mobileMenuIcons = useSelector((state) => state.headerReducer.mobileMenuIcons);
    const handleItem = () => {
        setMobileMenu(false);
    }

    return (
        <div className='mobileMenu'>
            <ul className='mobileMenu__list'>
                {mobileMenu && mobileMenu.map((mobileItem) => (
                    <li className='mobileMenu__item' onClick={handleItem} key={mobileItem.id}>
                        <a href={mobileItem.scrollToSection}>{mobileItem.title}</a>
                    </li>
                ))}
            </ul>
            <ul className='mobileMenu__folow-list'>
                {mobileMenuIcons && mobileMenuIcons.map((mobileMenuIcon) => (
                    <li className='mobileMenu__folow-item' key={mobileMenuIcon.id}>
                        <img src={mobileMenuIcon.img} alt="" className='mobileMenu__folow-img' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu;