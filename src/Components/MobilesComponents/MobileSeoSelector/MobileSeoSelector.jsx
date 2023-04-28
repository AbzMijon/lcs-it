import { useState } from 'react';
import './mobileSeoSelector.scss';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../../store/reducers/seoReducer';

function MobileSeoSelector() {

    const [open, setOpen] = useState(false);
    const seoButtons = useSelector(state => state.seoReducer.seoButtons);
    const notActiveTabs = seoButtons.filter((notActiveTab) => !notActiveTab.active);
    const activeTab = seoButtons.find((notActiveTab) => notActiveTab.active);
    const dispatch = useDispatch();

    const selectTab = (id) => {
        dispatch(setActiveButton(id));
        setOpen(false);
    }

    return (
        <div className='seoSelector'>
            <div 
                className={open ? "seoSelector__current seoSelector__current--active" : "seoSelector__current"} 
                onClick={() => setOpen((prev) => !prev)}
            >
            <div className="seoSelector__currentItem-container">
                <h2 className='seoSelector__title'>SEO</h2>
                <div className='seoSelector__currentItem'>
                        <p className='seoSelector__currentItem-name'>{activeTab.label}</p>
                        {open ?
                            <MdKeyboardArrowUp className='seoSelector__arrow'/>
                        :
                            <MdKeyboardArrowDown className='seoSelector__arrow'/>
                        }
                </div>
            </div>
            </div>
            {open &&
                <ul className='seoSelector__list'>
                    {notActiveTabs && notActiveTabs?.map((notActiveTab) => {
                        return (
                            <li className='seoSelector__item' key={notActiveTab.id} onClick={() => selectTab(notActiveTab.id)}>
                                <div className="seoSelector__item-container">
                                    <p className='seoSelector__item-name'>{notActiveTab.label}</p>
                                    <MdKeyboardArrowDown className='seoSelector__arrow' />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default MobileSeoSelector;