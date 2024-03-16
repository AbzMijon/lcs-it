import { useEffect, useRef, useState } from 'react';
import './development.scss';
import developmentKeyboard from '../../../assets/img/developmentKeyboard.webp';
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
            variants={motionAnimation}
        >
            <h2 className='development__title'>Software development</h2>
            <div className="development__code">
                <div className="development__blocks">
                    <div className="development__blocks-overview">
                        {animationStart &&
                            <Lottie animationData={overviewLottie} loop={false} />
                        }
                    </div>
                    <div>
                        <DevelopmentCodeBlock animationStart={animationStart} codeRef={ref} />
                    </div>
                    <div className="development__blocks-activityAndDevelopers">
                        <div className="development__blocks-activity">
                            <div className='development__blocks-activity-lottie'>
                                {animationStart &&
                                    <Lottie animationData={activityLottie} loop={false} />
                                }
                            </div>
                            <div className="development__keyboard-info development__keyboard-info--planshet">
                                <p className="development__keyboard-text">We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.</p>
                                <div className='development__contact'>
                                    <ContactBtn setModal={setModal}/>
                                </div>
                            </div>
                        </div>
                        <div className="development__blocks-developers">
                            <DevelopmentDevelopersBlock />
                        </div>
                    </div>
                </div>
                <div 
                    className="development__keyboard"
                >
                    <img src={developmentKeyboard} alt="" />
                    <div className="development__keyboard-info">
                        <p className="development__keyboard-text">We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.</p>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Development;