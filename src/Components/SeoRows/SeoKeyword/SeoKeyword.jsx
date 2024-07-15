import ContactBtn from '../../ContactBtn/ContactBtn';
import './seoKeyword.scss';
import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/inst.svg';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import telegram from '../../../assets/svg/telegram.svg';
import { HiPlus } from 'react-icons/hi';
import Lottie from "lottie-react";
import seoKeywordLottie from '../../../assets/lottieAnimations/seoKeywordsLottie.json';
import seoCreativeLottie from '../../../assets/lottieAnimations/seoCreativeLottie.json';
import seoStrategyLottie from '../../../assets/lottieAnimations/seoStrategyLottie.json';
import { useTranslation } from 'react-i18next';

function SeoKeyword({ setModal }) {

    const { t } = useTranslation('mainPage');

    return (
        <ul className="seo__row">
            <li className='seo__card'>
                <div className='seo__card-head'>
                    <p className='seo__card-head-title'>{t('seoSection.cards.keywords.firstCard.title')}</p>
                    <p>{t('seoSection.cards.keywords.firstCard.kd')}</p>
                </div>
                <div className="seo__card-body seo__card-body--big-img">
                    <Lottie animationData={seoKeywordLottie} loop={false} className='seo__card-body-img' />
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.keywords.firstCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className='seo__card-head'>
                    <div className='seo__card-head-title'>
                        <span className='seo__card-head-circle seo__card-head-circle--purple'></span> 
                        <p>{t('seoSection.cards.keywords.secondCard.title')} 1</p>
                    </div>
                    <div className='seo__card-head-title'> 
                        <span className='seo__card-head-circle seo__card-head-circle--pink'></span> 
                        <p>{t('seoSection.cards.keywords.secondCard.title')} 2</p>
                    </div>
                </div>
                <div className="seo__card-body">
                    <Lottie animationData={seoStrategyLottie} loop={false} className='seo__card-body-img' />
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-subtitle'>{t('seoSection.cards.keywords.secondCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className='seo__card-head seo__card-head-icons'>
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
                    <p className='seo__card-subtitle'>{t('seoSection.cards.keywords.thirdCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default SeoKeyword;