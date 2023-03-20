import React from 'react';
import './business.scss';
import bigCoubes from '../../../assets/img/bigCoubes.png';
import keyboard from '../../../assets/img/keyboard.png';
import miniCoubes from '../../../assets/img/miniCoubes.png';
import teamBg from '../../../assets/img/teamBg.png';
import grid from '../../../assets/img/grid.png';
import outsourcingCard1 from '../../../assets/svg/outsorcingCard6.svg';
import modelOut from '../../../assets/svg/modelOut.svg';

function Business() {
    return (
        <section className='business'>
            <h2 className='business__title'>Business model</h2>
            <div className="business__model">
                <div className="business__big-coubes">
                    <img src={bigCoubes} alt="" />
                </div>
                <div className="business__keyboard">
                    <img src={keyboard} alt="" />
                </div>
                <div className="business__cards">
                    <div className="business__outstaffing">
                        <img src={outsourcingCard1} alt="" className='business__outstaffing-icon' />
                        <h4 className='business__outstaffing-title'>Outstaffing</h4>
                    </div>
                    <div className="business__team">
                        <img src={teamBg} alt="" className='business__team-bg' />
                        <h4 className='business__team-title'>Dedicated Team</h4>
                    </div>
                    <div className="business__outsorcing">
                        <img src={modelOut} alt="" className='business__outsorcing-icon' />
                        <h4 className='business__outsorcing-title'>Outsourcing</h4>
                        <img src={grid} alt="" className='business__outsorcing-bg' />
                    </div>
                </div>
                <div className="business__mini-coubes">
                    <img src={miniCoubes} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Business;