import React, { useEffect, useRef, useState } from 'react';
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
import ExperienceCard from '../../Cards/ExperienceCard';

function Experience() {

    const [globalMousePos, setGlobalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const [localMousePos, setLocalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const onMouseMove = (event) => {
        const localX = event.clientX - event.currentTarget.offsetLeft;
        const localY = event.clientY - event.currentTarget.offsetTop;
        setLocalMousePos({ X: localX, Y: localY });
    }


    useEffect(() => {
        const onMouseGlobalMove = (e) => {
            const { scrollHeight, scrollTop, clientHeight } = e.target/* .scrollingElement */;
            setGlobalMousePos({X: e.clientX, Y: e.clientY});
        };
        window.addEventListener('mousemove', onMouseGlobalMove);
        return () => {
            window.removeEventListener('mousemove', onMouseGlobalMove);
        }
    }, []);

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
                <div className='experience__skills-card'>
                    <img src={cssIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>CSS 3</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={figmaIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Figma</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={gitIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Git</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={mssqlIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>MSSQL</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>PostgreSQL</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={mongoIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>MongoDB</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={nestIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Nest.Js</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={cssIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>CSS 3</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={figmaIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Figma</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={gitIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Git</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={mssqlIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>MSSQL</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>PostgreSQL</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={mongoIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>MongoDB</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={nestIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Nest.Js</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={cssIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>CSS 3</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={figmaIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Figma</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={gitIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Git</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={mssqlIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>MSSQL</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>PostgreSQL</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={mongoIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>MongoDB</h5>
                </div>
                <div className='experience__skills-card'>
                    <img src={nestIcon} alt="" className='experience__skills-img' />
                    <h5 className='experience__skills-name'>Nest.Js</h5>
                </div>
            </Marquee>
        </section>
    ) 
}

export default Experience;