import { useState } from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Lottie from "lottie-react";
import seoPromotionLottie1 from '../../../assets/lottieAnimations/analysisLottie.json';
import seoPromotionLottie2 from '../../../assets/lottieAnimations/auditLottie.json';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import { HiPlus } from 'react-icons/hi';
import seoCreativeLottie from '../../../assets/lottieAnimations/seoCreativeLottie.json';
import './seoPromotion.scss';
import { useTranslation } from 'react-i18next';

function SeoPromotion ({ setModal }) {

    const [showImgCard2, setShowImgCard2] = useState(true);
    const [showImgCard3, setShowImgCard3] = useState(true);
    const { t } = useTranslation('mainPage');

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
                            <a href='https://www.linkedin.com/company/lcs-it-ltd/?originalSubdomain=uk'>
                                <img src={linkedIn} alt="" className='seo__card-list-img' loading="lazy" />
                            </a>
                        </li>
                    </ul>
                    <HiPlus className='seo__card-item-plus' />
                </div>
                <div className="seo__card-body">
                    <Lottie animationData={seoCreativeLottie} loop={false} className='seo__card-body-img' />
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.promotion.firstCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head">
                    <p className="seo__card-title">{t('seoSection.cards.promotion.secondCard.title')}</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard2}>
                    {showImgCard2 &&
                        <Lottie animationData={seoPromotionLottie1} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.promotion.secondCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head">
                    <p className="seo__card-title">{t('seoSection.cards.promotion.thirdCard.title')}</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard3}>
                    {showImgCard3 &&
                        <Lottie animationData={seoPromotionLottie2} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.promotion.thirdCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default SeoPromotion ;