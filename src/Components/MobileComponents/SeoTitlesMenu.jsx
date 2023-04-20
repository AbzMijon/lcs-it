import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

function SeoTitlesMenu({ currentItem }) {
    return (
        <div className='seoMobileTitles'>
            <div className='seoMobileTitles__current'>
                <h4 className='seoMobileTitles__title'>{currentItem}</h4>
                <IoIosArrowUp className='seoMobileTitles__arrowup'/>
            </div>
            <ul className='seoMobileTitles__list'>
                
            </ul>
        </div>
    )
}

export default SeoTitlesMenu;