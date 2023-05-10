import { useState, useEffect, useRef } from 'react';
import './scheme.scss';
import userActive from '../../../assets/img/userActive.png';
import user from '../../../assets/svg/user.svg';
import blocknot from '../../../assets/svg/blaknot.svg';
import rocket from '../../../assets/svg/rocket.svg';
import schemeActiveExample from '../../../assets/img/schemeActiveExample.png';
import Lottie from "lottie-react";
import animation from "../../../assets/lottieAnimations/shemeAnimation.json";
import { motion, useInView } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import schemeImg from '../../../assets/svg/Scheme_of_Work_2_activ.svg';

function Scheme() {

    const ref = useRef();
    const isInView = useInView(ref);
    const [animationStart, setAnimationStart] = useState(false);
    
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
            className='scheme'
            variants={motionAnimation}
            id='scheme'
        >
            <h2 className='scheme__title'>Scheme of Work</h2>
            <div className="scheme__content">
                <div className="scheme__list">
                    <img src={schemeImg} alt="" className='scheme__row-icons' />
                    <div className="scheme__row-example">
                        <div className="scheme__row-icon-wrap">
                            <img src={user} alt="" className='scheme__row-icon scheme-user' />
                        </div>
                        <div className="scheme__triangles scheme__triangles--transform">
                            <div className="scheme__triangle scheme__triangle-mini"></div>
                            <div className="scheme__triangle scheme__triangle-mid"></div>
                            <div className="scheme__triangle scheme__triangle-big"></div>
                        </div>
                        <img src={schemeActiveExample} alt="" className='scheme__row-example-img' />
                    </div>
                    <ul className='scheme__row-cards'>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Contact us</h3>
                            <p className='scheme__row-text scheme__row-text--active'>Fill out the contact form, briefly describe your project or ask us a question</p>
                        </li>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Discovery call</h3>
                            <p className='scheme__row-text' ref={ref}> Our Project Manager will arrange a video meeting with you in order to clarify the project assumptions</p>
                        </li>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Project estimation</h3>
                            <p className='scheme__row-text'>On the basis of the collected information, we will prepare an estimate of the costs and  duration of the project </p>
                        </li>
                    </ul>
                </div>
                <div className="scheme__ilustration">
                    <div className="scheme__ilustration-content">
                        {animationStart &&
                            <Lottie animationData={animation} loop={false} />
                        }
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Scheme;