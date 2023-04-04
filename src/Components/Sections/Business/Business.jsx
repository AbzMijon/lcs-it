import React, { useEffect, useState } from 'react';
import './business.scss';
import bigCoubes from '../../../assets/img/bigCoubes.png';
import keyboard from '../../../assets/img/keyboard.png';
import miniCoubes from '../../../assets/img/miniCoubes.png';
import teamBg from '../../../assets/img/teamBg.png';
import grid from '../../../assets/img/grid.png';
import outsourcingCard1 from '../../../assets/svg/outsorcingCard6.svg';
import modelOut from '../../../assets/svg/modelOut.svg';

function Business() {

    const [globalMousePos, setGlobalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const [localMousePos, setLocalMousePos] = useState({
        X   : 0,
        Y   : 0,
    });

    const onMouseMove = (event) => {
        const localX = event.clientX - event.currentTarget.offsetLeft;
        const localY = event.clientY - event.currentTarget.offsetTop;
        setLocalMousePos({ X: localX, Y: localY + 6500 });
    }

    useEffect(() => {
        const onMouseGlobalMove = (e) => {
            const { scrollHeight, scrollTop, clientHeight } = e.target/* .scrollingElement */;
            setGlobalMousePos({X: e.clientX, Y: e.clientY});
        };
        window.addEventListener('mousemove', onMouseGlobalMove);
        return () => {
            window.removeEventListener('mousemove', onMouseGlobalMove);
        }
    }, []);

    return (
        <section className='business'>
            <h2 className='business__title'>Business model</h2>
            <div className="business__model">
                <div className="business__big-coubes" onMouseMove={onMouseMove}>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <div className="business__card business__card--big">
                        <div 
                            id='light' 
                            className="light" 
                            style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                        </div>
                    </div>
                </div>
                <div className="business__keyboard" onMouseMove={onMouseMove}>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <div className="business__card business__card--keyboard">
                        <div 
                            id='light' 
                            className="light" 
                            style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                        </div>
                    </div>
                </div>
                <div className="business__cards">
                    <div className="business__outstaffing" onMouseMove={onMouseMove}>
                        <img src={outsourcingCard1} alt="" className='business__outstaffing-icon' />
                        <h4 className='business__outstaffing-title'>Outstaffing</h4>
                    </div>
                    <div className="business__team" onMouseMove={onMouseMove}>
                        <img src={teamBg} alt="" className='business__team-bg' />
                        <h4 className='business__team-title'>Dedicated Team</h4>
                    </div>
                    <div className="business__outsorcing" onMouseMove={onMouseMove}>
                        <img src={modelOut} alt="" className='business__outsorcing-icon' />
                        <h4 className='business__outsorcing-title'>Outsourcing</h4>
                        <img src={grid} alt="" className='business__outsorcing-bg' />
                        {/* <div className="business__outsorcing-circle"></div> */}
                    </div>
                </div>
                <div className="business__mini-coubes" onMouseMove={onMouseMove}>
                <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <span style={{zIndex: '100'}}></span>
                    <div className="business__card business__card--mini">
                        <div 
                            id='light' 
                            className="light" 
                            style={{background: 'radial-gradient(circle at ' + localMousePos.X + 'px ' + localMousePos.Y + 'px, #fff, transparent)'}}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business;