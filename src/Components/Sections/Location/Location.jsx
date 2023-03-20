import React from 'react';
import './location.scss';
import poland from '../../../assets/svg/poland.svg';
import locationLocation from '../../../assets/svg/locationLocation.svg';
import locationMain from '../../../assets/svg/locationMain.svg';
import locationPhone from '../../../assets/svg/locationPhone.svg';
import ukFlag from '../../../assets/svg/uk.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';

function Location({ setModal }) {
    return (
        <section className='location'>
            <h2 className='location__title'>Our Locations</h2>
            <div className="location__content">
                <div className="location__selector">
                    <div className="location__selector-uk location__selector--active">
                        <img src={ukFlag} alt="" className='location__selector-img' />
                        <p className='location__selector-name'>United Kingdom</p>
                    </div>
                    <div className="location__selector-poland">
                        <img src={poland} alt="" className='location__selector-img' />
                        <p className='location__selector-name'>Poland</p>
                    </div>
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