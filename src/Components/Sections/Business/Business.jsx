import { useState } from 'react';
import './business.scss';
import teamBg from '../../../assets/img/teamBg.webp';
import grid from '../../../assets/img/grid.webp';
import outsourcingCard1 from '../../../assets/svg/outsorcingCard6.svg';
import modelOut from '../../../assets/svg/modelOut.svg';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

function Business() {

    const [localMousePos, setLocalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const { t } = useTranslation('mainPage');

    const onMouseMove = (event) => {
        const localX = event.clientX - event.currentTarget.offsetLeft;
        const localY = event.clientY - event.currentTarget.offsetTop;
        setLocalMousePos({ X: localX, Y: localY + 6300 });
    }

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4, once: true }}
            className='business'
            id='business'
            variants={motionAnimation}
        >
            <h2 className='business__title'>{t('businessSection.title')}</h2>
            <div className="business__model">
                <div className="business__big-coubes lightEffectWrapper" onMouseMove={onMouseMove}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="business__card business__card--big lightEffectWrapper__card">
                        <div 
                            id='light' 
                            className="light" 
                            style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                        </div>
                    </div>
                </div>
                <div className="business__keyboard lightEffectWrapper" onMouseMove={onMouseMove}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="business__card business__card--keyboard lightEffectWrapper__card">
                        <div 
                            id='light' 
                            className="light" 
                            style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                        </div>
                    </div>
                </div>
                <div className="business__cards">
                    <div className="business__card business__outstaffing" onMouseMove={onMouseMove}>
                        <img src={outsourcingCard1} alt="" className='business__outstaffing-icon' loading="lazy" />
                        <p className='business__outstaffing-title'>{t('businessSection.cardTitle1')}</p>
                    </div>
                    <div className="business__card business__team" onMouseMove={onMouseMove}>
                        <img src={teamBg} alt="" className='business__team-bg' loading="lazy" />
                        <p className='business__team-title'>{t('businessSection.cardTitle2')}</p>
                    </div>
                    <div className="business__card business__outsorcing" onMouseMove={onMouseMove}>
                        <img src={modelOut} alt="" className='business__outsorcing-icon' loading="lazy" />
                        <p className='business__outsorcing-title'>{t('businessSection.cardTitle3')}</p>
                        <img src={grid} alt="" className='business__outsorcing-bg' loading="lazy" />
                    </div>
                </div>
                <div className='business__cards--mobile'>
                    <Marquee
                        delay={0}
                        speed={30}
                        loop={0}
                        gradient={false}
                        className='swiper'
                        direction='right'
                    >
                        <div className="business__outstaffing business__card" onMouseMove={onMouseMove}>
                            <img src={outsourcingCard1} alt="" className='business__outstaffing-icon' loading="lazy" />
                            <p className='business__outstaffing-title'>{t('businessSection.cardTitle1')}</p>
                        </div>
                        <div className="business__team business__card" onMouseMove={onMouseMove}>
                            <img src={teamBg} alt="" className='business__team-bg' loading="lazy" />
                            <h4 className='business__team-title'>{t('businessSection.cardTitle2')}</h4>
                        </div>
                        <div className="business__outsorcing business__card" onMouseMove={onMouseMove}>
                            <img src={modelOut} alt="" className='business__outsorcing-icon' loading="lazy" />
                            <h4 className='business__outsorcing-title'>{t('businessSection.cardTitle3')}</h4>
                            <img src={grid} alt="" className='business__outsorcing-bg' loading="lazy" />
                        </div>
                    </Marquee>
                </div>
                <div className="business__mini-coubes lightEffectWrapper" onMouseMove={onMouseMove}>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="business__card business__card--mini lightEffectWrapper__card">
                        <div 
                            id='light' 
                            className="light" 
                            style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Business;