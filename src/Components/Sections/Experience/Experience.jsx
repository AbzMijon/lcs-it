import React from 'react';
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
    return (
        <section className='experience'>
            <div className="experience__block">
                <h2 className='experience__title'>Tremendous experience</h2>
                <ul className='experience__list' id='experience__list'>
                    <li className='experience__card'>
                        <div className='experience__card-item'>
                            <span class="circleLight"></span>
                            <img src={experienceCardShield1} alt="" />
                            <p className='experience__card-title'>Software development</p>
                        </div>
                    </li>
                    <li className='experience__card'>
                        <img src={experienceCardShield2} alt="" />
                        <p className='experience__card-title'>Outsourcing</p>
                    </li>
                    <li className='experience__card'>
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