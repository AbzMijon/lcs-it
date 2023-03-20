import React from 'react';
import './scheme.scss';
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

function Scheme() {
    return (
        <section className='scheme'>
            <h2 className='scheme__title'>Scheme of Work</h2>
            <div className="scheme__content">
                <div className="scheme__list">
                    <div className="scheme__row-icons">
                        <div className="scheme__row-icon-wrap">
                            <img src={user} alt="" className='scheme__row-icon' />
                        </div>
                        <div className='scheme__row-line'></div>

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
                        <div className="scheme__ilustration-circle">
                            <div className="scheme__ilustration-logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon scheme__ilustration-icon1">
                                <img src={circleIcon1} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon2">
                                <img src={circleIcon2} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon3">
                                <img src={circleIcon3} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon4">
                                <img src={circleIcon4} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon5">
                                <img src={circleIcon5} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon6">
                                <img src={circleIcon6} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon7">
                                <img src={circleIcon7} alt="" />
                            </div>
                            <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon8">
                                <img src={circleIcon1} alt="" />
                            </div>
                        </div>
                        <div className="sheme__cards-wrap">
                            <div className="scheme__recents">
                                <div className="scheme__triangles">
                                    <div className="scheme__triangle scheme__triangle-mini"></div>
                                    <div className="scheme__triangle scheme__triangle-mid"></div>
                                    <div className="scheme__triangle scheme__triangle-big"></div>
                                </div>
                                <p className='scheme__recents-title'>Recents Contacts</p>
                                <ul className='scheme__recents-list'>
                                    <li className='sheme__recents-item'>
                                        <img src={moonkle} alt="" className='sheme__recents-icon' />
                                        <div className="sheme__recents-info">
                                            <p className="sheme__recents-item-name">Moonkle LTD</p>
                                            <p className="sheme__recents-item-subtitle">Bank - 0987 3422 8756</p>
                                        </div>
                                    </li>
                                    <li className='sheme__recents-item'>
                                        <img src={softTech} alt="" className='sheme__recents-icon' />
                                        <div className="sheme__recents-info">
                                            <p className="sheme__recents-item-name">Soft Tech</p>
                                            <p className="sheme__recents-item-subtitle">Bank - 0987 3422 8756</p>
                                        </div>
                                    </li>
                                    <li className='sheme__recents-item'>
                                        <img src={plaid} alt="" className='sheme__recents-icon' />
                                        <div className="sheme__recents-info">
                                            <p className="sheme__recents-item-name">PLAID</p>
                                            <p className="sheme__recents-item-subtitle">Bank - 0987 3422 8756</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul className="sheme__plan">
                                <div className="scheme__triangles scheme__triangles-plan ">
                                    <div className="scheme__triangle scheme__triangle-mini"></div>
                                    <div className="scheme__triangle scheme__triangle-mid"></div>
                                    <div className="scheme__triangle scheme__triangle-big"></div>
                                </div>
                                <li className="scheme__plan-item">
                                    <img src={estimation} alt="" className="scheme__plan-img" />
                                    <p className='scheme__plan-name'>Estimation</p>
                                </li>
                                <li className="scheme__plan-item">
                                    <img src={teamSelection} alt="" className="scheme__plan-img" />
                                    <p className='scheme__plan-name'>Team selection</p>
                                </li>
                                <li className="scheme__plan-item">
                                    <img src={contract} alt="" className="scheme__plan-img" />
                                    <p className='scheme__plan-name'>Contract</p>
                                </li>
                                <li className="scheme__plan-item">
                                    <img src={payment} alt="" className="scheme__plan-img" />
                                    <p className='scheme__plan-name'>Payment</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Scheme;