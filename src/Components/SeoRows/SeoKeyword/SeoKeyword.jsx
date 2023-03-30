import React from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import './seoKeyword.scss';

function SeoKeyword({ setModal }) {
    return (
        <ul className="seo__row">

            <li className='seo__card'>
                <div className='seo__card-head'>
                    <p className='seo__card-head-title'>Keywords</p>
                    <p>KD%</p>
                </div>
                <div className='seo__card-procents'>
                    <div className="seo__card-procents-values">
                        <p className='seo__card-procents-title'>Keyword 1</p>
                        <p className='seo__card-procents-value'>100</p>
                    </div>
                </div>
                <div className="seo__card-procents-line">
                    <span className='seo__card-procents-line--active'></span>
                </div>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>

            <li className='seo__card'>
                <p className='seo__card-text'>You have a decent chance of ranking for</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className='seo__card-text'>You have a decent chance of ranking for</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
        </ul>
    )
}

export default SeoKeyword;