import { useState, useEffect, useRef } from 'react';
import './scheme.scss';
import user from '../../../assets/svg/user.svg';
import schemeActiveExample from '../../../assets/img/schemeActiveExample.webp';
import Lottie from "lottie-react";
import animation from "../../../assets/lottieAnimations/shemeAnimation.json";
import { motion, useInView } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import schemeImg from '../../../assets/svg/Scheme_of_Work_2_activ.svg';
import { useSelector } from 'react-redux';

function Scheme() {

    const ref = useRef();
    const isInView = useInView(ref);
    const [animationStart, setAnimationStart] = useState(false);
    const shemeTextBlocks = useSelector(state => state.schemeReducer.shemeTextBlocks);
    
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
                    <ul className='scheme__row-cards' ref={ref}>
                        {shemeTextBlocks && shemeTextBlocks.map((schemeText) => (
                            <li className='scheme__row-card' key={schemeText.id}>
                                <h5 className='scheme__row-title'>{schemeText.title}</h5>
                                <p className='scheme__row-text scheme__row-text'>{schemeText.text}</p>
                            </li>
                        ))}
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