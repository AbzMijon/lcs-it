import React, { useEffect, useState } from 'react';
import './outsourcing.scss';
import outsourcingCard1 from '../../../assets/svg/outsorcingCard6.svg';
import outsourcingCard2 from '../../../assets/svg/reactjs.svg';
import outsourcingCard3 from '../../../assets/svg/android.svg';
import outsourcingCard4 from '../../../assets/svg/java.svg';
import outsourcingCard5 from '../../../assets/svg/php.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';
import outsourcingBg1 from '../../../assets/img/molecula1.png';
import outsourcingBg2 from '../../../assets/img/molecula2.png';
import outsourcingBg3 from '../../../assets/img/molecula3.png';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';

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
            <div className="outsourcing__wrap">
                <motion.h2 className='outsourcing__title' variants={motionAnimation}>Outsourcing</motion.h2>
                <motion.ul 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.3, once: true }}
                    className="outsourcing__table"
                >
                    <motion.li 
                        variants={motionAnimation}
                        className="outsourcing__table-wrapper outsourcing__card-sharp" 
                        onMouseMove={onMouseMove}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="outsourcing__card">
                            <img src={outsourcingCard1} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>C# .NET</h4>
                            <p className='outsourcing__text'>The power of C# stems from its universality. Because it’s used by various frameworks.</p>
                            <div 
                                id='light' 
                                className="light" 
                                style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li 
                        variants={motionAnimation}
                        className="outsourcing__table-wrapper outsourcing__card-react" 
                        onMouseMove={onMouseMove}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard2} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>React/ Angular </h4>
                            <p className='outsourcing__text'>React.js/AngularJS is one of the most popular toolkits for web development. Based on open source code</p>
                            <div 
                                id='light' 
                                className="light" 
                                style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li 
                        variants={motionAnimation}
                        className="outsourcing__table-wrapper outsourcing__card-mob" 
                        onMouseMove={onMouseMove}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard3} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>Android/ IOS</h4>
                            <p className='outsourcing__text'>Expertise in the industry allows us to be a reliable partner in the development of your mobile application.</p>
                            <div 
                                id='light' 
                                className="light" 
                                style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li 
                        variants={motionAnimation}
                        className="outsourcing__table-wrapper outsourcing__card-java" 
                        onMouseMove={onMouseMove}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard4} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>Java</h4>
                            <p className='outsourcing__text'>Java is the world’s most commonly used language for developing corporate solutions.</p>
                            <div 
                                id='light' 
                                className="light" 
                                style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li 
                        variants={motionAnimation}
                        className="outsourcing__table-wrapper outsourcing__card-php" 
                        onMouseMove={onMouseMove}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard5} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>PHP</h4>
                            <p className='outsourcing__text'>PHP is one of the main backend languages. It’s hard to find a site that doesn’t use this language.</p>
                            <div 
                                id='light' 
                                className="light" 
                                style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li 
                        variants={motionAnimation}
                        className="outsourcing__card outsourcing__card-btn">
                    <ContactBtn setModal={setModal}/>
                    </motion.li>
                </motion.ul>
            </div>
            <img src={outsourcingBg1} alt="" className='outsourcing__bg1' />
            <img src={outsourcingBg2} alt="" className='outsourcing__bg2' />
            <img src={outsourcingBg3} alt="" className='outsourcing__bg3' />
        </motion.section>
    )
}

export default Outsourcing;