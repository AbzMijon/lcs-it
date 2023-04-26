import React, { useState } from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Lottie from "lottie-react";
import seoPromotionLottie1 from '../../../assets/lottieAnimations/Lottie_Create_Unique_Content.json';
import seoPromotionLottie2 from '../../../assets/lottieAnimations/position.json';
import seoPromotionLottie3 from '../../../assets/lottieAnimations/core.json';
import './seoPromotion.scss';

function SeoPromotion({ setModal }) {

    const [showImgCard1, setShowImgCard1] = useState(true);
    const [showImgCard2, setShowImgCard2] = useState(true);
    const [showImgCard3, setShowImgCard3] = useState(true);

    const sethiddentImgCard1 = () => {
        setShowImgCard1(false);
        setTimeout(() => {
            setShowImgCard1(true);
        }, 500);
    }
    const sethiddentImgCard2 = () => {
        setShowImgCard2(false);
        setTimeout(() => {
            setShowImgCard2(true);
        }, 500);
    }
    const sethiddentImgCard3 = () => {
        setShowImgCard3(false);
        setTimeout(() => {
            setShowImgCard3(true);
        }, 500);
    }

    return (
        <ul className="seo__row">
            <li className='seo__card'>
                <p className="seo__card-title">Content creation and distribution</p>
                <div className="seo__card-body" onClick={sethiddentImgCard1}>
                    {showImgCard1 &&
                        <Lottie animationData={seoPromotionLottie1} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <p className='seo__card-subtitle'>Create Unique Content</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className="seo__card-title">Track a website's daily rankings</p>
                <div className="seo__card-body" onClick={sethiddentImgCard2}>
                    {showImgCard2 &&
                        <Lottie animationData={seoPromotionLottie2} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <p className='seo__card-subtitle'>Position Tracking</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className="seo__card-title">Website's structure construction</p>
                <div className="seo__card-body" onClick={sethiddentImgCard3}>
                    {showImgCard3 &&
                        <Lottie animationData={seoPromotionLottie3} loop={false} className='seo__card-body-img' />
                    }
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