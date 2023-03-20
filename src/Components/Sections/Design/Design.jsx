import React from 'react';
import Marquee from "react-fast-marquee";
import letterA from '../../../assets/img/letterA.png';
import server from '../../../assets/img/Server.png';
import activeServer from '../../../assets/img/activeServer.png';
import designCard1 from '../../../assets/img/designCard1.png';
import designCard2 from '../../../assets/img/designCard2.png';
import designCard3 from '../../../assets/img/designCard3.png';
import { FiArrowUpRight } from 'react-icons/fi';
import './design.scss';

function Design() {
    return (
        <section className='design'>
            <h2 className='design__title'>Design</h2>
            <p className='design__text'>As a full-service UX design agency, we work closely with our clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.</p>
            <ul className='design__types'>
                <li className='design__types-item'>
                    <FiArrowUpRight className='design__types-arrow'/>
                    <p>Graphic Design</p>
                </li>
                <li className='design__types-item'>
                    <FiArrowUpRight className='design__types-arrow'/>
                    <p>Branding</p>
                </li>
                <li className='design__types-item'>
                    <FiArrowUpRight className='design__types-arrow'/>
                    <p>Competitor Analysis</p>
                </li>
                <li className='design__types-item'>
                    <FiArrowUpRight className='design__types-arrow'/>
                    <p>Packaging Design</p>
                </li>
                <li className='design__types-item'>
                    <FiArrowUpRight className='design__types-arrow'/>
                    <p>Social Media</p>
                </li>
                <li className='design__types-item'>
                    <FiArrowUpRight className='design__types-arrow'/>
                    <p>Digital Advertising</p>
                </li>
            </ul>
            <Marquee
                delay={0}
                speed={30}
                loop={0}
                gradient={false}
                className='swiper-design'
            >
                <div className="design__card">
                    <img src={designCard1} alt="" className='design__card-img' />
                    <p className='design__card-title'>Product Strategy</p>
                    <p className='design__card-text'>We help to build your brand’s mission, vision and values while creating your unique identity and position in the market. We love to make people feel something by crafting stories that connect to people’s hearts.</p>
                </div>
                <div className="design__card">
                    <img src={designCard2} alt="" className='design__card-img' />
                    <img src={letterA} alt="" className='design__card-img-letter' />
                    <p className='design__card-title'>Brand Identity</p>
                    <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                </div>
                <div className="design__card">
                    <img src={designCard3} alt="" className='design__card-img' />
                    <p className='design__card-title'>UI/UX Design</p>
                    <p className='design__card-text'>Boost your brand awareness and customer loyalties, increase product revenues and conversion rates with the implementation of user experience and user interface design.</p>
                </div>
                <div className="design__card">
                    <div className="design__card-square"></div>
                    <img src={server} alt="" className='design__card-server-img' />
                    <img src={activeServer} alt="" className='design__card-server-img--active' />
                    {/* <img src={designCard4} alt="" className='design__card-img' /> */}
                    <p className='design__card-logo-title'>Logo</p>
                    <p className='design__card-title'>Prototype</p>
                    <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                </div>
                <div className="design__card">
                    <img src={designCard3} alt="" className='design__card-img' />
                    <p className='design__card-title'>Web Design</p>
                    <p className='design__card-text'>The process of planning and building the elements of the website. Creation of the overall visual appearance of the website.</p>
                </div>
            </Marquee>
        </section>
    )
}

export default Design;