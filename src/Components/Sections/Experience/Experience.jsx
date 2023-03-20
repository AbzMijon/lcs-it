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

function Experience() {

    const [mouse, setMouse] = useState({            
        X   : 0,
        Y   : 0,
        CX  : 0,
        CY  : 0
    });


    const onMouseMove = () => {
        const card = document.getElementById('ex_card');
        document.body.onmousemove = function(e) {
            setMouse({...mouse, X: e.clientX - card.offsetLeft, Y: e.clientY - card.offsetTop});
        }
    }

    const step = () => {
        let targetY = mouse.Y;
        let dy = targetY - mouse.CY;
        setMouse({ ...mouse, CY: dy * 0.05 });
    
        let targetX = mouse.X;
        let dx = targetX - mouse.CX;
        setMouse({ ...mouse, CX: dx * 0.05 });

        const light = document.getElementById('light');

        light.style.background = 'radial-gradient(circle at ' + mouse.CX + 'px ' + mouse.CY + 'px, #fff, transparent)';

    };

    requestAnimationFrame(step);


    return (
        <section className='experience'>
            <div className="experience__block">
                <h2 className='experience__title'>Tremendous experience</h2>
                <ul className='experience__list' id='experience__list'>
                    <li id="ex_card" className='experience__card' onMouseMove={onMouseMove} >
                        <div id='light' className="light"></div>
                        <img src={experienceCardShield1} alt="" />
                        <p className='experience__card-title'>Software development</p>
                    </li>
                    <li className='experience__card' onMouseMove={onMouseMove} >
                        <img src={experienceCardShield2} alt="" />
                        <div className="light"></div>
                        <p className='experience__card-title'>Outsourcing</p>
                    </li>
                    <li className='experience__card' onMouseMove={onMouseMove} >
                        <div className="light"></div>
                        <img src={experienceCardShield3} alt="" />
                        <p className='experience__card-title'>Design</p>
                    </li>
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