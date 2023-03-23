import React from 'react';
import './experienceCard.scss';

function ExperienceCard({ src, label, onMouseMove, mouse }) {
    console.log('experience card');
    return (
        <li className='experience__card' onMouseMove={onMouseMove} >
            <span style={{zIndex: '100'}}></span>
            <span style={{zIndex: '100'}}></span>
            <span style={{zIndex: '100'}}></span>
            <span style={{zIndex: '100'}}></span>
            <div className='card' id="ex_card">
                <img src={src} alt="" />
                <p className='experience__card-title'>{label}</p>
                <div 
                    id='light' 
                    className="light" 
                    style={{background: 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)'}}>
                </div>
            </div>
        </li>
    )
}

export default ExperienceCard;