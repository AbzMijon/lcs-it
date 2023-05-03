import { useState } from 'react';
import './experience.scss';
import experienceCardShield1 from '../../../assets/img/experienceCardShield1.png';
import experienceCardShield2 from '../../../assets/img/experienceCardShield2.png';
import experienceCardShield3 from '../../../assets/img/experienceCardShield3.png';
import Marquee from "react-fast-marquee";
import { MExperienceCard } from '../../Cards/ExperienceCard/ExperienceCard';
import { MExperienceSkills } from '../../Cards/ExperienceSkills/ExperienceSkills';
import { SKILLS_CARDS } from '../../../constants/skillsCards';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';

function Experience() {

    const [localMousePos, setLocalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const onMouseMove = (event) => {
        const localX = event.clientX - event.currentTarget.offsetLeft;
        const localY = event.clientY - event.currentTarget.offsetTop;
        setLocalMousePos({ X: localX, Y: localY + 220 });
    }

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='experience' 
            id='services'
        >
            <div className="experience__block">
                <motion.h2 className='experience__title' variants={motionAnimation}>Tremendous experience</motion.h2>
                <motion.ul 
                    className='experience__list'
                    id='experience__list'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.6, once: true }}
                >
                    <MExperienceCard
                        variants={motionAnimation}
                        src={experienceCardShield1} 
                        label={'Software development'} 
                        onMouseMove={onMouseMove}
                        mouse={localMousePos}
                    />
                    <MExperienceCard
                        variants={motionAnimation}
                        src={experienceCardShield2} 
                        label={'Outsourcing'} 
                        onMouseMove={onMouseMove}
                        mouse={localMousePos}
                    />
                    <MExperienceCard
                        variants={motionAnimation}
                        src={experienceCardShield3} 
                        label={'Design'} 
                        onMouseMove={onMouseMove}
                        mouse={localMousePos}
                    />
                </motion.ul>
                <motion.p 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.6, once: true }}
                    variants={motionAnimation}
                    className='experience__text'
                    >LCS-IT is a modern and creative IT company, where products of any complexityand scale are created! Our team consists of only experienced developers, designers and friendly managers who implement all your bold ideas using the latest technology. We implement, maintain, and service. We provide an On-Demand Developers service. On call 24/7.
                </motion.p>
            </div>
            <motion.div 
                className="experience__skills" 
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.6, once: true }}>
                <Marquee
                    delay={0}
                    speed={30}
                    loop={0}
                    gradient={false}
                    className='swiper'
                >
                    {SKILLS_CARDS && SKILLS_CARDS.map((card) => {
                        return (
                            <MExperienceSkills
                                variants={motionAnimation}
                                id={card.id} 
                                src={card.src} 
                                label={card.label} 
                            />
                        )
                    })}
                </Marquee>
            </motion.div>
        </motion.section>
    )
}

export default Experience;