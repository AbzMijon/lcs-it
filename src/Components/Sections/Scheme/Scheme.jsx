import React from 'react';
import './scheme.scss';
import userActive from '../../../assets/img/userActive.png';
import user from '../../../assets/svg/user.svg';
import blocknot from '../../../assets/svg/blaknot.svg';
import rocket from '../../../assets/svg/rocket.svg';
import circleIcon1 from '../../../assets/svg/facebookPurple.svg';
import circleIcon2 from '../../../assets/svg/ELEMENTS.svg';
import circleIcon3 from '../../../assets/svg/telegaPurple.svg';
import circleIcon4 from '../../../assets/svg/Subtract.svg';
import circleIcon5 from '../../../assets/svg/Group 9.svg';
import circleIcon6 from '../../../assets/svg/Group 81.svg';
import circleIcon7 from '../../../assets/svg/isntPurple.svg';
import moonkle from '../../../assets/svg/moonkle.svg';
import softTech from '../../../assets/svg/softTech.svg';
import plaid from '../../../assets/svg/plaid.svg';
import estimation from '../../../assets/img/estimation.png';
import teamSelection from '../../../assets/img/teamSelection.png';
import contract from '../../../assets/img/contract.png';
import payment from '../../../assets/img/payment.png';
import logo from '../../../assets/svg/lcsItLogo.svg';
import schemeActiveExample from '../../../assets/img/schemeActiveExample.png';
import Lottie from "lottie-react";
import animation from "../../../assets/lottieAnimations/shemeAnimation.json";

function Scheme() {
    return (
        <section className='scheme'>
            <h2 className='scheme__title'>Scheme of Work</h2>
            <div className="scheme__content">
                <div className="scheme__list">
                    <div className="scheme__row-icons">
                        <div className="scheme__row-example">
                            <div className="scheme__row-icon-wrap">
                                <img src={userActive} alt="" className='scheme__row-icon scheme-user--active' />
                                <img src={user} alt="" className='scheme__row-icon scheme-user' />
                            </div>
                            <div className="scheme__triangles scheme__triangles--transform">
                                <div className="scheme__triangle scheme__triangle-mini"></div>
                                <div className="scheme__triangle scheme__triangle-mid"></div>
                                <div className="scheme__triangle scheme__triangle-big"></div>
                            </div>
                            <img src={schemeActiveExample} alt="" className='scheme__row-example-img' />
                        </div>
                        <div className="scheme__row-icon-wrap">
                            <img src={userActive} alt="" className='scheme__row-icon scheme-user--active' />
                            <img src={user} alt="" className='scheme__row-icon scheme-user' />
                        </div>
                        <div className='scheme__row-line scheme__row-line--active'></div>

                        <div className="scheme__row-icon-wrap">
                            <img src={blocknot} alt="" className='scheme__row-icon' />
                        </div>
                        <div className='scheme__row-line'></div>

                        <div className="scheme__row-icon-wrap">
                            <img src={rocket} alt="" className='scheme__row-icon' />
                        </div>
                    </div>
                    <ul className='scheme__row-cards'>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Contact us</h3>
                            <p className='scheme__row-text'>Fill out the contact form, brifle descride your project or ask us a question</p>
                        </li>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Discovery call</h3>
                            <p className='scheme__row-text'>Andrew - our CEO will arrange a video meeting with you in order to clarify the project assumptions</p>
                        </li>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Project estimation</h3>
                            <p className='scheme__row-text'>On the basis of the collected information, we will prepare an estimate of the costs and  duration of the project</p>
                        </li>
                    </ul>
                </div>
                <div className="scheme__ilustration">
                    <div className="scheme__ilustration-content">
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Scheme;