import React from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';

function SeoKeyword({ setModal }) {
    return (
        <ul className="seo__row">
            <li className='seo__card'>
                <p className='seo__card-text'>You have a decent chance of ranking for</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className='seo__card-text'>You have a decent chance of ranking for</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
            <li className='seo__card'>
                <p className='seo__card-text'>You have a decent chance of ranking for</p>
                <div className='seo-btn'>
                    <ContactBtn setModal={setModal}/>
                </div>
            </li>
        </ul>
    )
}

export default SeoKeyword;