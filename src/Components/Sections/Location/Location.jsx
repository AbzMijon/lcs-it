import './location.scss';
import locationLocation from '../../../assets/svg/locationLocation.svg';
import locationMain from '../../../assets/svg/locationMain.svg';
import locationPhone from '../../../assets/svg/locationPhone.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCountry } from '../../../store/reducers/locationReducer';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import MobileCountrySelector from '../../MobilesComponents/MobileCountrySelector/MobileCountrySelector';

function Location({ setModal }) {

    const dispatch = useDispatch();
    const locationButtons = useSelector((state) => state.locationReducer.locationButtons);
    const activeLocationButton = locationButtons.find((btn) => btn.active);

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3, once: true }}
            className='location' 
            id='contacts'
            variants={motionAnimation}
        >
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
                                <img src={locationBtn.src} alt="" className='location__selector-img' loading="lazy" />
                                <p className='location__selector-name'>{locationBtn.label}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='location__selector--mobile'>
                    <MobileCountrySelector />
                </div>
                <div className="location__card">
                    <ul className='location__card-list'>
                        {activeLocationButton.tel && 
                            <li className='location__card-item'>
                                <img src={locationPhone} alt="" className='location__card-icon' loading="lazy" />
                                <pre className='location__inf'>{activeLocationButton?.tel}</pre>
                            </li>
                        }
                        <li className='location__card-item'>
                            <img src={locationMain} alt="" className='location__card-icon' loading="lazy" />
                            <p className='location__inf'>{activeLocationButton?.email}</p>
                        </li>
                        <li className={activeLocationButton.tel ? 'location__card-item' : 'location__card-item location__card-item-poland'}>
                            <img src={locationLocation} alt="" className='location__card-icon' loading="lazy" />
                            <p className='location__inf'>{activeLocationButton?.adress}</p>
                        </li>
                    </ul>
                    <div className="location__btn">
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Location;