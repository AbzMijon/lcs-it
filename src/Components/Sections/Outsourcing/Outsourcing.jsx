import { useState } from 'react';
import './outsourcing.scss';
import ContactBtn from '../../ContactBtn/ContactBtn';
import outsourcingBg1 from '../../../assets/img/molecula1.webp';
import outsourcingBg2 from '../../../assets/img/molecula2.webp';
import outsourcingBg3 from '../../../assets/img/molecula3.webp';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import { OUTSOURCING_CARDS } from '../../../constants/outsourcing';
import OutsourcingCard from '../../Cards/OutsourcingCard/OutsourcingCard';
import { useTranslation } from 'react-i18next';

function Outsourcing({ setModal }) {

    const [localMousePos, setLocalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const { t } = useTranslation('mainPage');

    const onMouseMove = (event) => {
        const localX = event.clientX - event.currentTarget.offsetLeft;
        const localY = event.clientY - event.currentTarget.offsetTop;
        setLocalMousePos({ X: localX, Y: localY });
    }

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='outsourcing' 
            id='outsourcing'
            variants={motionAnimation}
        >
            <div className="outsourcing__wrap">
                <h2 className='outsourcing__title'>{t('outsourcingSection.title')}</h2>
                <ul
                    className="outsourcing__table"
                >
                    {OUTSOURCING_CARDS && OUTSOURCING_CARDS.map((outsourcingCard) => {
                        return (
                            <OutsourcingCard
                                key={outsourcingCard.id}
                                card={outsourcingCard}
                                onMouseMove={onMouseMove}
                                localMousePos={localMousePos}
                            />
                        )
                    })}
                    <li 
                        className="outsourcing__card outsourcing__card-btn">
                        <ContactBtn setModal={setModal}/>
                    </li>
                </ul>
            </div>
            <img src={outsourcingBg1} alt="" className='outsourcing__bg1' loading="lazy" />
            <img src={outsourcingBg2} alt="" className='outsourcing__bg2' loading="lazy" />
            <img src={outsourcingBg3} alt="" className='outsourcing__bg3' loading="lazy" />
        </motion.section>
    )
}

export default Outsourcing;