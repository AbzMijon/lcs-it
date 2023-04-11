import React from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import promotionCard1 from '../../../assets/img/promotionCard1.png';
import promotionCard2 from '../../../assets/img/promotionCard2.png';
import promotionCard3 from '../../../assets/img/promotionCard3.png';
import './seoPromotion.scss';
import { useState } from 'react';

function SeoPromotion({ setModal }) {

    const [showImgCard1, setShowImgCard1] = useState(true);

    const sethiddentImgCard1 = () => {
        setShowImgCard1(false);
        setTimeout(() => {
            setShowImgCard1(true);
        }, 1500);
    }

    return (
        <ul className="seo__row">
            <li className='seo__card'>
                <p className="seo__card-title">Content creation and distribution</p>
                <div className="seo__card-body" onClick={sethiddentImgCard1}>
                <img src={promotionCard1} alt="" className={showImgCard1 ? 'seo__card-body-img' : 'seo__card-body-img seo__card-body-img--hidden'} />
                </div>
                <p className='seo__card-subtitle'>Create Unique Content</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className="seo__card-title">Track a website's daily rankings</p>
                <div className="seo__card-body">
                    <img src={promotionCard2} alt="" className='seo__card-body-img' />
                </div>
                <p className='seo__card-subtitle'>Position Tracking</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className="seo__card-title">Website's structure construction</p>
                <div className="seo__card-body">
                    <img src={promotionCard3} alt="" className='seo__card-body-img seo__card-body-structure' />
                </div>
                <p className='seo__card-subtitle'>Semantic Core Formation</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
        </ul>
    )
}

export default SeoPromotion;