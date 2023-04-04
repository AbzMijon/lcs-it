import React from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import './seoKeyword.scss';
import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/inst.svg';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import telegram from '../../../assets/svg/telegram.svg';

function SeoKeyword({ setModal }) {
    return (
        <ul className="seo__row">

            <li className='seo__card'>
                <div className='seo__card-head'>
                    <p className='seo__card-head-title'>Keywords</p>
                    <p>KD%</p>
                </div>
                <div className="seo__card-list">
                    <div className='seo__card-procents'>
                        <div className="seo__card-procents-values">
                            <p className='seo__card-procents-title'>Keyword 1</p>
                            <p className='seo__card-procents-value'>100</p>
                        </div>
                        <div className="seo__card-procents-line">
                            <span className='seo__card-procents-line--active'></span>
                        </div>
                    </div>
                    <div className='seo__card-procents'>
                        <div className="seo__card-procents-values">
                            <p className='seo__card-procents-title'>Keyword 2</p>
                            <p className='seo__card-procents-value'>80</p>
                        </div>
                        <div className="seo__card-procents-line">
                            <span className='seo__card-procents-line--active'></span>
                        </div>
                    </div>
                    <div className='seo__card-procents'>
                        <div className="seo__card-procents-values">
                            <p className='seo__card-procents-title'>Keyword 3</p>
                            <p className='seo__card-procents-value'>50</p>
                        </div>
                        <div className="seo__card-procents-line">
                            <span className='seo__card-procents-line--active'></span>
                        </div>
                    </div>
                </div>
                <p className='seo__card-subtitle'>Selection of Keywords</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>

            <li className='seo__card'>
                <div className='seo__card-head'>
                    <div className='seo__card-head-title'>
                        <span className='seo__card-head-circle seo__card-head-circle--purple'></span> 
                        <p>Product 1</p>
                    </div>
                    <div className='seo__card-head-title'> 
                        <span className='seo__card-head-circle seo__card-head-circle--pink'></span> 
                        <p>Product 2</p>
                    </div>
                </div>
                <p className='seo__card-text'>Strategy Development</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <div className='seo__card-head'>
                    <div className='seo__card-head-title'>
                        <ul className='footer__folow-list'>
                            <li className='footer__folow-item'>
                                <img src={facebook} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={instagram} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={linkedIn} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={telegram} alt="" className='footer__folow-img' />
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='seo__card-text'>Creative Creation</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
        </ul>
    )
}

export default SeoKeyword;