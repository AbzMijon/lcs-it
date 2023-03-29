import React from 'react';
import './location.scss';
import poland from '../../../assets/svg/poland.svg';
import locationLocation from '../../../assets/svg/locationLocation.svg';
import locationMain from '../../../assets/svg/locationMain.svg';
import locationPhone from '../../../assets/svg/locationPhone.svg';
import ukFlag from '../../../assets/svg/uk.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCountry } from '../../../store/reducers/locationReducer';

function Location({ setModal }) {

    const dispatch = useDispatch();
    const locationButtons = useSelector((state) => state.locationReducer.locationButtons);

    return (
        <section className='location' id='contacts'>
            <h2 className='location__title'>Our Locations</h2>
            <div className="location__content">
                <div className="location__selector">
                    {locationButtons && locationButtons.map((locationBtn) => {
                        return (
                            <div 
                                key={locationBtn.id}
                                className={locationBtn.active ? "location__selector-uk location__selector--active" : 'location__selector-uk'}
                                onClick={() => dispatch(setActiveCountry(locationBtn.id))}
                                >
                                <img src={locationBtn.src} alt="" className='location__selector-img' />
                                <p className='location__selector-name'>{locationBtn.label}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="location__card">
                    <ul>
                        <li className='location__card-item'>
                            <img src={locationPhone} alt="" className='location__card-icon' />
                            <p className='location__inf'>+44(0)2070 528 406</p>
                        </li>
                        <li className='location__card-item'>
                            <img src={locationMain} alt="" className='location__card-icon' />
                            <p className='location__inf'>info@lcs-it.com</p>
                        </li>
                        <li className='location__card-item'>
                            <img src={locationLocation} alt="" className='location__card-icon' />
                            <p className='location__inf'>United Kingdom London SW1X 7NE  Knightsbridge Green </p>
                        </li>
                    </ul>
                    <div className="location__btn">
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location;