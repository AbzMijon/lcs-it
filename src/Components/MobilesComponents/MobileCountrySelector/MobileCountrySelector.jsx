import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import './mobileCountrySelector.scss';
import { setActiveCountry } from '../../../store/reducers/locationReducer';

function MobileCountrySelector() {

    const [open, setOpen] = useState(false);
    const locationButtons = useSelector(state => state.locationReducer.locationButtons);
    const activeCountry = locationButtons?.find((locBtn) => locBtn.active);
    const notActiveCountries = locationButtons?.filter((locBtn) => !locBtn.active);
    const dispatch = useDispatch();

    const selectCountry = (id) => {
        dispatch(setActiveCountry(id));
        setOpen(false);
    }

    return (
        <div className='countrySelector'>
            <div 
                className={open ? "countrySelector__current countrySelector__current--active" : "countrySelector__current"} 
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className="countrySelector__current-container">
                    <img src={activeCountry.src} alt="" className='countrySelector__currentItem-img' />
                    <p className='countrySelector__currentItem-name'>{activeCountry.label}</p>
                    {open ?
                        <MdKeyboardArrowUp className='countrySelector__arrow'/>
                    :
                        <MdKeyboardArrowDown className='countrySelector__arrow'/>
                    }
                </div>
            </div>
            {open &&
                <ul className='countrySelector__list'>
                    {notActiveCountries && notActiveCountries.map((notActiveCountry) => {
                        return (
                            <li className='countrySelector__item' key={notActiveCountry.id} onClick={() => selectCountry(notActiveCountry.id)}>
                                <div className="countrySelector__item-container">
                                    <img src={notActiveCountry.src} alt="" className='countrySelector__item-img' />
                                    <p className='countrySelector__item-name'>{notActiveCountry.label}</p>
                                    <MdKeyboardArrowDown className='countrySelector__arrow' />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default MobileCountrySelector;