import { useState } from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Lottie from "lottie-react";
import seoPromotionLottie1 from '../../../assets/lottieAnimations/analysisLottie.json';
import seoPromotionLottie2 from '../../../assets/lottieAnimations/auditLottie.json';
import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/inst.svg';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import telegram from '../../../assets/svg/telegram.svg';
import { HiPlus } from 'react-icons/hi';
import seoCreativeLottie from '../../../assets/lottieAnimations/seoCreativeLottie.json';
import './seoPromotion.scss';

function SeoPromotion ({ setModal }) {

    const [showImgCard2, setShowImgCard2] = useState(true);
    const [showImgCard3, setShowImgCard3] = useState(true);

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
                <div className='seo__card-head'>
                    <ul className='seo__card-head-list'>
                        <li className='seo__card-item'>
                            <img src={facebook} alt="" className='seo__card-list-img' />
                        </li>
                        <li className='seo__card-item'>
                            <img src={instagram} alt="" className='seo__card-list-img' />
                        </li>
                        <li className='seo__card-item'>
                            <img src={linkedIn} alt="" className='seo__card-list-img' />
                        </li>
                        <li className='seo__card-item'>
                            <img src={telegram} alt="" className='seo__card-list-img' />
                        </li>
                    </ul>
                    <HiPlus className='seo__card-item-plus' />
                </div>
                <div className="seo__card-body">
                    <Lottie animationData={seoCreativeLottie} loop={false} className='seo__card-body-img' />
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>Creative Creation</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head">
                    <p className="seo__card-title">Discover your competitors</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard2}>
                    {showImgCard2 &&
                        <Lottie animationData={seoPromotionLottie1} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>Competitor Analysis</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head">
                    <p className="seo__card-title">Competitor Analysis</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard3}>
                    {showImgCard3 &&
                        <Lottie animationData={seoPromotionLottie2} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>Site Audit</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default SeoPromotion ;