import React from 'react';
import developers1 from '../../../../../assets/svg/developers1.svg';
import developers2 from '../../../../../assets/svg/developers2.svg';
import developers3 from '../../../../../assets/svg/developers3.svg';
import developers4 from '../../../../../assets/svg/developers4.svg';

function DevelopmentDevelopersBlock() {
    return (
        <div>
            <div className="development__developers-head">
                <p className='development__developers-title'>Developers</p>
                <p className='development__developers-all'>See all</p>
            </div>
            <ul className='development__developers-list'>
                <li className='development__developers-item'>
                    <div className="development__developers-main-inf">
                        <img src={developers1} alt="" className='development__developers-avatar transfer-from' />
                        <div className="development__developers-inf">
                            <p className='development__developers-transfers'>Tranfers from</p>
                            <p className='development__developers-name'>Matheus Ferrero</p>
                        </div>
                    </div>
                    <p className='development__developers-position'>Junior</p>
                </li>
                <li className='development__developers-item'>
                    <div className="development__developers-main-inf">
                        <img src={developers2} alt="" className='development__developers-avatar' />
                        <div className="development__developers-inf">
                            <p className='development__developers-transfers'>Tranfers to</p>
                            <p className='development__developers-name'>Floyd Miles</p>
                        </div>
                    </div>
                    <p className='development__developers-mooney'>-$39.65</p>
                </li>
                <li className='development__developers-item'>
                    <div className="development__developers-main-inf">
                        <img src={developers3} alt="" className='development__developers-avatar' />
                        <div className="development__developers-inf">
                            <p className='development__developers-transfers'>Tranfers to</p>
                            <p className='development__developers-name'>Jerome Bell</p>
                        </div>
                    </div>
                    <p className='development__developers-mooney'>-$29.78</p>
                </li>
                <li className='development__developers-item'>
                    <div className="development__developers-main-inf">
                        <img src={developers4} alt="" className='development__developers-avatar' />
                        <div className="development__developers-inf">
                            <p className='development__developers-transfers'>Tranfers to</p>
                            <p className='development__developers-name'>Ralph Edwards</p>
                        </div>
                    </div>
                    <p className='development__developers-mooney'>-$46.61</p>
                </li>
            </ul>
        </div>
    )
}

export default DevelopmentDevelopersBlock;