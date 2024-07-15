import ContactBtn from '../../ContactBtn/ContactBtn';
import { FiArrowUpRight } from 'react-icons/fi';
import usaFlag from '../../../assets/svg/usa.svg';
import ukFlag from '../../../assets/svg/uk.svg';
import canadaFlag from '../../../assets/svg/canada.svg';
import usaLine from '../../../assets/img/usaLine.webp';
import ukLine from '../../../assets/img/ukLine.webp';
import canadaLine from '../../../assets/img/canadaLine.webp';
import usaResult from '../../../assets/svg/usaResult.svg';
import ukResult from '../../../assets/svg/ukResult.svg';
import canadaResult from '../../../assets/svg/canadaResult.svg';
import './seoAnalysis.scss';
import { useTranslation } from 'react-i18next';

function SeoAnalysis({ setModal }) {

    const { t } = useTranslation('mainPage');

    return (
        <ul className="seo__row">
            <li className='seo__card'>
                <div className="seo__card-head seo__card-head-analysis">
                    <div className="seo__card-header-left">
                        <img src={usaFlag} alt="" className='seo__card-flag' loading="lazy" />
                        <p className='seo__card-country'>USA</p>
                        <FiArrowUpRight className='seo__card-arrow' />
                    </div>
                    <button className='seo__card-volume-btn usa-volume'>{t('seoSection.cards.analysis.volume')}</button>
                </div>
                <div className="seo__card-statistic">
                    <img src={usaLine} alt="" className='seo__graphic-bg' loading="lazy" />
                    <div className="seo__card-result">
                        <div className="seo__card-result-img">
                            <img src={usaResult} alt="" loading="lazy" />
                        </div>
                        <p className='seo__card-result-title'>{t('seoSection.cards.analysis.result')}</p>    
                    </div>
                    <div className="seo__card-kd">
                        <p className='seo__card-kd-proccent'>55%</p>
                        <p className='seo__card-kd-title'>{t('seoSection.cards.analysis.kpd')}</p>
                    </div>
                    <div className="seo__card-volume">
                        <p className='seo__card-volume-count'>1,2K</p>
                        <p className='seo__card-volume-title'>{t('seoSection.cards.analysis.volume')}</p>
                    </div>
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-text'>{t('seoSection.cards.analysis.firstCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head seo__card-head-analysis">
                    <div className="seo__card-header-left">
                        <img src={ukFlag} alt="" className='seo__card-flag' loading="lazy" />
                        <p className='seo__card-country'>UK</p>
                        <FiArrowUpRight className='seo__card-arrow' />
                    </div>
                    <button className='seo__card-volume-btn uk-volume'>{t('seoSection.cards.analysis.volume')}</button>
                </div>
                <div className="seo__card-statistic">
                    <img src={ukLine} alt="" className='seo__graphic-bg' loading="lazy" />
                    <div className="seo__card-result">
                        <div className="seo__card-result-img">
                            <img src={ukResult} alt="" loading="lazy" />
                        </div>
                        <p className='seo__card-result-title'>{t('seoSection.cards.analysis.result')}</p>
                    </div>
                    <div className="seo__card-kd">
                        <p className='seo__card-kd-proccent'>60%</p>
                        <p className='seo__card-kd-title'>{t('seoSection.cards.analysis.kpd')}</p>
                    </div>
                    <div className="seo__card-volume">
                        <p className='seo__card-volume-count'>309K</p>
                        <p className='seo__card-volume-title'>{t('seoSection.cards.analysis.volume')}</p>
                    </div>
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-text seo__card-text-uk'>{t('seoSection.cards.analysis.secondCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
            <li className='seo__card'>
                <div className="seo__card-head seo__card-head-analysis">
                    <div className="seo__card-header-left">
                        <img src={canadaFlag} alt="" className='seo__card-flag' loading="lazy" />
                        <p className='seo__card-country'>Can</p>
                        <FiArrowUpRight className='seo__card-arrow' />
                    </div>
                    <button className='seo__card-volume-btn canada-volume'>{t('seoSection.cards.analysis.volume')}</button>
                </div>
                <div className="seo__card-statistic">
                    <img src={canadaLine} alt="" className='seo__graphic-bg' loading="lazy" />
                    <div className="seo__card-result">
                        <div className="seo__card-result-img">
                            <img src={canadaResult} alt="" loading="lazy" />
                        </div>
                        <p className='seo__card-result-title'>{t('seoSection.cards.analysis.result')}</p>
                    </div>
                    <div className="seo__card-kd">
                        <p className='seo__card-kd-proccent'>62%</p>
                        <p className='seo__card-kd-title'>{t('seoSection.cards.analysis.kpd')}</p>
                    </div>
                    <div className="seo__card-volume">
                        <p className='seo__card-volume-count'>519K</p>
                        <p className='seo__card-volume-title'>{t('seoSection.cards.analysis.volume')}</p>
                    </div>
                </div>
                <div className='seo__card-footer'>
                    <p className='seo__card-text seo__card-text-canada'>{t('seoSection.cards.analysis.thirdCard.subtitle')}</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default SeoAnalysis;