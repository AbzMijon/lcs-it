import React, { useState } from 'react';
import './experience.scss';
import experienceCardShield1 from '../../../assets/img/experienceCardShield1.png';
import experienceCardShield2 from '../../../assets/img/experienceCardShield2.png';
import experienceCardShield3 from '../../../assets/img/experienceCardShield3.png';
import cssIcon from '../../../assets/svg/css.svg';
import figmaIcon from '../../../assets/svg/figma.svg';
import gitIcon from '../../../assets/svg/git.svg';
import mssqlIcon from '../../../assets/svg/mssql.svg';
import pgsqlIcon from '../../../assets/svg/pgsql.svg';
import mongoIcon from '../../../assets/svg/mongodb.svg';
import nestIcon from '../../../assets/svg/nest-js.svg';
import Marquee from "react-fast-marquee";
import ExperienceCard from '../../Cards/ExperienceCard/ExperienceCard';
import ExperienceSkills from '../../Cards/ExperienceSkills/ExperienceSkills';
import { SKILLS_CARDS } from '../../../constants/skillsCards';

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
        <section className='experience' id='services'>
            <div className="experience__block">
                <h2 className='experience__title'>Tremendous experience</h2>
                <ul className='experience__list' id='experience__list'>
                    <ExperienceCard 
                        src={experienceCardShield1} 
                        label={'Software development'} 
                        onMouseMove={onMouseMove}
                        mouse={localMousePos}
                    />
                    <ExperienceCard 
                        src={experienceCardShield2} 
                        label={'Outsourcing'} 
                        onMouseMove={onMouseMove}
                        mouse={localMousePos}
                    />
                    <ExperienceCard 
                        src={experienceCardShield3} 
                        label={'Design'} 
                        onMouseMove={onMouseMove}
                        mouse={localMousePos}
                    />
                </ul>
                <p className='experience__text'>LCS-IT is a modern and creative IT company, where products of any complexityand scale are created! Our team consists of only experienced developers,designers, and friendly managers who implement all your bold ideas using thelatest technology. We implement, maintain, and service. We provide an On-Demand Developers service. On call 24/7.</p>
            </div>
            <Marquee
                delay={0}
                speed={30}
                loop={0}
                gradient={false}
                className='swiper'
            >
                {SKILLS_CARDS && SKILLS_CARDS.map((card) => {
                    return (
                        <ExperienceSkills id={card.id} src={card.src} label={card.label} />
                    )
                })}
            </Marquee>
        </section>
    )
}

export default Experience;