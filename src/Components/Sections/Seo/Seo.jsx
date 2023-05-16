import './seo.scss';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton, setPrevNavigation, setNextNavigation } from '../../../store/reducers/seoReducer';
import SeoAnalysis from '../../SeoRows/SeoAnalysis/SeoAnalysis';
import SeoKeyword from '../../SeoRows/SeoKeyword/SeoKeyword';
import SeoPromotion from '../../SeoRows/SeoPromotion/SeoPromotion';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import MobileSeoSelector from '../../MobilesComponents/MobileSeoSelector/MobileSeoSelector';
import SeoOptimization from '../../SeoRows/SeoOptimizationn/SeoOptimization';

function Seo({ setModal }) {
    
    const dispatch = useDispatch();
    const seoBtns = useSelector(state => state.seoReducer.seoButtons);
    const seoIconBtns = useSelector(state => state.seoReducer.seoIconButtons);
    const selectedBtn = seoBtns.find((seoBtn) => seoBtn.active);

    const renderSeoCards = (buttonIndex) => {
        switch(buttonIndex) {
            case 0:
                return <SeoKeyword setModal={setModal} />
            case 1:
                return <SeoPromotion setModal={setModal}/>
            case 2:
                return <SeoOptimization setModal={setModal}/>
            case 3:
                return <SeoAnalysis setModal={setModal} />
            default:
                return <SeoAnalysis setModal={setModal} />
        }
    }

    const handlePrevNavigation = (btnId) => {
        if(btnId > 0) {
            dispatch(setPrevNavigation(btnId));
        }
    }

    const handleNextNavigation = (btnId) => {
        if(btnId < seoBtns.length - 1) {
            dispatch(setNextNavigation(btnId));
        }
    }

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3, once: true }}
            className='seo'
            variants={motionAnimation}
            id='seo'
        >
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
                <div className="seo__titles--mobile">
                    <MobileSeoSelector />
                </div>
                <div className="seo__icons">
                    {seoIconBtns && seoIconBtns.map((iconBtn) => (
                        <button key={iconBtn.id}>
                            <img src={iconBtn.img} alt="" className='seo__icons-img' />
                        </button>
                    ))}
                </div>
            </div>
            {renderSeoCards(selectedBtn.id)}
            <div className="seo__pagination">
                <div className="seo__pagination-wrap" onClick={() => handlePrevNavigation(selectedBtn.id)}>
                    <HiArrowLeft className='seo__pagination-icon'/>
                </div>
                <div className="seo__pagination-wrap" onClick={() => handleNextNavigation(selectedBtn.id)}>
                    <HiArrowRight className='seo__pagination-icon' />
                </div>
            </div>
        </motion.section>
    )
}

export default Seo;