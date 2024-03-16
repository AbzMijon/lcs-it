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

function Design() {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }} 
            className='design'
            id='design'
            variants={motionAnimation}
        >
            <h2 className='design__title'>Design</h2>
            <p className='design__text'>As a full-service IT company, we have a UX design team that works closely with our clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.</p>
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
                                <p>{skillType.label}</p>
                            </li>
                        )
                    })}
                </Marquee>
            </ul>
            <div variants={motionAnimation} className="design__cards-row">
                <Marquee
                    delay={0}
                    speed={30}
                    loop={0}
                    gradient={false}
                    className='swiper-design'
                >
                    <div className="design__card">
                        <div className='design__card-img design__card-img--pin'>
                            <img src={pin} alt="" />
                        </div>
                        <p className='design__card-title'>Product Strategy</p>
                        <p className='design__card-text'>We help to build your brand’s mission, vision and values while creating your unique identity and position in the market. We love to make people feel something by crafting stories that connect to people’s hearts.</p>
                    </div>
                    <div className="design__card">
                        <img src={designCard2} alt="" className='design__card-img' />
                        <img src={letterA} alt="" className='design__card-img-letter' />
                        <p className='design__card-title'>Brand Identity</p>
                        <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--browser'>
                            <img src={arrow} alt="" />
                        </div>
                        <p className='design__card-title'>UI/UX Design</p>
                        <p className='design__card-text'>Boost your brand awareness and customer loyalties, increase product revenues and conversion rates with the implementation of user experience and user interface design.</p>
                    </div>
                    <div className="design__card">
                        <div className="design__card-square"></div>
                        <img src={server} alt="" className='design__card-server-img' />
                        <img src={activeServer} alt="" className='design__card-server-img--active' />
                        <p className='design__card-logo-title'>Logo</p>
                        <p className='design__card-title'>Prototype</p>
                        <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--motion'>
                            <span className='design__card-circle design__card-circle--pink'></span>
                            <span className='design__card-circle design__card-circle--purple'></span>
                        </div>
                        <p className='design__card-title'>Web Design</p>
                        <p className='design__card-text'>The process of planning and building the elements of the website. Creation of the overall visual appearance of the website.</p>
                    </div>
                </Marquee>
                <div className="design__mobileRow">
                    <div className="design__card">
                        <div className='design__card-img design__card-img--pin'>
                            <img src={pin} alt="" />
                        </div>
                        <p className='design__card-title'>Product Strategy</p>
                        <p className='design__card-text'>We help to build your brand’s mission, vision and values while creating your unique identity and position in the market. We love to make people feel something by crafting stories that connect to people’s hearts.</p>
                    </div>
                    <div className="design__card">
                        <img src={designCard2} alt="" className='design__card-img' />
                        <img src={letterA} alt="" className='design__card-img-letter' />
                        <p className='design__card-title'>Brand Identity</p>
                        <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--browser'>
                            <img src={arrow} alt="" />
                        </div>
                        <p className='design__card-title'>UI/UX Design</p>
                        <p className='design__card-text'>Boost your brand awareness and customer loyalties, increase product revenues and conversion rates with the implementation of user experience and user interface design.</p>
                    </div>
                    <div className="design__card">
                        <div className="design__card-square"></div>
                        <img src={server} alt="" className='design__card-server-img' />
                        <img src={activeServer} alt="" className='design__card-server-img--active' />
                        <p className='design__card-logo-title'>Logo</p>
                        <p className='design__card-title'>Prototype</p>
                        <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                    </div>
                    <div className="design__card">
                        <div className='design__card-img design__card-img--motion'>
                            <span className='design__card-circle design__card-circle--pink'></span>
                            <span className='design__card-circle design__card-circle--purple'></span>
                        </div>
                        <p className='design__card-title'>Web Design</p>
                        <p className='design__card-text'>The process of planning and building the elements of the website. Creation of the overall visual appearance of the website.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Design;