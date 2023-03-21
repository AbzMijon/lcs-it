import React from 'react';
import './experienceCard.scss';

function ExperienceCard({ src, label, onMouseMove, mouse }) {
    return (
        <li id="ex_card" className='experience__card' onMouseMove={onMouseMove} >
            <div 
                id='light' 
                className="light" 
                style={{background: 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)'}}>
            </div>
            <img src={src} alt="" />
            <p className='experience__card-title'>{label}</p>
        </li>
    )
}

export default ExperienceCard;