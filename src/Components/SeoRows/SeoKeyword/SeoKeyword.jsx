import ContactBtn from '../../ContactBtn/ContactBtn';
import './seoKeyword.scss';
import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/inst.svg';
import linkedIn from '../../../assets/svg/linkedIn.svg';
import telegram from '../../../assets/svg/telegram.svg';
import { HiPlus } from 'react-icons/hi';
import seoKeywordCard3 from '../../../assets/img/seoKeywordCard3.png';
import seoKeywordCard2 from '../../../assets/img/SeoKeywordCard2.png';
import seoKeywordLine from '../../../assets/img/seoKeyWorldLine.png';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

function SeoKeyword({ setModal }) {
    const [activeGraphic, setActiveGraphic] = useState(false);
    const [activeLines, setActiveLines] = useState(false);

    const startGraphicAnimation = () => {
        setActiveGraphic(false);
        setTimeout(() => {
            setActiveGraphic(true);
        }, 1000);
    }
    const startLinesAnimation = () => {
        setActiveLines(false);
        setTimeout(() => {
            setActiveLines(true);
        }, 1000);
    }
    
    useLayoutEffect(() => {
        setTimeout(() => {
            setActiveGraphic(true);
            setActiveLines(true);
        }, 1000);
    }, [])

    return (
        <ul className="seo__row">

            <li className='seo__card'>
                <div className='seo__card-head'>
                    <p className='seo__card-head-title'>Keywords</p>
                    <p>KD%</p>
                </div>
                <div className="seo__card-list" onClick={startLinesAnimation}>
                    <div className='seo__card-procents'>
                        <div className="seo__card-procents-values">
                            <p className='seo__card-procents-title'>Keyword 1</p>
                            <p className={activeLines
                            ? 'seo__card-procents-value seo__card-procents-value--active'
                            : 'seo__card-procents-value'}>100</p>
                        </div>
                        <div className="seo__card-procents-line">
                            <span className={activeLines 
                                ? 'seo__card-procents-line--active keyword1-line' 
                                : 'seo__card-procents-line--active keyword1-line seo__card-procents-line--hidden'}></span>
                        </div>
                    </div>
                    <div className='seo__card-procents'>
                        <div className="seo__card-procents-values">
                            <p className='seo__card-procents-title'>Keyword 2</p>
                            <p className={activeLines
                            ? 'seo__card-procents-value seo__card-procents-value--active'
                            : 'seo__card-procents-value'}>80</p>
                        </div>
                        <div className="seo__card-procents-line">
                        <span className={activeLines 
                            ? 'seo__card-procents-line--active keyword2-line' 
                            : 'seo__card-procents-line--active keyword2-line seo__card-procents-line--hidden'}></span>
                        </div>
                    </div>
                    <div className='seo__card-procents'>
                        <div className="seo__card-procents-values">
                            <p className='seo__card-procents-title'>Keyword 3</p>
                            <p className={activeLines
                            ? 'seo__card-procents-value seo__card-procents-value--active'
                            : 'seo__card-procents-value'}>50</p>
                        </div>
                        <div className="seo__card-procents-line">
                        <span className={activeLines 
                            ? 'seo__card-procents-line--active keyword3-line' 
                            : 'seo__card-procents-line--active keyword3-line seo__card-procents-line--hidden'}></span>
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
                <div className="seo__card-body-graphic" onClick={startGraphicAnimation}>
                    <img src={seoKeywordCard2} alt="" className='seo__card-body-img' />
                    <img src={seoKeywordLine} alt="" className={activeGraphic ? 'seo__card-body-line' : 'seo__card-body-line seo__card-body-line--hidden'} />
                    <ul className='seo__card-body-month'>
                        <li className='seo__card-body-monthName'>Jan</li>
                        <li className='seo__card-body-monthName'>Feb</li>
                        <li className='seo__card-body-monthName'>Mar</li>
                        <li className='seo__card-body-monthName'>Apl</li>
                        <li className='seo__card-body-monthName'>Mai</li>
                        <li className='seo__card-body-monthName'>Jun</li>
                    </ul>
                    <div className="seo__card-body-table--vertical">
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                    </div>
                    <div className="seo__card-body-table--horisontal">
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                        <span className={activeGraphic ? 'seo__card-body-table-line' : ' seo__card-body-table-line seo__card-body-table-line--hidden'}></span>
                    </div>
                </div>
                <p className='seo__card-subtitle'>Strategy Development</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
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
        </ul>
    )
}

export default SeoKeyword;