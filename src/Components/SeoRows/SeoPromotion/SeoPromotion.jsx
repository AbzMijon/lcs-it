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
import seoKeywordCard3 from '../../../assets/img/seoKeywordCard3.png';
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
                <div className='seo__card-head-icons'>
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
                <div className="seo__card-body-full">
                    <img src={seoKeywordCard3} alt="" className='seo__card-body-imgElem' />
                    <div className="seo__card-body-content">
                        <div className="seo__card-body-title"></div>
                        <div className="seo__card-body-subtitle"></div>
                        <div className="seo__card-body-btn">Create</div>
                    </div>
                </div>
                <p className='seo__card-subtitle'>Creative Creation</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className="seo__card-title">Discover your competitors</p>
                <div className="seo__card-body" onClick={sethiddentImgCard2}>
                    {showImgCard2 &&
                        <Lottie animationData={seoPromotionLottie1} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <p className='seo__card-subtitle'>Competitor Analysis</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className="seo__card-title">Competitor Analysis</p>
                <div className="seo__card-body" onClick={sethiddentImgCard3}>
                    {showImgCard3 &&
                        <Lottie animationData={seoPromotionLottie2} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <p className='seo__card-subtitle'>Site Audit</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
        </ul>
    )
}

export default SeoPromotion ;