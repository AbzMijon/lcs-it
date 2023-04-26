import React, { useEffect, useRef, useState } from 'react';
import './development.scss';
import developmentKeyboard from '../../../assets/img/developmentKeyboard.jpg';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Lottie from "lottie-react";
import activityLottie from '../../../assets/lottieAnimations/activityLottie.json';
import overviewLottie from '../../../assets/lottieAnimations/overviewLottie.json';
import { motion, useInView } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import DevelopmentCodeBlock from './Components/DevelopmentCodeBlock/DevelopmentCodeBlock';
import DevelopmentDevelopersBlock from './Components/DevelopmentDevelopersBlock/DevelopmentDevelopersBlock';

function Development({ setModal }) {

    const [animationStart, setAnimationStart] = useState(false);
    const ref = useRef();
    const isInView = useInView(ref);
    
    useEffect(() => {
        if(isInView) {
            setAnimationStart(true);
        }
    }, [isInView]);

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='development'
            id='software'
        >
            <motion.h2 variants={motionAnimation} className='development__title'>Software development</motion.h2>
            <div className="development__code">
                <motion.div className="development__blocks" variants={motionAnimation}>
                    <div className="development__blocks-overview">
                        {animationStart &&
                            <Lottie animationData={overviewLottie} loop={false} />
                        }
                    </div>
                    <div /* ref={ref} */>
                        <DevelopmentCodeBlock animationStart={animationStart} codeRef={ref} />
                    </div>
                    <div className="development__blocks-activityAndDevelopers">
                        <div className="development__blocks-activity">
                            {animationStart &&
                                <Lottie animationData={activityLottie} loop={false} />
                            }
                        </div>
                        <div className="development__blocks-developers">
                            <DevelopmentDevelopersBlock />
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2, once: true }}
                    className="development__keyboard"
                >
                    <motion.img src={developmentKeyboard} alt="" variants={motionAnimation} />
                    <motion.div className="development__keyboard-info" variants={motionAnimation}>
                        <p className="development__keyboard-text">We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.</p>
                        <ContactBtn setModal={setModal}/>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Development;