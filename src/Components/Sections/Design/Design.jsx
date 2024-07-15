import Marquee from "react-fast-marquee";
import letterA from '../../../assets/img/letterA.webp';
import server from '../../../assets/img/Server.webp';
import activeServer from '../../../assets/img/activeServer.webp';
import designCard2 from '../../../assets/img/designCard2.webp';
import { FiArrowUpRight } from 'react-icons/fi';
import arrow from '../../../assets/svg/arrow.svg';
import pin from '../../../assets/img/Pin.webp';
import './design.scss';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import { SKILLS_TYPES } from '../../../constants/skillsCards';
import { useTranslation } from "react-i18next";

function Design() {

    const { t } = useTranslation('mainPage');

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }} 
            className='design'
            id='design'
            variants={motionAnimation}
        >
            <h2 className='design__title'>{t('designSection.title')}</h2>
            <p className='design__text'>{t('designSection.subtitle')}</p>
            <ul className='design__types'>
                <Marquee
                    delay={0}
                    speed={30}
                    loop={0}
                    gradient={false}
                    className='swiper'
                    direction='right'
                >
                    {SKILLS_TYPES && SKILLS_TYPES.map((skillType) => {
                        return (
                            <li className='design__types-item' key={skillType.id}>
                                <FiArrowUpRight className='design__types-arrow'/>
                                <p>{t(`designSection.skillsList.${skillType.label}`)}</p>
                            </li>
                        )
                    })}
                </Marquee>
            </ul>
            <div className="design__cards-row">
                <Marquee
                    delay={0}
                    speed={30}
                    loop={0}
                    gradient={false}
                    className='swiper-design'
                >
                    <div className="design__card">
                        <div className='design__card-img design__card-img--pin'>
                            <img src={pin} alt="" loading="lazy" />
                        </div>
                        <p className='design__card-title'>{t('designSection.cardsList.card1.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card1.subtitle')}</p>
                    </div>
                    <div className="design__card">
                        <img src={designCard2} alt="" className='design__card-img' loading="lazy" />
                        <img src={letterA} alt="" className='design__card-img-letter' loading="lazy" />
                        <p className='design__card-title'>{t('designSection.cardsList.card2.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card2.subtitle')} </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--browser'>
                            <img src={arrow} alt="" loading="lazy" />
                        </div>
                        <p className='design__card-title'>{t('designSection.cardsList.card3.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card3.subtitle')}</p>
                    </div>
                    <div className="design__card">
                        <div className="design__card-square"></div>
                        <img src={server} alt="" className='design__card-server-img' loading="lazy" />
                        <img src={activeServer} alt="" className='design__card-server-img--active' loading="lazy" />
                        <p className='design__card-logo-title'>{t('designSection.cardsList.card4.logo')}</p>
                        <p className='design__card-title'>{t('designSection.cardsList.card4.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card4.subtitle')} </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--motion'>
                            <span className='design__card-circle design__card-circle--pink'></span>
                            <span className='design__card-circle design__card-circle--purple'></span>
                        </div>
                        <p className='design__card-title'>{t('designSection.cardsList.card5.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card5.subtitle')}</p>
                    </div>
                </Marquee>
                <div className="design__mobileRow">
                    <div className="design__card">
                        <div className='design__card-img design__card-img--pin'>
                            <img src={pin} alt="" loading="lazy" />
                        </div>
                        <p className='design__card-title'>{t('designSection.cardsList.card1.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card1.subtitle')}</p>
                    </div>
                    <div className="design__card">
                        <img src={designCard2} alt="" className='design__card-img' loading="lazy" />
                        <img src={letterA} alt="" className='design__card-img-letter' loading="lazy" />
                        <p className='design__card-title'>{t('designSection.cardsList.card2.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card2.subtitle')} </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--browser'>
                            <img src={arrow} alt="" loading="lazy" />
                        </div>
                        <p className='design__card-title'>{t('designSection.cardsList.card3.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card3.subtitle')}</p>
                    </div>
                    <div className="design__card">
                        <div className="design__card-square"></div>
                        <img src={server} alt="" className='design__card-server-img' loading="lazy" />
                        <img src={activeServer} alt="" className='design__card-server-img--active' loading="lazy" />
                        <p className='design__card-logo-title'>{t('designSection.cardsList.card4.logo')}</p>
                        <p className='design__card-title'>{t('designSection.cardsList.card4.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card4.subtitle')} </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--motion'>
                            <span className='design__card-circle design__card-circle--pink'></span>
                            <span className='design__card-circle design__card-circle--purple'></span>
                        </div>
                        <p className='design__card-title'>{t('designSection.cardsList.card5.title')}</p>
                        <p className='design__card-text'>{t('designSection.cardsList.card5.subtitle')}</p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Design;