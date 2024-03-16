import { useState } from 'react';
import './outsourcing.scss';
import ContactBtn from '../../ContactBtn/ContactBtn';
import outsourcingBg1 from '../../../assets/img/molecula1.webp';
import outsourcingBg2 from '../../../assets/img/molecula2.webp';
import outsourcingBg3 from '../../../assets/img/molecula3.webp';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import { OUTSOURCING_CARDS } from '../../../constants/outsourcing';

function Outsourcing({ setModal }) {

    const [localMousePos, setLocalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

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
        >
            <motion.div className="outsourcing__wrap" variants={motionAnimation}>
                <h2 className='outsourcing__title'>Outsourcing</h2>
                <ul
                    className="outsourcing__table"
                >
                    {OUTSOURCING_CARDS && OUTSOURCING_CARDS.map((outsourcingCard) => {
                        return (
                            <li 
                                className={`outsourcing__table-wrapper outsourcing__card-${outsourcingCard.classname} lightEffectWrapper`}
                                onMouseMove={onMouseMove}
                                key={outsourcingCard.id}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="outsourcing__card lightEffectWrapper__card">
                                    <img src={outsourcingCard.icon} alt="" className="outsourcing__img" />
                                    <h4 className='outsourcing__card-name'>{outsourcingCard.title}</h4>
                                    <p className='outsourcing__text'>{outsourcingCard.text}</p>
                                    <div 
                                        id='light' 
                                        className="light" 
                                        style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    <li 
                        className="outsourcing__card outsourcing__card-btn">
                    <ContactBtn setModal={setModal}/>
                    </li>
                </ul>
            </motion.div>
            <img src={outsourcingBg1} alt="" className='outsourcing__bg1' />
            <img src={outsourcingBg2} alt="" className='outsourcing__bg2' />
            <img src={outsourcingBg3} alt="" className='outsourcing__bg3' />
        </motion.section>
    )
}

export default Outsourcing;