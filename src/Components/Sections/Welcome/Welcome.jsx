import ContactBtn from '../../ContactBtn/ContactBtn';
import Cube from '../../Cube/Cube';
import './welcome.scss';
import { motion, useInView } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import mobileCube from '../../../assets/img/mobileCube.webp';
import { useRef } from 'react';

function Welcome({ setModal }) {

    const cubeRef = useRef();
    const isCubeInView = useInView(cubeRef);

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='welcome'
            variants={motionAnimation}
        >
            <div className="welcome__info">
                <ul className="welcome__skills">
                    <li className="welcome__skills-item">Functional</li>
                    <li className="welcome__skills-item">Perfomance</li>
                    <li className="welcome__skills-item">Usability</li>
                </ul>
                <h1 className='welcome__title'>Software  Development</h1>
                <p className="welcome__subtitle">LCS-IT is a prompt solution to issues, complex unique technological developments.</p>
                <div className='welcome__contact'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </div>
            {window.innerWidth > 650 ? (
                <div ref={cubeRef} className='welcome__cube-wrap'>
                    <Cube isCubeInView={isCubeInView}/>
                </div>
            ) : null}
            <img src={mobileCube} alt='' className='welcome__cube-mobile' aria-hidden="true" fetchPriority='high' />
        </motion.section>
    )
}

export default Welcome;