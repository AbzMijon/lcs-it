import React, { useState } from 'react';
import './seo.scss';
import seoIcon1 from '../../../assets/svg/seoIcon1.svg';
import seoIcon2 from '../../../assets/svg/seoIcon2.svg';
import seoIcon3 from '../../../assets/svg/seoIcon3.svg';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../../store/reducers/seoReducer';
import SeoAnalysis from '../../SeoRows/SeoAnalysis/SeoAnalysis';
import SeoKeyword from '../../SeoRows/SeoKeyword/SeoKeyword';

function Seo({ setModal }) {
    const dispatch = useDispatch();
    const seoBtns = useSelector(state => state.seoReducer.seoButtons);
    const selectedBtn = seoBtns.find((seoBtn) => seoBtn.active);

    const renderSeoCards = (buttonIndex) => {
        switch(buttonIndex) {
            case 0:
                return <SeoKeyword setModal={setModal} />
            case 2:
                return <SeoAnalysis setModal={setModal} />
            default:
                return <SeoAnalysis setModal={setModal} />
        }
    }

    return (
        <section className='seo'>
            <h2 className='seo__title'>SEO</h2>
            <div className="seo__navigate">
                <div className="seo__titles">
                    {seoBtns && seoBtns.map((seoBtn) => {
                        return (
                            <button 
                                key={seoBtn.id} 
                                className={seoBtn.active ? 'seo__navigate-btn seo__navigate-btn--active' : 'seo__navigate-btn'}
                                onClick={() => dispatch(setActiveButton(seoBtn.id))}
                            >
                                {seoBtn.label}
                            </button>
                        )
                    })}
                </div>
                <div className="seo__icons">
                    <button>
                        <img src={seoIcon1} alt="" className='seo__icons-img' />
                    </button>
                    <button>
                        <img src={seoIcon2} alt="" className='seo__icons-img' />
                    </button>
                    <button>
                        <img src={seoIcon3} alt="" className='seo__icons-img' />
                    </button>
                </div>
            </div>
            {renderSeoCards(selectedBtn.id)}
            <div className="seo__pagination">
                <div className="seo__pagination-wrap">
                    <HiArrowLeft className='seo__pagination-icon'/>
                </div>
                <div className="seo__pagination-wrap">
                    <HiArrowRight className='seo__pagination-icon' />
                </div>
            </div>
        </section>
    )
}

export default Seo;