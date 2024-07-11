import { useState } from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Lottie from "lottie-react";
import seoOptimizationLottie1 from '../../../assets/lottieAnimations/Lottie_Create_Unique_Content.json';
import seoOptimizationLottie2 from '../../../assets/lottieAnimations/position.json';
import seoOptimizationLottie3 from '../../../assets/lottieAnimations/core.json';
import './seoOptimization.scss';
import { useTranslation } from 'react-i18next';

function SeoOptimization({ setModal }) {

    const [showImgCard1, setShowImgCard1] = useState(true);
    const [showImgCard2, setShowImgCard2] = useState(true);
    const [showImgCard3, setShowImgCard3] = useState(true);

    const { t } = useTranslation('mainPage');

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
                <div className="seo__card-head">
                    <p className="seo__card-title">{t('seoSection.cards.optimization.firstCard.title')}</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard1}>
                    {showImgCard1 &&
                        <Lottie animationData={seoOptimizationLottie1} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.optimization.firstCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head">
                    <p className="seo__card-title">{t('seoSection.cards.optimization.secondCard.title')}</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard2}>
                    {showImgCard2 &&
                        <Lottie animationData={seoOptimizationLottie2} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.optimization.secondCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head">
                    <p className="seo__card-title">{t('seoSection.cards.optimization.thirdCard.title')}</p>
                </div>
                <div className="seo__card-body" onClick={sethiddentImgCard3}>
                    {showImgCard3 &&
                        <Lottie animationData={seoOptimizationLottie3} loop={false} className='seo__card-body-img' />
                    }
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.optimization.thirdCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default SeoOptimization;